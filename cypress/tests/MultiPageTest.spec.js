describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('form').find('img').should('include','My-Logo')
  })
})