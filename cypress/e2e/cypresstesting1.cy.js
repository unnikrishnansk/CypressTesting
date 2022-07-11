///  <reference types = "Cypress" /> 


describe("cypress testin 1",() => {
    it("should be auto focused",() => {
        cy.visit("https://example.cypress.io/todo");
        cy.get(".new-todo").type("t");
        cy.get(".new-todo").type("o");
        cy.get(".new-todo").should("have.text","to");

    });

    it("one more test",() => {
        cy.visit("https://example.cypress.io/todo");
        cy.get(".new-todo").type("Learn React{Enter}");
        cy.get(".todo-list").should("have.text","Learn React");

    });
    });

