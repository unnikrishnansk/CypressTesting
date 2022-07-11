///  <reference types = "Cypress" /> 


describe("checking counter",() => {
    it("should exist in the document" , () => {
        cy.visit("http://localhost:3000");
        cy.get("h2").should("exist");
        cy.get(".incrementcount").should("exist");
        cy.get(".decrementcount").should("exist");
    });

    it("should increment the counter", () => {
        cy.visit("http://localhost:3000");
        cy.get("h2").should("have.text","Counter is 0");
        cy.get(".incrementcount").click();
        cy.get("h2").should("have.text","Counter is 1");
    });

    it("should increment the counter four times", () => {
        cy.visit("http://localhost:3000");
        cy.get("h2").should("have.text","Counter is 0");
        cy.get(".incrementcount").click();
        cy.get(".incrementcount").click();
        cy.get(".incrementcount").click();
        cy.get(".incrementcount").click();
        cy.get("h2").should("have.text","Counter is 4");
    });
});

