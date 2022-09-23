import { User } from "../../../src/models";
import { isMobile } from "../../support/utils";

const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("LoginPage", function () {
  beforeEach(() =>
    cy.visit("http://localhost:3000")
})

it("the h1 contains the correct text"), () => {
  cy.getByData("hero-heading").contains(
    "Real World App"
  )
})

