const inventoryPage = {
  filtersDropdown : '[data-test="product_sort_container"]',
  products : {
    container : '.inventory_item',
    image : '.inventory_item_img img',
    name : '.inventory_item_name',
    description : '.inventory_item_desc',
    price : '.inventory_item_price',
    addToCartButton : 'button.btn_inventory' 
  }
}

export class inventoryPageServices {

  /*
   * Applies a given filter on the inventory
   * Available filters are az, za, lohi, hilo
  */
  applyFilter(filter){
    cy.get(inventoryPage.filtersDropdown)
      .select(filter);      
  }

  /*
   * Clicks on the add to cart button on a given inventory item according to its index
   * Stores selectedItemName Alias to record the name of favorited item
  */
  addItemToCart(index){
    cy.get(inventoryPage.products.container)
      .eq(index)
      .find(inventoryPage.products.name)
      .invoke('text')
      .as('selectedItemName');

    cy.get(inventoryPage.products.container)
      .eq(index)
      .find(inventoryPage.products.addToCartButton)
      .click(); 
  }

}

export const inventoryPagePO = new inventoryPageServices();