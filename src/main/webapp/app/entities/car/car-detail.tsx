import React from 'react';
import axios from "axios";
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
    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "GBP",
        amount: this.props.carEntity.price,
        currencies: [],
    };
  componentDidMount() {
    axios
        .get("https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest")
        .then(response => {
            // Initialized with 'USD' because the base currency is 'USD'
            // and it is not included in the response
            const currencyAr = []
                                /* eslint-disable no-console */
                                console.log('props');
                                console.log(this.props);
                                console.log(response.data.rates);
                                console.log(Object.keys(response.data.rates).length);
                                /* eslint-enable no-console */
            Object.keys(response.data.rates).forEach(key=>{
                /* eslint-disable no-console */
                console.log("counting");
                /* eslint-enable no-console */
                currencyAr.push(key)
                /* eslint-disable no-console */
                console.log(key);
                /* eslint-enable no-console */
            });
            this.setState({ currencies: currencyAr.sort() })
            /* eslint-disable no-console */
            console.log(this.state.currencies)
            /* eslint-enable no-console */
        })
        .catch(err => {
            /* eslint-disable no-console */
            console.log("Opps", err.message);
            /* eslint-enable no-console */
        });
    this.props.getEntity(this.props.match.params.id);
  }

    // Event handler for the conversion
    convertHandler = () => {
        const { carEntity } = this.props;
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(`https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
                .then(response => {
                    const result = carEntity.price * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(5) })
                })
                .catch(err => {
                    /* eslint-disable no-console */
                    console.log("Opps", err.message);
                    /* eslint-enable no-console */
                });
        } else {
            this.setState({ result: "You cant convert the same currency!" })
        }
    };

    // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
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
            <dd>{carEntity.price} (Price in USD)</dd>
            <div className="Converter">
                <div className="Form">
                    <input
                        name="amount"
                        type="hidden"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value })
                        }
                    />
                    <label>Select another currency to view price in</label>
                    {/* <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select> */}
                    <select onClick={this.convertHandler}
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    {/* <button onClick={this.convertHandler}>Convert</button> */}
                </div>
                {this.state.result && 
                    <h3>{this.state.result} (price in selected currency)</h3>
                }
            </div>
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
