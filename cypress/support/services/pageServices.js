import { loginPagePO }  from './public/loginPageServices'
import { headerPagePO }  from './private/headerPageServices'
import { inventoryPagePO }  from './private/inventoryPageServices'
import { itemDetailsPagePO }  from './private/itemDetailsPageServices'
import { shoppingCartPagePO }  from './private/purchase/shoppingCartPageServices'
import { purchaseDataFormPagePO }  from './private/purchase/purchaseDataFormPageServices'
import { purchaseConfirmationPagePO }  from './private/purchase/purchaseConfirmationPageServices'
import { purchaseThankYouPagePO }  from './private/purchase/purchaseThankYouPageServices'

const pageServices = {

  loginPageServices : loginPagePO,
  headerPageServices : headerPagePO,
  inventoryPageServices : inventoryPagePO,
  itemDetailsPageServices : itemDetailsPagePO,
  shoppingCartPageServices : shoppingCartPagePO,
  purchaseDataFormPageServices : purchaseDataFormPagePO,
  purchaseConfirmationPageServices : purchaseConfirmationPagePO,
  purchaseThankYouPageServices : purchaseThankYouPagePO

}

export default pageServices