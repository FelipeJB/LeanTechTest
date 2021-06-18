import { genericActions } from '../../../genericActions'

const shoppingCartPage = {
  items : {
    container : '.cart_item',
    amount : '.cart_quantity',
    name : '.inventory_item_name',
    description : '.inventory_item_desc',
    price : '.inventory_item_price',
    removeButton : '.item_pricebar .cart_button'
  },
  backButton : '[data-test="continue-shopping"]',
  checkoutButton : '[data-test="checkout"]'
}

export class shoppingCartPageServices {

  /*
   * Checks if a given name is present on the shopping cart
   * Requires selectedItemName Alias to be set before using
  */
  isSelectedItemOnCart(){
    cy.get('@selectedItemName')
      .then(selectedItem => {
        cy.get(shoppingCartPage.items.container)
          .last()
          .find(shoppingCartPage.items.name)
          .should('have.text', selectedItem);
      });
  }

  /*
   * Clicks on the checkout button
  */
  clickCheckoutButton(){
    genericActions.click(shoppingCartPage.checkoutButton);
  }

}

export const shoppingCartPagePO = new shoppingCartPageServices();