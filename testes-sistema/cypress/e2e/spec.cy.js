describe('template spec', () => {

    beforeEach(() => {
        cy.viewport("macbook-16")
        cy.visit("");
    });

  it('passes', () => {
      cy.get('.button-login > p-button:nth-child(1) > button:nth-child(1)')
      .click();

  })
})
