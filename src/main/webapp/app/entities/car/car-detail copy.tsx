import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './car.reducer';
import { ICar } from 'app/shared/model/car.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICarDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class CarDetail extends React.Component<ICarDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { carEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="carsApp.car.detail.title">Car</Translate> [<b>{carEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="model">
                <Translate contentKey="carsApp.car.model">Model</Translate>
              </span>
            </dt>
            <dd>{carEntity.model}</dd>
            <dt>
              <span id="make">
                <Translate contentKey="carsApp.car.make">Make</Translate>
              </span>
            </dt>
            <dd>{carEntity.make}</dd>
            <dt>
              <span id="mileage">
                <Translate contentKey="carsApp.car.mileage">Mileage</Translate>
              </span>
            </dt>
            <dd>{carEntity.mileage}</dd>
            <dt>
              <span id="year">
                <Translate contentKey="carsApp.car.year">Year</Translate>
              </span>
            </dt>
            <dd>{carEntity.year}</dd>
            <dt>
              <span id="price">
                <Translate contentKey="carsApp.car.price">Price</Translate>
              </span>
            </dt>
            <dd>{carEntity.price}</dd>
            <dt>
              <span id="currency">
                <Translate contentKey="carsApp.car.currency">Currency</Translate>
              </span>
            </dt>
            <dd>{carEntity.currency}</dd>
            <dt>
              <span id="photo">
                <Translate contentKey="carsApp.car.photo">Photo</Translate>
              </span>
            </dt>
            <dd>
              {carEntity.photo ? (
                <div>
                  <a onClick={openFile(carEntity.photoContentType, carEntity.photo)}>
                    <img src={`data:${carEntity.photoContentType};base64,${carEntity.photo}`} style={{ maxHeight: '30px' }} />
                  </a>
                  <span>
                    {carEntity.photoContentType}, {byteSize(carEntity.photo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <Translate contentKey="carsApp.car.user">User</Translate>
            </dt>
            <dd>{carEntity.user ? carEntity.user.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/car" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/car/${carEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ car }: IRootState) => ({
  carEntity: car.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
