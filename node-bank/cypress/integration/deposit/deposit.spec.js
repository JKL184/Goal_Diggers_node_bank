/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('#email')
        .type('you@example.com')
        .should('have.value', 'you@example.com')
  
      cy.get('#password')
        .type('Password')
        .should('have.value', 'Password')
  
        
      cy.get('#login').click()
  
      cy.title().should('include', 'member')
      cy.get('#deposit').click()

      cy.title().should('include', 'Deposit')

      cy.get('#amount')
        .type('1234')
        .should('have.value', '1234')
      cy.get('#action').click()
      cy.title().should('include', 'member')
    })
  })
  