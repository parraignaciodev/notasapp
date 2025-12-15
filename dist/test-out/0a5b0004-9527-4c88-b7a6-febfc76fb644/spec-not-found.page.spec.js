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
import {
  RouterModule,
  init_router,
  provideRouter
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

// angular:jit:template:src\app\not-found\not-found.page.html
var not_found_page_default;
var init_not_found_page = __esm({
  "angular:jit:template:src\\app\\not-found\\not-found.page.html"() {
    not_found_page_default = '<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>P\xE1gina no encontrada</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class="ion-padding not-found-content">\r\n  <h1>404</h1>\r\n  <p>La p\xE1gina que buscas no existe.</p>\r\n\r\n  <ion-button expand="block" routerLink="/home">\r\n    Volver al inicio\r\n  </ion-button>\r\n  <ion-button expand="block" fill="clear" routerLink="/login">\r\n    Ir al login\r\n  </ion-button>\r\n</ion-content>';
  }
});

// angular:jit:style:src\app\not-found\not-found.page.scss
var not_found_page_default2;
var init_not_found_page2 = __esm({
  "angular:jit:style:src\\app\\not-found\\not-found.page.scss"() {
    not_found_page_default2 = "/* src/app/not-found/not-found.page.scss */\n.not-found-content {\n  text-align: center;\n}\n.not-found-content h1 {\n  font-size: 4rem;\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n.not-found-content p {\n  margin-bottom: 2rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=not-found.page.css.map */\n";
  }
});

// src/app/not-found/not-found.page.ts
var NotFoundPage;
var init_not_found_page3 = __esm({
  "src/app/not-found/not-found.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_not_found_page();
    init_not_found_page2();
    init_core();
    init_ionic_angular();
    init_common();
    init_router();
    NotFoundPage = class NotFoundPage2 {
    };
    NotFoundPage = __decorate([
      Component({
        selector: "app-not-found",
        standalone: true,
        template: not_found_page_default,
        imports: [IonicModule, CommonModule, RouterModule],
        styles: [not_found_page_default2]
      })
    ], NotFoundPage);
  }
});

// src/app/not-found/not-found.page.spec.ts
var require_not_found_page_spec = __commonJS({
  "src/app/not-found/not-found.page.spec.ts"(exports) {
    init_testing();
    init_not_found_page3();
    init_router();
    describe("NotFoundPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [NotFoundPage],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(NotFoundPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_not_found_page_spec();
//# sourceMappingURL=spec-not-found.page.spec.js.map
