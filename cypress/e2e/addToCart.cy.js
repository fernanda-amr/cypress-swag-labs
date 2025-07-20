import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import InventoryPage from "../pages/inventoryPage"

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('Swag Labs Test', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.login(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkLocation()

  })

  it('Should add all products to cart and verify', () => {
    
    inventoryPage.getProductsNames().then((productNames) => {
        const totalProducts = productNames.length
        inventoryPage.addAllProductsToCart()
        inventoryPage.goToCart()
        cy.get('.cart_item').should('have.length', totalProducts)
    })
  })  

  it('Should remove all products and verify cart is empty', () => {
    
    inventoryPage.getProductsNames().then((productNames)=> {
        inventoryPage.addAllProductsToCart()
        inventoryPage.removeAllProducts()
        inventoryPage.goToCart()
        cy.get('.cart_item').should('have.length', 0)
    })
    
  }) 

  it('Should add specific products and verify in cart', () => {
    
    const products =[
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ]

    products.forEach(name => inventoryPage.addProductToCart(name))
    inventoryPage.goToCart()
    products.forEach(name => inventoryPage.verifyCart(name))
    
  })  

  it('Should remove specific products and verify they are removed', () => {
     const products =[
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ]
    
    products.forEach(name => inventoryPage.addProductToCart(name))
    products.forEach(name => inventoryPage.removeProduct(name))
    inventoryPage.goToCart()
    cy.get('.cart_item').should('have.length', 0)

    })
   
})

  