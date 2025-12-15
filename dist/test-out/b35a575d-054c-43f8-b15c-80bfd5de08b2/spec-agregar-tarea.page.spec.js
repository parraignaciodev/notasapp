import {
  IonicModule,
  ToastController,
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
  Router,
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
  init_testing,
  init_tslib_es6
} from "./chunk-GKFQG4U6.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-WLDIRXGG.js";

// angular:jit:template:src\app\agregar-tarea\agregar-tarea.page.html
var agregar_tarea_page_default;
var init_agregar_tarea_page = __esm({
  "angular:jit:template:src\\app\\agregar-tarea\\agregar-tarea.page.html"() {
    agregar_tarea_page_default = `<ion-header class="ion-no-border">\r
  <ion-toolbar class="glass-header">\r
    <ion-buttons slot="start">\r
      <ion-back-button defaultHref="/home" color="primary" text=""></ion-back-button>\r
    </ion-buttons>\r
    <ion-title class="main-title">Nueva Nota</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding form-content">\r
  <form [formGroup]="tareaForm" class="custom-form animate-entry">\r
\r
    <!-- Campo: T\xEDtulo -->\r
    <div class="input-group">\r
      <ion-label class="input-label">T\xEDtulo</ion-label>\r
      <ion-item lines="none" class="custom-input">\r
        <ion-input formControlName="titulo" placeholder="Escribe un t\xEDtulo..."></ion-input>\r
      </ion-item>\r
      <div class="error-msg" *ngIf="tareaForm.get('titulo')?.touched && tareaForm.get('titulo')?.errors">\r
        <span *ngIf="tareaForm.get('titulo')?.errors?.['required']">El t\xEDtulo es obligatorio.</span>\r
        <span *ngIf="tareaForm.get('titulo')?.errors?.['minlength']">M\xEDnimo 3 caracteres.</span>\r
        <span *ngIf="tareaForm.get('titulo')?.errors?.['soloEspacios']">No puede ser solo espacios.</span>\r
      </div>\r
    </div>\r
\r
    <!-- Campo: Descripci\xF3n -->\r
    <div class="input-group">\r
      <ion-label class="input-label">Descripci\xF3n</ion-label>\r
      <ion-item lines="none" class="custom-input textarea-input">\r
        <ion-textarea formControlName="descripcion" rows="6" placeholder="Escribe los detalles..."></ion-textarea>\r
      </ion-item>\r
      <div class="error-msg" *ngIf="tareaForm.get('descripcion')?.touched && tareaForm.get('descripcion')?.errors">\r
        <span *ngIf="tareaForm.get('descripcion')?.errors?.['required']">La descripci\xF3n es obligatoria.</span>\r
        <span *ngIf="tareaForm.get('descripcion')?.errors?.['minlength']">M\xEDnimo 5 caracteres.</span>\r
        <span *ngIf="tareaForm.get('descripcion')?.errors?.['soloEspacios']">No puede ser solo espacios.</span>\r
      </div>\r
    </div>\r
\r
    <!-- \u{1F7E1} Selector de color -->\r
    <div class="color-section">\r
      <ion-label class="input-label">Color de etiqueta</ion-label>\r
      <div class="color-row">\r
        <button *ngFor="let c of palette" type="button" class="color-swatch"\r
          [class.selected]="tareaForm.value.color === c" (click)="setColor(c)">\r
          <span [class]="'dot ' + c"></span>\r
          <ion-icon name="checkmark" *ngIf="tareaForm.value.color === c"></ion-icon>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Bot\xF3n guardar -->\r
    <div class="actions">\r
      <ion-button expand="block" (click)="guardar()" [disabled]="tareaForm.invalid" class="save-btn">\r
        Guardar Nota\r
      </ion-button>\r
    </div>\r
\r
  </form>\r
</ion-content>`;
  }
});

