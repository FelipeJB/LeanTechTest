import { genericActions } from '../../genericActions'

const headerPage = {
  optionsMenu : '#react-burger-menu-btn',
  pageLogo : '.header_label .app_logo',
  cartIcon : 'a.shopping_cart_link'   
}

export class headerPageServices {

  /*
   * Waits for user to be logged in
  */
  waitForUserLogin(){
    cy.get(headerPage.cartIcon)
      .should('be.visible');
  }

  /*
   * Clicks on the cart icon
  */
  clickCartIcon(){
    genericActions.click(headerPage.cartIcon);
  }

}

export const headerPagePO = new headerPageServices();