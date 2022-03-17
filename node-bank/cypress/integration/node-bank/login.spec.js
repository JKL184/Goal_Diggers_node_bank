/// <reference types= "cypress"/>


context('Login',() =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
    })

        it('should login successfully',() =>{
            cy.get('#email')
                .type('janedoe@example.com')
                .should('have.value', 'janedoe@example.com')

            cy.get('#password')
                .type('Password123')
                .should('have.value', 'Password123')

            cy.get('#login').click()

            cy.title().should('include', 'member')
            
        })
})