// angular:jit:style:src\app\agregar-tarea\agregar-tarea.page.scss
var agregar_tarea_page_default2;
var init_agregar_tarea_page2 = __esm({
  "angular:jit:style:src\\app\\agregar-tarea\\agregar-tarea.page.scss"() {
    agregar_tarea_page_default2 = "/* src/app/agregar-tarea/agregar-tarea.page.scss */\n.form-content {\n  --background: var(--ion-background-color);\n}\n.main-title {\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.custom-form {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.input-group {\n  margin-bottom: 24px;\n}\n.input-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  margin-bottom: 8px;\n  margin-left: 4px;\n}\n.custom-input {\n  --background: #fff;\n  --border-radius: 12px;\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.custom-input ion-input,\n.custom-input ion-textarea {\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\nbody.dark .custom-input {\n  --background: #2a2a2a;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.textarea-input {\n  align-items: flex-start;\n}\n.error-msg {\n  font-size: 12px;\n  color: var(--ion-color-danger);\n  margin-top: 6px;\n  margin-left: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.color-section {\n  margin-bottom: 32px;\n}\n.color-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 4px;\n}\n.color-swatch {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.color-swatch.selected {\n  border-color: var(--ion-color-primary);\n  transform: scale(1.1);\n}\n.color-swatch ion-icon {\n  font-size: 24px;\n  color: #333;\n  opacity: 0.7;\n}\n.dot {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  right: 4px;\n  bottom: 4px;\n  border-radius: 50%;\n}\n.dot.sun {\n  background-color: #fff4cc;\n  background-color: var(--note-sun);\n}\n.dot.sky {\n  background-color: #e6f2ff;\n  background-color: var(--note-sky);\n}\n.dot.mint {\n  background-color: #e7fff2;\n  background-color: var(--note-mint);\n}\n.dot.lavender {\n  background-color: #efe9ff;\n  background-color: var(--note-lavender);\n}\n.dot.peach {\n  background-color: #ffe9df;\n  background-color: var(--note-peach);\n}\n.dot.gray {\n  background-color: #f2f3f5;\n  background-color: var(--note-gray);\n}\n.save-btn {\n  --box-shadow: 0 8px 20px rgba(98, 0, 238, 0.3);\n  margin-top: 16px;\n  height: 52px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=agregar-tarea.page.css.map */\n";
  }
});

// src/app/agregar-tarea/agregar-tarea.page.ts
var AgregarTareaPage;
var init_agregar_tarea_page3 = __esm({
  "src/app/agregar-tarea/agregar-tarea.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_agregar_tarea_page();
    init_agregar_tarea_page2();
    init_core();
    init_common();
    init_forms();
    init_ionic_angular();
    init_router();
    AgregarTareaPage = class AgregarTareaPage2 {
      constructor(fb, router, toastCtrl) {
        this.fb = fb;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.palette = ["sun", "sky", "mint", "lavender", "peach", "gray"];
        this.tareaForm = this.fb.group({
          titulo: ["", [Validators.required, Validators.minLength(3), this.noSoloEspacios]],
          descripcion: ["", [Validators.required, Validators.minLength(5), this.noSoloEspacios]],
          color: ["sun"]
          // valor por defecto
        });
      }
      // Validador original (se mantiene)
      noSoloEspacios(control) {
        const value = control.value || "";
        return value.trim().length === 0 ? { soloEspacios: true } : null;
      }
      // Cambiar color desde la UI
      setColor(c) {
        this.tareaForm.patchValue({ color: c });
      }
      // Guardar nota manteniendo tu flujo (toast + navegar a /home)
      guardar() {
        return __async(this, null, function* () {
          if (this.tareaForm.invalid) {
            this.tareaForm.markAllAsTouched();
            return;
          }
          const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
          const now = (/* @__PURE__ */ new Date()).toISOString();
          const nuevaTarea = {
            id: Date.now(),
            // se conserva tu forma de generar id
            titulo: this.tareaForm.value.titulo,
            descripcion: this.tareaForm.value.descripcion,
            color: this.tareaForm.value.color,
            // nuevo campo
            completada: false,
            createdAt: now,
            updatedAt: now
          };
          tareasGuardadas.push(nuevaTarea);
          localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
          const toast = yield this.toastCtrl.create({
            message: "Tarea guardada exitosamente",
            duration: 2e3,
            color: "success"
          });
          yield toast.present();
          this.router.navigate(["/home"]);
        });
      }
      static {
        this.ctorParameters = () => [
          { type: FormBuilder },
          { type: Router },
          { type: ToastController }
        ];
      }
    };
    AgregarTareaPage = __decorate([
      Component({
        selector: "app-agregar-tarea",
        standalone: true,
        template: agregar_tarea_page_default,
        imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
        styles: [agregar_tarea_page_default2]
      })
    ], AgregarTareaPage);
  }
});

// src/app/agregar-tarea/agregar-tarea.page.spec.ts
var require_agregar_tarea_page_spec = __commonJS({
  "src/app/agregar-tarea/agregar-tarea.page.spec.ts"(exports) {
    init_testing();
    init_agregar_tarea_page3();
    init_router();
    init_ionic_angular();
    init_forms();
    describe("AgregarTareaPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        const toastSpy = jasmine.createSpyObj("ToastController", ["create"]);
        toastSpy.create.and.returnValue(Promise.resolve({ present: () => Promise.resolve() }));
        const navCtrlSpy = jasmine.createSpyObj("NavController", ["navigateForward", "navigateBack"]);
        yield TestBed.configureTestingModule({
          imports: [AgregarTareaPage, ReactiveFormsModule],
          providers: [
            { provide: Router, useValue: routerSpy },
            { provide: ToastController, useValue: toastSpy },
            { provide: NavController, useValue: navCtrlSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AgregarTareaPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_agregar_tarea_page_spec();
//# sourceMappingURL=spec-agregar-tarea.page.spec.js.map
