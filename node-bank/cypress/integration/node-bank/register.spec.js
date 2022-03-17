/// <reference types= "cypress"/>


context('Register',() =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/register')
    })

        it('should register successfully',() =>{
            cy.get('#name')
                .type('Jane Doe')
                .should('have.value', 'Jane Doe')

            cy.get('#email')
                .type('janedoe@example.com')
                .should('have.value', 'janedoe@example.com')

            cy.get('#password')
                .type('Password123')
                .should('have.value', 'Password123')

            cy.get('#card')
                .type('988112367435')
                .should('have.value', '988112367435')

            cy.get('#register').click()

            cy.title().should('include', 'login')
            
        })
})