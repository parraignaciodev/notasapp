describe('E2E - Login', () => {
  it('should login and redirect to /home', () => {
    cy.visit('/login', {
      onBeforeLoad(win) {
        // ✅ usa EXACTAMENTE la misma key que en tu AuthService
        const usuariosKey = 'usuarios'; // <-- reemplaza por tu this.usuariosKey real

        win.localStorage.setItem(
          usuariosKey,
          JSON.stringify([{ nombre: 'esteban', clave: 'Igna159.' }])
        );
      },
    });

    cy.get('ion-input[formControlName="usuario"] input')
      .should('be.visible')
      .type('esteban');

    cy.get('ion-input[formControlName="clave"] input')
      .should('be.visible')
      .type('Igna159.', { log: false });

    cy.get('form').submit();

    // Si credenciales son válidas, NO debería aparecer alert
    cy.get('ion-alert', { timeout: 800 }).should('not.exist');

    cy.url({ timeout: 10000 }).should('include', '/home');
    cy.screenshot('01-login-ok');

  });
});

