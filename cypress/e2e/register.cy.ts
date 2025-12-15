describe('E2E - Register', () => {
  it('should register a new user and persist it in localStorage', () => {
    // <= 16 chars total (ej: "nuevo123456" = 10-11 chars)
    const usuarioRaw = `nuevo${Math.floor(100000 + Math.random() * 900000)}`; // 5 + 6 = 11
    const usuarioNorm = usuarioRaw.trim().toLowerCase();
    const clave = 'Igna159.';

    cy.visit('/register', {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });

    cy.get('ion-input[formControlName="usuario"] input')
      .should('be.visible')
      .type(usuarioRaw);

    cy.get('ion-input[formControlName="clave"] input')
      .should('be.visible')
      .type(clave, { log: false });

    cy.get('ion-button[type="submit"]').click();

    // si aparece un alert, lo reportamos sin romper por "no encontrado"
    cy.get('body').then(($body) => {
      if ($body.find('ion-alert').length) {
        cy.get('ion-alert').should('contain.text', 'Error');
        throw new Error('Registro falló: se mostró un ion-alert (probablemente usuario ya existe)');
      }
    });

    cy.url({ timeout: 10000 }).should('include', '/login');

    // validar persistencia en localStorage (robusto)
    cy.window().then((win) => {
      const keys = Object.keys(win.localStorage);
      let found: any = null;

      for (const k of keys) {
        const raw = win.localStorage.getItem(k);
        if (!raw) continue;

        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const match = parsed.find((u: any) =>
              (u?.nombre === usuarioNorm || u?.usuario === usuarioNorm) && u?.clave === clave
            );
            if (match) { found = match; break; }
          }
        } catch {}
      }

      expect(found, 'Usuario guardado en localStorage').to.exist;
    });
    cy.screenshot('01-register-ok');

  });
});



