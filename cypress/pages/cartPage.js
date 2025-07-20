class CartPage {
    removeAllProductsFromCart(){
        cy.get('.cart_item').each(($el) => {
            cy.wrap($el).find('.cart_button').click()
        })
    }

    emptyCart(){
        cy.get('.cart_item').should('have.length', 0)
    }

    checkout(){
        cy.get('.checkout_button').click()
    }

    checkoutInfo(firstName, lastName, zipCode){
        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastName)
        cy.get('#postal-code').type(zipCode)
    }

    submitButton(){
        cy.get("[type='submit']").click()
    }

    finishButton(){
        cy.get('.cart_button').click()
    }

    checkOrder(){
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
    }
} export default CartPage