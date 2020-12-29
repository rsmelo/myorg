describe('former-kit: FormerKit component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formerkit--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to former-kit!');
    });
});
