///  <reference types = "Cypress" /> 


describe("checking todo application",() => {
    it("should have basic structure",() => {
        cy.visit("https://example.cypress.io/todo");
        cy.get(".new-todo").should("exist");
        cy.get(".todo-count").should("exist");
        cy.get(".filters").should("exist");

    });

    it("should be able add todo list",() => {
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-list").children().should("have.length",2);
        cy.get(".new-todo").type("Learn React{Enter}");
        cy.get(".todo-list").children().should("have.length",3);

    });

    it("should be able to increase the item length in footer",() => {
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-count strong").should("have.text",2);
        cy.get(".new-todo").type("Learn React{Enter}");
        cy.get(".todo-count strong").should("have.text",3);

    })
});