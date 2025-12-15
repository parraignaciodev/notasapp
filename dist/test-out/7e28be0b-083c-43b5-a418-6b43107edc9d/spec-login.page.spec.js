import {
  AuthService,
  init_auth_service
} from "./chunk-QNTI7TWP.js";
import {
  AlertController,
  IonicModule,
  init_ionic_angular
} from "./chunk-K45PWBV5.js";
import "./chunk-KCP34RZH.js";
import "./chunk-UY7HTZIX.js";
import "./chunk-6EZU24EH.js";
import "./chunk-JXR6YZSH.js";
import "./chunk-K5LSGGKI.js";
import "./chunk-FQKKKA5E.js";
import "./chunk-34X6K5NF.js";
import "./chunk-6HJKRNGZ.js";
import "./chunk-JWAZIQ4S.js";
import "./chunk-762M2KFK.js";
import "./chunk-BBA22BUH.js";
import "./chunk-WP3KTHGM.js";
import "./chunk-VO75CNJY.js";
import "./chunk-LA6CZ4AU.js";
import "./chunk-CCLA7PPN.js";
import "./chunk-5Z73BTII.js";
import "./chunk-O3V776ZK.js";
import {
  FormBuilder,
  FormsModule,
  NavController,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-3SJR5R43.js";
import "./chunk-6YBUCQSU.js";
import "./chunk-F6ACTOZO.js";
import "./chunk-356MVLQW.js";
import "./chunk-X5IRIAKM.js";
import "./chunk-VRZQFXGC.js";
import "./chunk-7FDHUQWW.js";
import "./chunk-HDGMTXV5.js";
import "./chunk-JFMPIF7U.js";
import "./chunk-YRWXUMMD.js";
import {
  ActivatedRoute,
  RouterModule,
  init_router
} from "./chunk-WNDC6VOT.js";
import "./chunk-FQVLKWB7.js";
import {
  CommonModule,
  init_common
} from "./chunk-U5XN6XWG.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-GKFQG4U6.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-WLDIRXGG.js";

// angular:jit:template:src\app\login\login.page.html
var login_page_default;
var init_login_page = __esm({
  "angular:jit:template:src\\app\\login\\login.page.html"() {
    login_page_default = `<ion-header [translucent]="true">\r
  <ion-toolbar>\r
    <ion-title class="app-title">apunta!</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content fullscreen class="login-content">\r
  <div class="login-container">\r
    <h1 class="login-title">\xA1Bienvenido!</h1>\r
    <p class="subtitle">Aqu\xED comienza todo</p>\r
\r
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
      \r
      <!-- USUARIO -->\r
      <ion-item>\r
        <ion-label position="floating">Usuario</ion-label>\r
        <ion-input formControlName="usuario"></ion-input>\r
      </ion-item>\r
\r
      <ion-text color="danger" *ngIf="loginForm.get('usuario')?.touched && loginForm.get('usuario')?.invalid">\r
        <ion-note *ngIf="loginForm.get('usuario')?.hasError('required')">\r
          El usuario es requerido.\r
        </ion-note>\r
        <ion-note *ngIf="loginForm.get('usuario')?.hasError('minlength')">\r
          Debe tener al menos 3 caracteres.\r
        </ion-note>\r
        <ion-note *ngIf="loginForm.get('usuario')?.hasError('maxlength')">\r
          No puede superar los 16 caracteres.\r
        </ion-note>\r
        <ion-note *ngIf="loginForm.get('usuario')?.hasError('pattern')">\r
          Solo se permiten letras, n\xFAmeros y los s\xEDmbolos . _ -\r
        </ion-note>\r
      </ion-text>\r
\r
      <!-- CONTRASE\xD1A -->\r
      <ion-item>\r
        <ion-label position="floating">Contrase\xF1a</ion-label>\r
        <ion-input type="password" formControlName="clave"></ion-input>\r
      </ion-item>\r
\r
      <ion-text color="danger" *ngIf="loginForm.get('clave')?.touched && loginForm.get('clave')?.invalid">\r
        <ion-note *ngIf="loginForm.get('clave')?.hasError('required')">\r
          La contrase\xF1a es requerida.\r
        </ion-note>\r
        <ion-note *ngIf="loginForm.get('clave')?.hasError('pattern')">\r
          Debe tener m\xEDnimo 8 caracteres, incluir una may\xFAscula, una min\xFAscula, un n\xFAmero y un s\xEDmbolo.\r
        </ion-note>\r
      </ion-text>\r
\r
      <ion-button expand="block" type="submit" class="btn-login">Ingresar</ion-button>\r
    </form>\r
\r
    <p class="create-account">\r
      <ion-button fill="clear" routerLink="/register">Crea tu cuenta gratis</ion-button>\r
    </p>\r
  </div>\r
</ion-content>\r
\r
\r
`;
  }
});

// angular:jit:style:src\app\login\login.page.scss
var login_page_default2;
var init_login_page2 = __esm({
  "angular:jit:style:src\\app\\login\\login.page.scss"() {
    login_page_default2 = "/* src/app/login/login.page.scss */\n.login-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.login-container {\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n.login-container h1.login-title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n}\n.login-container .subtitle {\n  font-size: 1rem;\n  margin-bottom: 24px;\n  color: var(--ion-color-medium);\n}\n.login-container form ion-item {\n  margin-bottom: 12px;\n  border-radius: 8px;\n  --background: var(--ion-color-light);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.login-container form .btn-login {\n  margin-top: 16px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.login-container .create-account {\n  margin-top: 24px;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n.login-container .create-account a {\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n/*# sourceMappingURL=login.page.css.map */\n";
  }
});

// src/app/login/login.page.ts
var LoginPage;
var init_login_page3 = __esm({
  "src/app/login/login.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_page();
    init_login_page2();
    init_core();
    init_common();
    init_forms();
    init_ionic_angular();
    init_router();
    init_auth_service();
    LoginPage = class LoginPage2 {
      constructor(fb, navCtrl, alertCtrl, authService) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loginForm = this.fb.group({
          usuario: [
            "",
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(16),
              // opcional: restringir a letras/números/._-
              Validators.pattern(/^[a-zA-Z0-9._-]{3,16}$/)
            ]
          ],
          clave: [
            "",
            [
              Validators.required,
              // min 8, al menos 1 minúscula, 1 mayúscula, 1 número y 1 símbolo
              Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
            ]
          ]
        });
      }
      ngOnInit() {
      }
      onSubmit() {
        return __async(this, null, function* () {
          if (this.loginForm.valid) {
            const usuario = this.loginForm.get("usuario")?.value;
            const clave = this.loginForm.get("clave")?.value;
            if (usuario && clave) {
              const esValido = this.authService.validarUsuario(usuario, clave);
              if (esValido) {
                this.authService.login(usuario);
                this.navCtrl.navigateForward("/home");
              } else {
                const alert = yield this.alertCtrl.create({
                  header: "Error",
                  message: "Usuario o contrase\xF1a incorrectos",
                  buttons: ["OK"]
                });
                yield alert.present();
              }
            } else {
              const alert = yield this.alertCtrl.create({
                header: "Formulario inv\xE1lido",
                message: "El usuario y la clave no pueden estar vac\xEDos.",
                buttons: ["OK"]
              });
              yield alert.present();
            }
          } else {
            const alert = yield this.alertCtrl.create({
              header: "Formulario inv\xE1lido",
              message: "Verifica que el usuario y la contrase\xF1a cumplan los requisitos.",
              buttons: ["OK"]
            });
            yield alert.present();
          }
        });
      }
      static {
        this.ctorParameters = () => [
          { type: FormBuilder },
          { type: NavController },
          { type: AlertController },
          { type: AuthService }
        ];
      }
    };
    LoginPage = __decorate([
      Component({
        selector: "app-login",
        template: login_page_default,
        standalone: true,
        imports: [
          CommonModule,
          IonicModule,
          FormsModule,
          ReactiveFormsModule,
          RouterModule
        ],
        styles: [login_page_default2]
      })
    ], LoginPage);
  }
});

// src/app/login/login.page.spec.ts
var require_login_page_spec = __commonJS({
  "src/app/login/login.page.spec.ts"(exports) {
    init_testing();
    init_login_page3();
    init_router();
    init_esm();
    describe("LoginPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginPage],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                params: of({}),
                snapshot: { paramMap: { get: () => null } }
              }
            }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_page_spec();
//# sourceMappingURL=spec-login.page.spec.js.map
