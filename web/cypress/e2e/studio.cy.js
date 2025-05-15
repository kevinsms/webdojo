describe('Studio', () => {
  it('Exemplo do cypress Studio', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').clear('p');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').clear('k');
    cy.get('#password').type('katana123');
    cy.get('.bg-\\[\\#8257E5\\]').click();
    cy.get('[data-cy="user-name"]').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})