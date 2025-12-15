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
  AuthService,
  init_auth_service
} from "./chunk-QNTI7TWP.js";
import "./chunk-WNDC6VOT.js";
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
  init_testing,
  init_tslib_es6
} from "./chunk-GKFQG4U6.js";
import {
  __async
} from "./chunk-WLDIRXGG.js";

// src/app/register/register.page.spec.ts
init_testing();

// src/app/register/register.page.ts
init_tslib_es6();

// angular:jit:template:src\app\register\register.page.html
var register_page_default = `<ion-header>\r
  <ion-toolbar>\r
    <ion-title class="app-title">Crear Cuenta</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content fullscreen class="register-content">\r
  <div class="register-container">\r
    <h2 class="register-title">Reg\xEDstrate</h2>\r
\r
    <form [formGroup]="registerForm" (ngSubmit)="onRegister()">\r
\r
      <!-- USUARIO -->\r
      <ion-item>\r
        <ion-label position="floating">Usuario</ion-label>\r
        <ion-input formControlName="usuario"></ion-input>\r
      </ion-item>\r
\r
      <ion-text color="danger" *ngIf="registerForm.get('usuario')?.touched && registerForm.get('usuario')?.invalid">\r
        <ion-note *ngIf="registerForm.get('usuario')?.hasError('required')">\r
          El usuario es requerido.\r
        </ion-note>\r
        <ion-note *ngIf="registerForm.get('usuario')?.hasError('minlength')">\r
          Debe tener al menos 3 caracteres.\r
        </ion-note>\r
        <ion-note *ngIf="registerForm.get('usuario')?.hasError('maxlength')">\r
          No puede superar los 16 caracteres.\r
        </ion-note>\r
        <ion-note *ngIf="registerForm.get('usuario')?.hasError('pattern')">\r
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
      <ion-text color="danger" *ngIf="registerForm.get('clave')?.touched && registerForm.get('clave')?.invalid">\r
        <ion-note *ngIf="registerForm.get('clave')?.hasError('required')">\r
          La contrase\xF1a es requerida.\r
        </ion-note>\r
        <ion-note *ngIf="registerForm.get('clave')?.hasError('pattern')">\r
          Debe tener m\xEDnimo 8 caracteres, incluir una may\xFAscula, una min\xFAscula, un n\xFAmero y un s\xEDmbolo.\r
        </ion-note>\r
      </ion-text>\r
\r
      <ion-button expand="block" type="submit" class="btn-register">Crear Cuenta</ion-button>\r
    </form>\r
  </div>\r
</ion-content>\r
\r
\r
`;

// angular:jit:style:src\app\register\register.page.scss
var register_page_default2 = "/* src/app/register/register.page.scss */\n.register-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.register-container {\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n.register-container .register-title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: var(--ion-color-primary);\n}\n.register-container form ion-item {\n  margin-bottom: 12px;\n  border-radius: 8px;\n  --background: var(--ion-color-light);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.register-container form .btn-register {\n  margin-top: 16px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.register-container form ion-text {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=register.page.css.map */\n";

// src/app/register/register.page.ts
init_core();
init_common();
init_forms();
init_forms();
init_ionic_angular();
init_auth_service();
var RegisterPage = class RegisterPage2 {
  constructor(fb, navCtrl, alertCtrl, authService) {
    this.fb = fb;
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
    this.authService = authService;
    this.registerForm = this.fb.group({
      usuario: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
          Validators.pattern(/^[a-zA-Z0-9._-]{3,16}$/)
        ]
      ],
      clave: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
        ]
      ]
    });
  }
  onRegister() {
    return __async(this, null, function* () {
      if (this.registerForm.valid) {
        const { usuario, clave } = this.registerForm.value;
        const registrado = this.authService.registrarUsuario(usuario, clave);
        if (registrado) {
          this.navCtrl.navigateRoot("/login");
        } else {
          const alert = yield this.alertCtrl.create({
            header: "Error",
            message: "El usuario ya existe, elige otro nombre.",
            buttons: ["OK"]
          });
          yield alert.present();
        }
      } else {
        this.registerForm.markAllAsTouched();
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
RegisterPage = __decorate([
  Component({
    selector: "app-register",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
    template: register_page_default,
    styles: [register_page_default2]
  })
], RegisterPage);

// src/app/register/register.page.spec.ts
describe("RegisterPage", () => {
  let component;
  let fixture;
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=spec-register.page.spec.js.map
