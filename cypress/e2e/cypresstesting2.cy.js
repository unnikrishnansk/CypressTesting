describe("cypress testin 1",() => {
    it("visit the page",() => {
        cy.visit("https://docs.google.com/forms/d/1kHAePb6R4mRwcT6xxX5deEM75uC8fm7x5vQP0Vh9GIo/edit");
        cy.get(".Hvn9fb zHQkBf").type("n");
        cy.get(".Hvn9fb zHQkBf").type("a");
        cy.get(".Hvn9fb zHQkBf").type("m");
        cy.get(".Hvn9fb zHQkBf").type("e");
        cy.get(".Hvn9fb zHQkBf").should("have.text","name");

    });

    // it("one more test",() => {
    //     cy.visit("https://docs.google.com/forms/d/1kHAePb6R4mRwcT6xxX5deEM75uC8fm7x5vQP0Vh9GIo/edit");
    //     cy.get(".new-todo").type("Learn React{Enter}");
    //     cy.get(".todo-list").should("have.text","Learn React");

    // });
    });