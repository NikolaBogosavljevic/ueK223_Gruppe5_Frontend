/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {

  it('should click a button and stay on the login page', () => {

    cy.visit("http://localhost:8080")

  // Überprüfen Sie, ob die URL vor dem Klicken auf die Schaltfläche nicht auf "/login" endet.

 /*

  cy.wait(2000)

  // Klicken Sie auf die Schaltfläche

  cy.get('.MuiButtonBase-root').click();



  // Überprüfen Sie, ob sich die URL nach dem Klicken auf die Schaltfläche auf "/login" ändert.

 



  // Fügen Sie weitere Assertions hinzu, um das erwartete Verhalten auf der Seite "/login" zu überprüfen.

});

});



describe('Login Page', () => {

it('should fill in email and password fields', () => {

cy.visit("localhost:3000/login")

cy.wait(2000)

// Geben Sie "sairam@example.com" in das Email-Feld ein

cy.get('#email').type('sairam@example.com');



// Geben Sie "1234" in das Passwort-Feld ein

cy.get('#password').type('1234');



// Führen Sie ggf. weitere Assertions durch, um sicherzustellen,

// dass die Eingaben korrekt sind.

// Zum Beispiel, um sicherzustellen, dass die eingegebenen Werte

// tatsächlich in den Eingabefeldern stehen:

cy.get('#email').should('have.value', 'sairam@example.com');

cy.get('#password').should('have.value', '1234');

cy.wait(2000)

cy.get('.MuiButtonBase-root').click();

cy.wait(2000)

cy.get('.css-gflbrf > .MuiBox-root > :nth-child(2)').click();

cy.wait(2000)

cy.get('.MuiButton-containedSuccess').click();

cy.wait(2000)





*/


});





});