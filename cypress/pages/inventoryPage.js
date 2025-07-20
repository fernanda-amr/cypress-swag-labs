class InventoryPage {
    getProductsNames(){
        const products = []
        cy.get('.inventory_item_name').each(($el) => {
            products.push($el.text())
        }) 
        return cy.wrap(products)
    }

    addProductToCart(productName){
        cy.contains('.inventory_item',productName)
            .find('.btn_primary').click()
    }


    addAllProductsToCart() {
        cy.get('.inventory_item').each(($el) => {
            cy.wrap($el).find('.btn_primary').click()
    })}

  
    goToCart(){
        cy.get("[data-icon='shopping-cart']").click()
        cy.location('pathname').should('equal', '/v1/cart.html')
    }

    verifyCart(productName){
        cy.contains('.cart_item_label', productName)
    }

    removeProduct(productName){
        cy.contains('.inventory_item',productName)
            .find('.btn_secondary').click()
    }

    removeAllProducts(){
        cy.get('.inventory_item').each(($el) =>{
            cy.wrap($el).find('.btn_secondary').click()
        })
    }

} export default InventoryPage