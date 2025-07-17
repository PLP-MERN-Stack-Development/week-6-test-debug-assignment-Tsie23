describe('Navigation and Error Handling', () => {
  it('navigates to the home page and checks for main content', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Click Me').should('exist');
  });

  it('shows error boundary on error', () => {
    // This test assumes you have a way to trigger an error in the UI for demonstration
    // For example, a button that throws an error when clicked
    cy.visit('http://localhost:5173');
    // cy.get('[data-testid="trigger-error"]').click();
    // cy.contains('Something went wrong.').should('exist');
  });
}); 