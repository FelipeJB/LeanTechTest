import { genericActions } from '../../genericActions'

const loginPage = {
  emailInput : '[data-test="username"]',
  passwordInput : '[data-test="password"]',
  loginButton : '[data-test="login-button"]',
}

export class loginPageServices {

  /*
   * Sets a given email
  */
  setEmail(email){
    genericActions.clearSetText(loginPage.emailInput, email);
  }

  /*
   * Sets a given password
  */
  setPassword(password){
    genericActions.clearSetText(loginPage.passwordInput, password);
  }

  /*
   * Clicks on the login button
  */
  clickLoginButton(){
    genericActions.click(loginPage.loginButton);
  }

  /*
   * Sets a given user and password and clicks login button
  */
  loginByUserAndPass(email, password){
    this.setEmail(email);
    this.setPassword(password);
    this.clickLoginButton();
  }

}

export const loginPagePO = new loginPageServices();