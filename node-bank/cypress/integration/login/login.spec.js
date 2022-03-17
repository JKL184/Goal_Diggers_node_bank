/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })


    it('should successfully login to account', () => {
        cy.get('#email')
            .type('you@example.com')
            .should('have.value', 'you@example.com')

        cy.get('#password')
            .type('Password')
            .should('have.value', 'Password')

        cy.get('#login').click()

        cy.title().should('include', 'member')
    })
})