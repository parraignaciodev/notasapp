import {
  SqliteService,
  init_sqlite_service
} from "./chunk-YXKEBSLL.js";
import "./chunk-EIMUG3PL.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-QNTI7TWP.js";
import {
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
  FormsModule,
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
  DatePipe,
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

// angular:jit:template:src\app\home\home.page.html
var home_page_default;
var init_home_page = __esm({
  "angular:jit:template:src\\app\\home\\home.page.html"() {
    home_page_default = `<ion-header class="ion-no-border">
  <ion-toolbar class="glass-header">
    <ion-title size="large" class="main-title">Mis Notas</ion-title>
    <ion-buttons slot="end">
      <ion-button fill="clear" (click)="irApiTareas()">API</ion-button>
      <ion-button (click)="cerrarSesion()" color="primary" style="font-weight: 600;">
        Salir
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding home-content">

  <div class="welcome-section animate-entry">
    <h1 class="greeting">Hola, <span class="username">{{ nombreUsuario }}</span> \u{1F44B}</h1>
    <p class="subtitle">\xBFQu\xE9 tienes en mente hoy?</p>
  </div>

  <!-- Buscador -->
  <div class="search-container animate-entry" style="animation-delay: 0.1s;">
    <ion-searchbar placeholder="Buscar en tus notas..." [(ngModel)]="query" class="custom-search" debounce="150"
      showCancelButton="focus">
    </ion-searchbar>
  </div>

  <!-- Lista de notas -->
  <div *ngIf="tareasFiltradas.length > 0; else sinTareas" class="notes-grid animate-entry"
    style="animation-delay: 0.2s;">
    <div *ngFor="let tarea of tareasFiltradas" class="note-card custom-card"
      [style.--note-color]="getNoteBg(tarea.color)" (click)="verDetalle(tarea)">
    
          <!-- mini preview de la foto -->
      <div class="note-photo" *ngIf="tarea.fotoData">
        <img [src]="tarea.fotoData" alt="Foto tarea" />
      </div>

      <div class="note-content">
        <div class="note-header">
          <h2 class="note-title">{{ tarea.titulo }}</h2>
          <ion-icon *ngIf="tarea.completada" name="checkmark-circle" color="success"></ion-icon>
        </div>

        <p class="note-desc">{{ tarea.descripcion }}</p>

        <div class="note-footer">
          <span class="note-date">{{ formatFechaHora(tarea.updatedAt || tarea.createdAt) }}</span>
          <span class="status-badge" [class.done]="tarea.completada">
            {{ tarea.completada ? 'Listo' : 'Pendiente' }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <ng-template #sinTareas>
    <div class="empty-state animate-entry" style="animation-delay: 0.2s;">
      <img src="assets/icon/favicon.png" alt="No notes" class="empty-img"
        style="opacity: 0.5; width: 80px; filter: grayscale(1);">
      <h3>No hay nada por aqu\xED</h3>
      <p>Toca el bot\xF3n + para crear una nota</p>
    </div>
  </ng-template>

  <!-- FAB -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="custom-fab">
    <ion-fab-button (click)="irAgregar()" color="primary">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>`;
  }
});

// angular:jit:style:src\app\home\home.page.scss
var home_page_default2;
var init_home_page2 = __esm({
  "angular:jit:style:src\\app\\home\\home.page.scss"() {
    home_page_default2 = "/* src/app/home/home.page.scss */\n.home-content {\n  --background: var(--ion-background-color);\n}\n.main-title {\n  font-weight: 700;\n  color: var(--ion-text-color);\n  letter-spacing: -0.5px;\n}\n.welcome-section {\n  margin-bottom: 24px;\n  padding: 0 8px;\n}\n.greeting {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--ion-text-color);\n}\n.greeting .username {\n  color: var(--ion-color-primary);\n}\n.subtitle {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin-top: 4px;\n}\n.search-container {\n  margin-bottom: 24px;\n}\n.custom-search {\n  --background: #fff;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-primary);\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n}\nbody.dark .custom-search {\n  --background: #2a2a2a;\n}\n.notes-grid {\n  column-count: 2;\n  column-gap: 16px;\n  padding-bottom: 80px;\n}\n.note-card {\n  break-inside: avoid;\n  margin-bottom: 16px;\n  background-color: var(--note-color, #fff);\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  position: relative;\n}\n.note-card:not([style*=--note-color]) {\n  background-color: var(--ion-card-background);\n}\n.note-photo {\n  width: 100%;\n  max-height: 140px;\n  overflow: hidden;\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.note-photo img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  display: block;\n}\n.note-content {\n  padding: 16px;\n}\n.note-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.note-title {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n  line-height: 1.3;\n}\nbody.dark .note-card:not([style*=--note-color]) .note-title {\n  color: var(--ion-text-color);\n}\n.note-desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.7);\n  margin: 0 0 12px 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-clamp: 4;\n}\nbody.dark .note-card:not([style*=--note-color]) .note-desc {\n  color: var(--ion-color-medium);\n}\n.note-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.note-date {\n  color: rgba(0, 0, 0, 0.5);\n}\nbody.dark .note-card:not([style*=--note-color]) .note-date {\n  color: var(--ion-color-medium);\n}\n.status-badge {\n  padding: 4px 8px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.05);\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 500;\n}\n.status-badge.done {\n  background: var(--ion-color-success);\n  color: #fff;\n}\n.empty-state {\n  text-align: center;\n  margin-top: 60px;\n  color: var(--ion-color-medium);\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.empty-state p {\n  font-size: 16px;\n}\n@media (min-width: 768px) {\n  .notes-grid {\n    column-count: 3;\n  }\n}\n@media (min-width: 1024px) {\n  .notes-grid {\n    column-count: 4;\n  }\n}\n/*# sourceMappingURL=home.page.css.map */\n";
  }
});

// src/app/home/home.page.ts
var NOTE_BG, HomePage;
var init_home_page3 = __esm({
  "src/app/home/home.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_page();
    init_home_page2();
    init_core();
    init_common();
    init_router();
    init_ionic_angular();
    init_forms();
    init_auth_service();
    init_sqlite_service();
    NOTE_BG = {
      sun: "var(--note-sun)",
      sky: "var(--note-sky)",
      mint: "var(--note-mint)",
      lavender: "var(--note-lavender)",
      peach: "var(--note-peach)",
      gray: "var(--note-gray)"
    };
    HomePage = class HomePage2 {
      constructor(router, authService, datePipe, sqlite) {
        this.router = router;
        this.authService = authService;
        this.datePipe = datePipe;
        this.sqlite = sqlite;
        this.tareas = [];
        this.nombreUsuario = "";
        this.query = "";
        this.palette = ["sun", "sky", "mint", "lavender", "peach", "gray"];
      }
      ngOnInit() {
        this.cargarTareas();
        this.authService.usuario$.subscribe((usuario) => {
          this.nombreUsuario = usuario ?? "";
        });
      }
      ionViewWillEnter() {
        return __async(this, null, function* () {
          this.cargarTareas();
          if (this.sqlite.isNative) {
            try {
              const notes = yield this.sqlite.list();
              console.log("[SQLite] Notas en tabla notes:", notes);
            } catch (err) {
              console.error("[SQLite] Error al listar notas", err);
            }
          } else {
            console.log("[SQLite] Ejecutando en web, usando solo localStorage por ahora");
          }
        });
      }
      getNoteBg(color) {
        return NOTE_BG[color || "gray"];
      }
      cargarTareas() {
        const stored = localStorage.getItem("tareas");
        const raw = stored ? JSON.parse(stored) : [];
        const migrated = raw.map((t) => {
          const created = t.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
          const updated = t.updatedAt ?? created;
          const color = t.color ?? "gray";
          return __spreadProps(__spreadValues({}, t), { createdAt: created, updatedAt: updated, color });
        });
        if (JSON.stringify(raw) !== JSON.stringify(migrated)) {
          localStorage.setItem("tareas", JSON.stringify(migrated));
        }
        this.tareas = migrated;
      }
      get tareasFiltradas() {
        const q = this.query.trim().toLowerCase();
        if (!q)
          return this.tareas;
        return this.tareas.filter((t) => (t.titulo || "").toLowerCase().includes(q) || (t.descripcion || "").toLowerCase().includes(q));
      }
      formatFechaHora(iso) {
        const d = iso ? new Date(iso) : /* @__PURE__ */ new Date();
        return this.datePipe.transform(d, "MMM d, HH:mm", "es-CL") ?? "";
      }
      verDetalle(tarea) {
        this.router.navigate(["/detalle-tarea", tarea.id]);
      }
      irAgregar() {
        this.router.navigate(["/agregar-tarea"]);
      }
      cerrarSesion() {
        this.authService.logout();
        this.router.navigate(["/login"]);
      }
      // (opcional) si en algún momento quieres usar clases además del inline style
      colorClass(t) {
        const c = t.color ?? "gray";
        return `note--${c}`;
      }
      irApiTareas() {
        this.router.navigate(["/api-tareas"]);
      }
      static {
        this.ctorParameters = () => [
          { type: Router },
          { type: AuthService },
          { type: DatePipe },
          { type: SqliteService }
        ];
      }
    };
    HomePage = __decorate([
      Component({
        selector: "app-home",
        template: home_page_default,
        standalone: true,
        imports: [CommonModule, IonicModule, FormsModule],
        providers: [DatePipe],
        styles: [home_page_default2]
      })
    ], HomePage);
  }
});

// src/app/home/home.page.spec.ts
var require_home_page_spec = __commonJS({
  "src/app/home/home.page.spec.ts"(exports) {
    init_testing();
    init_home_page3();
    init_router();
    init_auth_service();
    init_common();
    init_sqlite_service();
    init_esm();
    describe("HomePage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        const authSpy = jasmine.createSpyObj("AuthService", [], {
          usuario$: of("testuser")
        });
        const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        const sqliteSpy = jasmine.createSpyObj("SqliteService", [], {
          isNative: false
        });
        yield TestBed.configureTestingModule({
          imports: [HomePage],
          providers: [
            { provide: Router, useValue: routerSpy },
            { provide: AuthService, useValue: authSpy },
            DatePipe,
            { provide: SqliteService, useValue: sqliteSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_page_spec();
//# sourceMappingURL=spec-home.page.spec.js.map
