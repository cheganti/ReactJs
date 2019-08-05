describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it('renders Movies List', () => {
    cy.get('.card').its('length').should('eq', 10)
  });

  it('Search Text + Click + Single Count', () => {
    const serchMovieName = "Tomb Raider";
    cy.get("#search").type(serchMovieName)
    cy.get("#searchBtn").click();
    cy.get('.card').its('length').should('eq', 1)
  });
})



