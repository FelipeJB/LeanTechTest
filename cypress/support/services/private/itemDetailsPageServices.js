const itemDetailsPage = {
  image : '.inventory_details_img',
  name : '.inventory_details_name',
  description : '.inventory_details_desc',
  price : '.inventory_details_price',
  addToCartButton : 'button.btn_inventory' 
}

export class itemDetailsPageServices {

  /*
   * Checks if the page is correctly displayed according to the visibility of its elements
  */
  isCorrectlyDisplayed(){
    cy.get(itemDetailsPage.image)
      .should('be.visible');
    cy.get(itemDetailsPage.name)
      .should('be.visible');
    cy.get(itemDetailsPage.description)
      .should('be.visible');
    cy.get(itemDetailsPage.price)
      .should('be.visible');
    cy.get(itemDetailsPage.addToCartButton)
      .should('be.visible');
  }

  /*
   * Checks if the details page matches the selected item
   * Requires selectedItemName Alias to be set before using
  */
  isSelectedItemDisplayed(){
    cy.get('@selectedItemName')
      .then(selectedItem => {
        cy.get(itemDetailsPage.name)
          .should('have.text', selectedItem);
      });
  }

}

export const itemDetailsPagePO = new itemDetailsPageServices();