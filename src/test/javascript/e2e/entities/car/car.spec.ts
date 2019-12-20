import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import CarComponentsPage, { CarDeleteDialog } from './car.page-object';
import CarUpdatePage from './car-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('Car e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let carComponentsPage: CarComponentsPage;
  let carUpdatePage: CarUpdatePage;
  let carDeleteDialog: CarDeleteDialog;
  const fileToUpload = '../../../../../../src/main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
  });

  it('should load Cars', async () => {
    await navBarPage.getEntityPage('car');
    carComponentsPage = new CarComponentsPage();
    expect(await carComponentsPage.getTitle().getText()).to.match(/Cars/);
  });

  it('should load create Car page', async () => {
    await carComponentsPage.clickOnCreateButton();
    carUpdatePage = new CarUpdatePage();
    expect(await carUpdatePage.getPageTitle().getAttribute('id')).to.match(/carsApp.car.home.createOrEditLabel/);
    await carUpdatePage.cancel();
  });

  it('should create and save Cars', async () => {
    async function createCar() {
      await carComponentsPage.clickOnCreateButton();
      await carUpdatePage.setModelInput('model');
      expect(await carUpdatePage.getModelInput()).to.match(/model/);
      await carUpdatePage.setMakeInput('make');
      expect(await carUpdatePage.getMakeInput()).to.match(/make/);
      await carUpdatePage.setMileageInput('5');
      expect(await carUpdatePage.getMileageInput()).to.eq('5');
      await carUpdatePage.setYearInput('5');
      expect(await carUpdatePage.getYearInput()).to.eq('5');
      await carUpdatePage.setPriceInput('5');
      expect(await carUpdatePage.getPriceInput()).to.eq('5');
      await carUpdatePage.setCurrencyInput('currency');
      expect(await carUpdatePage.getCurrencyInput()).to.match(/currency/);
      await carUpdatePage.setPhotoInput(absolutePath);
      await carUpdatePage.userSelectLastOption();
      await waitUntilDisplayed(carUpdatePage.getSaveButton());
      await carUpdatePage.save();
      await waitUntilHidden(carUpdatePage.getSaveButton());
      expect(await carUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createCar();
    await carComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await carComponentsPage.countDeleteButtons();
    await createCar();

    await carComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await carComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last Car', async () => {
    await carComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await carComponentsPage.countDeleteButtons();
    await carComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    carDeleteDialog = new CarDeleteDialog();
    expect(await carDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/carsApp.car.delete.question/);
    await carDeleteDialog.clickOnConfirmButton();

    await carComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await carComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
