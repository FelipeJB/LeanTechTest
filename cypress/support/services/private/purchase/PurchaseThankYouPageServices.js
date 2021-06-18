const purchaseThankYouPage = {
  title : '#checkout_complete_container .complete-header',
  dispatchMessage : '#checkout_complete_container .complete-text',
  ponyImage : '#checkout_complete_container .pony_express',
  backButton : '[data-test="back-to-products"]'
}

export class purchaseThankYouPageServices {

  /*
   * Checks if the page is correctly displayed according to the visibility of its elements
  */
  isCorrectlyDisplayed(){
    cy.get(purchaseThankYouPage.title)
      .should('be.visible');
    cy.get(purchaseThankYouPage.dispatchMessage)
      .should('be.visible');
    cy.get(purchaseThankYouPage.ponyImage)
      .should('be.visible');
    cy.get(purchaseThankYouPage.backButton)
      .should('be.visible');
  }

}

export const purchaseThankYouPagePO = new purchaseThankYouPageServices();