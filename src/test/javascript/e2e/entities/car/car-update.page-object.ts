import { element, by, ElementFinder } from 'protractor';

export default class CarUpdatePage {
  pageTitle: ElementFinder = element(by.id('carsApp.car.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  modelInput: ElementFinder = element(by.css('input#car-model'));
  makeInput: ElementFinder = element(by.css('input#car-make'));
  mileageInput: ElementFinder = element(by.css('input#car-mileage'));
  yearInput: ElementFinder = element(by.css('input#car-year'));
  priceInput: ElementFinder = element(by.css('input#car-price'));
  photoInput: ElementFinder = element(by.css('input#file_photo'));
  userSelect: ElementFinder = element(by.css('select#car-user'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setModelInput(model) {
    await this.modelInput.sendKeys(model);
  }

  async getModelInput() {
    return this.modelInput.getAttribute('value');
  }

  async setMakeInput(make) {
    await this.makeInput.sendKeys(make);
  }

  async getMakeInput() {
    return this.makeInput.getAttribute('value');
  }

  async setMileageInput(mileage) {
    await this.mileageInput.sendKeys(mileage);
  }

  async getMileageInput() {
    return this.mileageInput.getAttribute('value');
  }

  async setYearInput(year) {
    await this.yearInput.sendKeys(year);
  }

  async getYearInput() {
    return this.yearInput.getAttribute('value');
  }

  async setPriceInput(price) {
    await this.priceInput.sendKeys(price);
  }

  async getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  async setPhotoInput(photo) {
    await this.photoInput.sendKeys(photo);
  }

  async getPhotoInput() {
    return this.photoInput.getAttribute('value');
  }

  async userSelectLastOption() {
    await this.userSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
