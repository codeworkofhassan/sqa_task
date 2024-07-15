describe('Registration Form', () => {
  it('should successfully register with valid inputs', () => {
    cy.visit('/registration');
    cy.get('input[name="fullName"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[name="dob"]').type('1990-01-01');
    cy.get('select[name="gender"]').select('Male');
    cy.get('input[name="newsletter"]').check('Yes');
    cy.get('button[type="submit"]').click();
    cy.contains('Registration successful').should('be.visible');
  });
});
