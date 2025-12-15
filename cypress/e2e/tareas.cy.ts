describe('E2E - Tareas', () => {
  it('should login, create a note, and verify it was stored', () => {
    const titulo = `Nota ${Date.now()}`;
    const descripcion = 'Creada desde Cypress';

    cy.visit('/login', {
      onBeforeLoad(win) {
        // Seed de usuario válido para tu AuthService
        win.localStorage.setItem(
          'usuarios',
          JSON.stringify([{ nombre: 'esteban', clave: 'Igna159.' }])
        );
        win.localStorage.removeItem('usuarioActual');
      },
    });

    // Login (recuerda: tu AuthService normaliza a lowercase)
    cy.get('ion-input[formControlName="usuario"] input').type('esteban');
    cy.get('ion-input[formControlName="clave"] input').type('Igna159.', { log: false });
    cy.get('ion-button[type="submit"]').click();
    cy.url({ timeout: 10000 }).should('include', '/home');

    // Ir a agregar tarea
    cy.visit('/agregar-tarea');

    // Completar formulario
    cy.get('ion-input[formControlName="titulo"] input')
      .should('be.visible')
      .type(titulo);

    cy.get('ion-textarea[formControlName="descripcion"] textarea')
      .should('be.visible')
      .type(descripcion);

    // (Opcional) elegir color: clic al primer swatch
    cy.get('button.color-swatch').first().click({ force: true });

    // Guardar Nota (no es submit, es click)
    cy.contains('ion-button', 'Guardar Nota')
      .should('not.be.disabled')
      .click();

    // Validación robusta: que la nota exista en algún array del localStorage por titulo
    cy.window().then((win) => {
      const keys = Object.keys(win.localStorage);

      const existe = keys.some((k) => {
        try {
          const v = JSON.parse(win.localStorage.getItem(k) || 'null');
          return Array.isArray(v) && v.some((x: any) => x?.titulo === titulo);
        } catch {
          return false;
        }
      });

      expect(existe).to.eq(true);
    });

    cy.screenshot('01-tareas-ok');

  });
});
