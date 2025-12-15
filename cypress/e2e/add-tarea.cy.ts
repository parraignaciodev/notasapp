describe('E2E - Agregar tarea', () => {
  it('should create a new note and persist it in localStorage', () => {
    const titulo = `Nota Cypress ${Date.now()}`;
    const descripcion = 'Creada desde Cypress';

    cy.visit('/agregar-tarea', {
      onBeforeLoad(win) {
        // tu login guarda en "usuarioActual" (ya lo validaste en el test de login)
        win.localStorage.setItem('usuarioActual', 'esteban');
      },
    });

    cy.get('ion-input[formControlName="titulo"] input')
      .should('be.visible')
      .type(titulo);

    cy.get('ion-textarea[formControlName="descripcion"] textarea')
      .should('be.visible')
      .type(descripcion);

    // elegir un color cualquiera (primer swatch)
    cy.get('button.color-swatch').first().click();

    // guardar (está disabled si el form es inválido)
    cy.get('ion-button.save-btn').should('not.be.disabled').click();

    cy.url({ timeout: 10000 }).should('include', '/home');

    // validar que se guardó alguna lista en localStorage con ese título
    cy.window().then((win) => {
      const keys = Object.keys(win.localStorage);
      let foundTask: any = null;

      for (const k of keys) {
        const raw = win.localStorage.getItem(k);
        if (!raw) continue;

        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const match = parsed.find((t: any) => t?.titulo === titulo && t?.descripcion === descripcion);
            if (match) { foundTask = match; break; }
          }
        } catch {}
      }

      expect(foundTask, 'Tarea guardada en localStorage').to.exist;
    });
    cy.screenshot('01-add-tarea-ok');

  });
});
