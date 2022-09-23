describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/signup')
    cy.url().should("include", "/signup")
  })
})
