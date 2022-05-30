/// <reference types="cypress" />
import { Register } from "../models/Register";
const register = new Register();

describe("Register page functionality", () => {
    it("Checks editable fields and buttons functionality", () => {
         register.visit();
         cy.url().should("be.equal",`${Cypress.config("baseUrl")}`);
        register.dashboardContainer.should("be.visible");

         register.userName.should("be.visible").should("have.value","").type("ExampleUsername");
         register.eMail.should("be.visible").should("have.value","").type("examplemail0@gmail.com")
         register.password.should("be.visible").should("have.value","").type("blabla123");
         register.confirmPassword.should("be.visible").should("have.value","").type("blabla123");
         register.submitBtn.should("be.visible").should("be.enabled").click();
         register.messageNote.should("be.visible").should("have.text","User successfully registered.")

         register.userName.should("be.visible").should("have.value","").type("ExampleUsername");
         register.eMail.should("be.visible").should("have.value","").type("examplemail0@gmail.com")
         register.password.should("be.visible").should("have.value","").type("blabla123");
         register.confirmPassword.should("be.visible").should("have.value","").type("blabla123");
         register.submitBtn.should("be.visible").should("be.enabled").click();
         register.messageNote.should("be.visible").should("have.text","Username already exists."+"Email already exists.")

         register.userName.clear().type("username20");
         register.submitBtn.click();
         register.messageNote.should("be.visible").should("have.text","Email already exists.");

         register.eMail.clear().type("newemail0@gmail.com")
         register.submitBtn.click();
         register.messageNote.should("be.visible").should("have.text","User successfully registered.")


        }) 
    });