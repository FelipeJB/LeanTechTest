# LeanTechTest
Repository to track the Tradesy LeanTech excersises by Felipe Jimenez.

## Swaglabs Test Cases Design
The Gherkin test cases design can be found on the `productsInteraction.feature` file on the `cypress/integration` route.<br /><br />

Test case `@SWAG007` is automated and can be executed following the process defined on the Test Cases Automation section.

Test cases `@SWAG008` and `@SWAG009` correspond to the highest and lowest price items filtering and purchase. These test cases 
are automated and can be executed following the process defined on the Test Cases Automation section.

## Swaglabs Test Cases Automation
Node.js version 10 or higher and npm is required to execute this script. <br /><br />

In order to install the framework, please clone the repo, enter to the `LeanTechTest` folder, then, run via cmd the command
`npm install`, this will install all required dependencies. <br /><br />

After the framework is propperly installed, the tests may be executed headless using the command `npm run cy:run:headless`, 
also, the tests may be executed headed in chrome using the command `npm run cy:run`. <br /><br />

The tests can also be executed via the Cypress GUI, using the command `npx cypress open`, and selecting the
`productsInteraction` test.