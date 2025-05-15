describe('Iframe', ()=>{
  it('Deve poder tocar o video de exemplo',()=>{
    cy.login()
    cy.goTo("Video", "Video");
    cy.get('iframe[title="Video Player"]')
      .should('exist')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .as('iframePlayer')

    cy.get('@iframePlayer')
      .find('.play-button')
      .click()

    cy.get('@iframePlayer')
      .find('.pause-button')
      .should('be.visible')
    //cy.get('.play-button').click()
  })
})