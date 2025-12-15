import {
  ApiTareasService,
  init_api_tareas
} from "./chunk-FU3UQ2V5.js";
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
import "./chunk-3SJR5R43.js";
import "./chunk-6YBUCQSU.js";
import "./chunk-F6ACTOZO.js";
import "./chunk-356MVLQW.js";
import "./chunk-X5IRIAKM.js";
import "./chunk-VRZQFXGC.js";
import "./chunk-7FDHUQWW.js";
import "./chunk-HDGMTXV5.js";
import "./chunk-JFMPIF7U.js";
import "./chunk-YRWXUMMD.js";
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
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-GKFQG4U6.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-WLDIRXGG.js";

// angular:jit:template:src\app\api-tareas\api-tareas.page.html
var api_tareas_page_default;
var init_api_tareas_page = __esm({
  "angular:jit:template:src\\app\\api-tareas\\api-tareas.page.html"() {
    api_tareas_page_default = '<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>API: Tareas remotas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot="fixed" (ionRefresh)="cargar($event)">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-list>\r\n    <ion-item lines="full">\r\n      <ion-label>\r\n        <h2>Demo JSONPlaceholder</h2>\r\n        <p>GET / POST / PUT / DELETE + cache Storage</p>\r\n      </ion-label>\r\n      <ion-button slot="end" size="small" (click)="crearDemo()">\r\n        Crear demo\r\n      </ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item *ngIf="cargando">\r\n      <ion-label>Cargando...</ion-label>\r\n      <ion-spinner slot="end"></ion-spinner>\r\n    </ion-item>\r\n\r\n    <ion-item *ngFor="let t of tareas">\r\n      <ion-checkbox\r\n        slot="start"\r\n        [checked]="t.completed"\r\n        (ionChange)="toggleCompleta(t)"\r\n      ></ion-checkbox>\r\n\r\n      <ion-label>\r\n        <h2>{{ t.title }}</h2>\r\n        <p>ID: {{ t.id }} \xB7 user: {{ t.userId }}</p>\r\n      </ion-label>\r\n\r\n      <ion-button\r\n        fill="clear"\r\n        color="danger"\r\n        slot="end"\r\n        (click)="eliminar(t)"\r\n      >\r\n        <ion-icon name="trash"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n';
  }
});

// angular:jit:style:src\app\api-tareas\api-tareas.page.scss
var api_tareas_page_default2;
var init_api_tareas_page2 = __esm({
  "angular:jit:style:src\\app\\api-tareas\\api-tareas.page.scss"() {
    api_tareas_page_default2 = "/* src/app/api-tareas/api-tareas.page.scss */\n/*# sourceMappingURL=api-tareas.page.css.map */\n";
  }
});

// src/app/api-tareas/api-tareas.page.ts
var ApiTareasPage;
var init_api_tareas_page3 = __esm({
  "src/app/api-tareas/api-tareas.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_api_tareas_page();
    init_api_tareas_page2();
    init_core();
    init_common();
    init_ionic_angular();
    init_api_tareas();
    ApiTareasPage = class ApiTareasPage2 {
      constructor(api, toastCtrl) {
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.tareas = [];
        this.cargando = false;
      }
      ngOnInit() {
        this.cargar();
      }
      cargar(event) {
        return __async(this, null, function* () {
          this.cargando = true;
          this.api.getTareas().subscribe({
            next: (data) => {
              this.tareas = data.slice(0, 10);
              this.cargando = false;
              event?.target?.complete();
            },
            error: (err) => __async(this, null, function* () {
              this.cargando = false;
              event?.target?.complete();
              const t = yield this.toastCtrl.create({
                message: String(err),
                duration: 2500,
                color: "danger"
              });
              t.present();
            })
          });
        });
      }
      crearDemo() {
        return __async(this, null, function* () {
          const nueva = {
            title: "Nueva tarea demo",
            completed: false,
            userId: 1
          };
          this.api.createTarea(nueva).subscribe({
            next: (res) => __async(this, null, function* () {
              this.tareas.unshift(res);
              const t = yield this.toastCtrl.create({
                message: "Tarea demo creada (finge en la API)",
                duration: 2e3,
                color: "success"
              });
              t.present();
            }),
            error: (err) => __async(this, null, function* () {
              const t = yield this.toastCtrl.create({
                message: String(err),
                duration: 2500,
                color: "danger"
              });
              t.present();
            })
          });
        });
      }
      toggleCompleta(t) {
        const actualizado = __spreadProps(__spreadValues({}, t), { completed: !t.completed });
        if (!t.id)
          return;
        this.api.updateTarea(t.id, actualizado).subscribe({
          next: (res) => __async(this, null, function* () {
            Object.assign(t, res);
            const toast = yield this.toastCtrl.create({
              message: "Estado actualizado (PUT demo)",
              duration: 2e3,
              color: "medium"
            });
            toast.present();
          }),
          error: (err) => __async(this, null, function* () {
            const ttoast = yield this.toastCtrl.create({
              message: String(err),
              duration: 2500,
              color: "danger"
            });
            ttoast.present();
          })
        });
      }
      eliminar(t) {
        if (!t.id)
          return;
        this.api.deleteTarea(t.id).subscribe({
          next: () => __async(this, null, function* () {
            this.tareas = this.tareas.filter((x) => x.id !== t.id);
            const toast = yield this.toastCtrl.create({
              message: "Eliminado (DELETE demo)",
              duration: 2e3,
              color: "warning"
            });
            toast.present();
          }),
          error: (err) => __async(this, null, function* () {
            const ttoast = yield this.toastCtrl.create({
              message: String(err),
              duration: 2500,
              color: "danger"
            });
            ttoast.present();
          })
        });
      }
      static {
        this.ctorParameters = () => [
          { type: ApiTareasService },
          { type: ToastController }
        ];
      }
    };
    ApiTareasPage = __decorate([
      Component({
        selector: "app-api-tareas",
        standalone: true,
        imports: [CommonModule, IonicModule],
        template: api_tareas_page_default,
        styles: [api_tareas_page_default2]
      })
    ], ApiTareasPage);
  }
});

// src/app/api-tareas/api-tareas.page.spec.ts
var require_api_tareas_page_spec = __commonJS({
  "src/app/api-tareas/api-tareas.page.spec.ts"(exports) {
    init_testing();
    init_api_tareas_page3();
    init_api_tareas();
    init_ionic_angular();
    init_esm();
    describe("ApiTareasPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        const apiSpy = jasmine.createSpyObj("ApiTareasService", ["getTareas", "createTarea", "updateTarea", "deleteTarea"]);
        apiSpy.getTareas.and.returnValue(of([]));
        const toastSpy = jasmine.createSpyObj("ToastController", ["create"]);
        toastSpy.create.and.returnValue(Promise.resolve({ present: () => Promise.resolve() }));
        yield TestBed.configureTestingModule({
          imports: [ApiTareasPage],
          providers: [
            { provide: ApiTareasService, useValue: apiSpy },
            { provide: ToastController, useValue: toastSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(ApiTareasPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_api_tareas_page_spec();
//# sourceMappingURL=spec-api-tareas.page.spec.js.map
