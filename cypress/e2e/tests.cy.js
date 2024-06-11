describe('Oxylab task tests', () => {
  it('Check if element exist and open new tab', () => {
    cy.visit('https://career.oxylabs.io/?search=#jobs')
    
    cy.get('section[id=jobs]').within(() => {
      cy.get('input[type=search]').type('qa')
      cy.get('.search-icon').click()
      cy.contains('No positions found with keyword').should('not.exist')
      cy.contains('Details').should('exist')
      cy.contains('Details').invoke('removeAttr', 'target').click()
      cy.url().should('include', 'https://career.oxylabs.io/job/02dbdb5f/qa-specialist/')
    })
  })
})

