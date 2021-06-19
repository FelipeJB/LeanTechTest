Feature: Products Interaction
  
  @SWAG001
  Scenario: Succesful login with valid user and password
    Given I am an user at Swaglabs login page
    When I set a 'valid' username and password on login form
    And I click on the login button on login page
    Then I should be able to log into the application
    And I should be able to see the 'inventory' page

  @SWAG002
  Scenario: Failed login with locked user
    Given I am an user at Swaglabs login page
    When I set a 'locked' username and password on login form
    And I click on the login button on login page
    Then I should not be able to log into the application
    And I should be able to see the 'login' page 

  @SWAG003
  Scenario: Failed Login with valid user and invalid password
    Given I am an user at Swaglabs login page
    When I set a 'invalid' username and password on login form
    And I click on the login button on login page
    Then I should not be able to log into the application
    And I should be able to see the 'login' page 

  @SWAG004
  Scenario: Alphabethical A-Z filter correctly sorting inventory
    Given I am a logged in 'standard' user on Swaglabs home page
    When  I select the 'A-Z' filter on the inventory
    Then  I should be able to see the ivnventory sorted 'A-Z'

  @SWAG005
  Scenario: Alphabethical Z-A filter correctly sorting inventory
    Given I am a logged in 'standard' user on Swaglabs home page
    When  I select the 'Z-A' filter on the inventory
    Then  I should be able to see the ivnventory sorted 'Z-A' 

  @SWAG006
  Scenario: Removing products from shopping cart
    Given I am a logged in 'standard' user on Swaglabs shopping cart with items added
    When I click on the remove button on any of the shopping cart items
    Then I should be able to see the item succesfully removed 

  @SWAG007
  Scenario: Open an item details page from inventory
    Given I am a logged in 'standard' user on Swaglabs home page
    When I click on any of the inventory items
    Then  I should be able to see the 'item details' page
    And I should be able to see the item title matching the selected item

  @SWAG008
  Scenario: Purchase the lowest priced product
    Given I am a logged in 'standard' user on Swaglabs inventory page sorted 'price low-high'
    When I add the first inventory item to the shopping cart
    And I go trough all the buyflow with 'valid' billing data
    Then I should be able to see the 'purchase thank you' page

  @SWAG009
  Scenario: Purchase the highest priced product
    Given I am a logged in 'standard' user on Swaglabs inventory page sorted 'price high-low'
    When I add the first inventory item to the shopping cart
    And I go trough all the buyflow with 'valid' billing data
    Then I should be able to see the 'purchase thank you' page