import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()

describe('Swag Labs Test', () => {

  it('Login - Success', () => {

    loginPage.accessLoginPage()
    loginPage.login(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkLocation()
  })

    it('Login - Fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.login(userData.userFail.username, userData.userFail.password)
    loginPage.errorLogin()
  })
})