/// <reference types="cypress" />

let googleFixtures = {};

context('Google E2E', () => {
    before(async () => {
        googleFixtures = await cy.fixture('google.json');
    });

    beforeEach(() => {
      cy.visit(googleFixtures.pageData.domain)
    })
  
    it('Search metamask', () => {
        cy.get(googleFixtures.locators.searchField)
        .type(googleFixtures.searches.metamask);
    })

    it('Search recipe of eggs', () => {
        cy.get(googleFixtures.locators.searchField)
        .type(googleFixtures.searches.receipeOfEggs);
    })
  })
  