import { genericUtils } from "../support/genericUtils";
import { loginPageServices,
         headerPageServices,
         inventoryPageServices,
         itemDetailsPageServices,
         shoppingCartPageServices,
         purchaseDataFormPageServices,
         purchaseConfirmationPageServices,
         purchaseThankYouPageServices 
       } from "../support/services/pageServices"

context('Products Interaction Test Cases', () => {

  beforeEach(() => {
    cy.fixture('appUrls.json').then((urls) => {
      cy.visit(urls.home);
    });
    cy.fixture('credentials.json').then((creds) => {
      loginPageServices.loginByUserAndPass(creds.standard.user, creds.standard.password);
    });
    headerPageServices.waitForUserLogin();
  })

  it('SWAG00X: Open an item details page from inventory with standard user', () => {
    inventoryPageServices.openItem(genericUtils.getRandom(1,5));
    itemDetailsPageServices.isSelectedItemDisplayed();
    itemDetailsPageServices.isCorrectlyDisplayed();
  })

  it('SWAG00X: Purchase the lowest priced product with standard user', () => {
    inventoryPageServices.applyFilter('lohi');
    inventoryPageServices.addItemToCart(0);
    headerPageServices.clickCartIcon();
    shoppingCartPageServices.isSelectedItemOnCart();
    shoppingCartPageServices.clickCheckoutButton();
    purchaseDataFormPageServices.fillPurchaseForm('Felipe', 'Jimenez', '111131');
    purchaseDataFormPageServices.clickContinueButton();
    purchaseConfirmationPageServices.isSelectedItemOnCart();
    purchaseConfirmationPageServices.clickFinishButton();
    purchaseThankYouPageServices.isCorrectlyDisplayed();
  })

  it('SWAG00X: Purchase the highest priced product with standard user', () => {
    inventoryPageServices.applyFilter('hilo');
    inventoryPageServices.addItemToCart(0);
    headerPageServices.clickCartIcon();
    shoppingCartPageServices.isSelectedItemOnCart();
    shoppingCartPageServices.clickCheckoutButton();
    purchaseDataFormPageServices.fillPurchaseForm('Felipe', 'Jimenez', '111131');
    purchaseDataFormPageServices.clickContinueButton();
    purchaseConfirmationPageServices.isSelectedItemOnCart();
    purchaseConfirmationPageServices.clickFinishButton();
    purchaseThankYouPageServices.isCorrectlyDisplayed();
  })

});