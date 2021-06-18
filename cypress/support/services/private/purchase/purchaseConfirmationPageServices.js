import { genericActions } from '../../../genericActions'

const purchaseConfirmationPage = {
  items : {
    container : '.cart_item',
    amount : '.cart_quantity',
    name : '.inventory_item_name',
    description : '.inventory_item_desc',
    price : '.inventory_item_price'
  },
  totalPrice : '.summary_total_label',
  backButton : '[data-test="cancel"]',
  finishButton : '[data-test="finish"]'
}

export class purchaseConfirmationPageServices {

  /*
   * Checks if a given name is present on the shopping cart
   * Requires selectedItemName Alias to be set before using
  */
  isSelectedItemOnCart(){
    cy.get('@selectedItemName')
      .then(selectedItem => {
        cy.get(purchaseConfirmationPage.items.container)
          .last()
          .find(purchaseConfirmationPage.items.name)
          .should('have.text', selectedItem);
      });
  }

  /*
   * Clicks on the finish button
  */
  clickFinishButton(){
    genericActions.click(purchaseConfirmationPage.finishButton);
  }

}

export const purchaseConfirmationPagePO = new purchaseConfirmationPageServices();