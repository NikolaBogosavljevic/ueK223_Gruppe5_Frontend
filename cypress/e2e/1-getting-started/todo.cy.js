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

    cy.visit("localhost:3000/")



    cy.get('#email').type('admin@example.com');





cy.get('#password').type('1234');

cy.get('.MuiButtonBase-root').click();

});

describe('example to-do app', () => {

  it('should click a button and stay on the login page', () => {

    cy.visit("localhost:3000/add");

    cy.get('#image').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnZ8h4RwqL2AxX-c9x7TO8EkzzEZAEb_6cA&usqp=CAU');
    cy.get('#description').type("nuova");

    cy.get('[type="submit"]').click();
    cy.visit("localhost:3000/");



});

 

});
});