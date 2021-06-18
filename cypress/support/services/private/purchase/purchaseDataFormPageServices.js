import { genericActions } from '../../../genericActions'

const purchaseDataFormPage = {
  fields : {
    firstName : '[data-test="firstName"]',
    lastName : '[data-test="lastName"]',
    zipCode : '[data-test="postalCode"]'
  },
  backButton : '[data-test="cancel"]',
  continueButton : '[data-test="continue"]'
}

export class purchaseDataFormPageServices {

  /*
   * Fills the purchase form with given data
  */
  fillPurchaseForm(firstName, lastName, zipCode){
    genericActions.clearSetText(purchaseDataFormPage.fields.firstName, firstName);
    genericActions.clearSetText(purchaseDataFormPage.fields.lastName, lastName);
    genericActions.clearSetText(purchaseDataFormPage.fields.zipCode, zipCode);
  }

  /*
   * Clicks on the continue button
  */
  clickContinueButton(){
    genericActions.click(purchaseDataFormPage.continueButton);
  }

}

export const purchaseDataFormPagePO = new purchaseDataFormPageServices();