import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import InventoryPage from "../pages/inventoryPage"
import CartPage from "../pages/cartPage"

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Swag Labs Test', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.login(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkLocation()

  })

  it('Should remove products directly from the cart', () => {
    
    inventoryPage.getProductsNames().then((productNames) => {
        inventoryPage.addAllProductsToCart()
        inventoryPage.goToCart()
        cartPage.removeAllProductsFromCart()
        cartPage.emptyCart()

    })
  })
   

  it('Should complete checkout after adding products', () => {
    
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
    cartPage.checkout()
    cartPage.checkoutInfo('Ana', 'Diaz', '987654')
    cartPage.submitButton()
    cartPage.finishButton()
    cartPage.checkOrder()

    })
    
}) 

