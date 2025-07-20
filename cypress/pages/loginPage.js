class LoginPage {
    
    accessLoginPage(){
        cy.visit('https://www.saucedemo.com/v1/')
    }

    login(username, password){
        cy.get("[name='user-name']").type(username)
        cy.get("[name='password']").type(password)
        cy.get("[type='submit']").click()
    }

    checkLocation(){
        cy.location('pathname').should('equal', '/v1/inventory.html')
        cy.get('.product_label').contains('Products')
    }

    errorLogin(){
        cy.get('.error-button')
        cy.get('.form_column .login-box').contains('Username and password do not match any user in this service')
    }

} export default LoginPage