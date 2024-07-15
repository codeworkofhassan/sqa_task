describe('Registration Form', () => {
  it('should successfully register and subscribe to the newsletter', () => {
    cy.visit('/registration');
    cy.get('input[name="fullName"]').type('Jane Doe');
    cy.get('input[name="email"]').type('jane.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="confirmPassword"]').type('Password123');
    cy.get('input[name="dob"]').type('1990-02-02');
    cy.get('select[name="gender"]').select('Female');
    cy.get('input[name="newsletter"]').check('Yes');
    cy.get('button[type="submit"]').click();
    cy.contains('Registration successful').should('be.visible');
  });
});
