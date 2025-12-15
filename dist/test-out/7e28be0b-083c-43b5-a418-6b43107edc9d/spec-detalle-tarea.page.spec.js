import {
  CapacitorException,
  WebPlugin,
  init_dist,
  registerPlugin
} from "./chunk-EIMUG3PL.js";
import {
  AlertController,
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
  NavController
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

// angular:jit:template:src\app\detalle-tarea\detalle-tarea.page.html
var detalle_tarea_page_default;
var init_detalle_tarea_page = __esm({
  "angular:jit:template:src\\app\\detalle-tarea\\detalle-tarea.page.html"() {
    detalle_tarea_page_default = `<ion-header class="ion-no-border">\r
  <ion-toolbar class="glass-header">\r
    <ion-buttons slot="start">\r
      <ion-back-button defaultHref="/home" color="primary" text=""></ion-back-button>\r
    </ion-buttons>\r
    <ion-buttons slot="end">\r
      <ion-button (click)="editar()" color="primary" style="font-weight: 600;">\r
        Editar\r
      </ion-button>\r
      <ion-button (click)="eliminar()" color="danger" style="font-weight: 600;">\r
        Eliminar\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content class="ion-padding detail-content">\r
  <!-- Verificamos si existe la tarea -->\r
  <div *ngIf="tarea; else noEncontrada" class="detail-container animate-entry">\r
\r
    <!-- Tarjeta principal con el color din\xE1mico -->\r
    <div class="note-detail-card" [style.--note-bg]="'var(--note-' + (tarea?.color || 'gray') + ')'">\r
      \r
      <!-- Encabezado de la nota -->\r
      <div class="detail-header">\r
        <h1 class="detail-title">{{ tarea.titulo }}</h1>\r
        <div class="detail-meta">\r
          <span class="date">\r
            <ion-icon name="calendar-outline"></ion-icon>\r
            {{ (tarea.updatedAt || tarea.createdAt) | date:'d MMM yyyy, HH:mm' }}\r
          </span>\r
          <span class="status-badge" [class.done]="tarea.completada">\r
            {{ tarea.completada ? 'Completada' : 'Pendiente' }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Descripci\xF3n -->\r
      <div class="detail-body">\r
        <p class="description">{{ tarea.descripcion }}</p>\r
      </div>\r
\r
      <!-- SECCI\xD3N FOTO (Modificada) -->\r
      <div class="foto-section">\r
        <div class="section-title">\r
          <ion-icon name="camera-outline"></ion-icon> Foto\r
        </div>\r
\r
        <!-- CASO 1: Si hay foto guardada (fotoData) -->\r
        <div *ngIf="tarea.fotoData; else sinFoto" class="foto-wrapper animate-entry">\r
          <div class="img-container">\r
            <img [src]="tarea.fotoData" alt="Foto de la tarea" class="foto-tarea" />\r
          </div>\r
\r
          <div class="foto-actions">\r
            <!-- Bot\xF3n Eliminar -->\r
            <ion-button \r
              color="danger" \r
              fill="outline" \r
              size="small" \r
              (click)="borrarFoto()">\r
              <ion-icon name="trash-outline" slot="start"></ion-icon>\r
              Eliminar foto\r
            </ion-button>\r
            \r
            <!-- Bot\xF3n Cambiar (Opcional, reutiliza tomarFoto) -->\r
            <ion-button \r
              color="primary" \r
              fill="clear" \r
              size="small" \r
              (click)="tomarFoto()">\r
              <ion-icon name="camera-reverse-outline" slot="start"></ion-icon>\r
              Cambiar\r
            </ion-button>\r
          </div>\r
        </div>\r
\r
        <!-- CASO 2: Si NO hay foto -->\r
        <ng-template #sinFoto>\r
          <div class="empty-photo-state">\r
            <p class="hint">No hay imagen adjunta.</p>\r
            <ion-button expand="block" color="primary" (click)="tomarFoto()">\r
              <ion-icon name="camera" slot="start"></ion-icon>\r
              Tomar foto\r
            </ion-button>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
      <hr class="divider">\r
\r
      <!-- SECCI\xD3N UBICACI\xD3N -->\r
      <div class="ubicacion-section">\r
        <div class="section-title">\r
          <ion-icon name="location-outline"></ion-icon> Ubicaci\xF3n\r
        </div>\r
        \r
        <div *ngIf="tarea.lat && tarea.lng; else sinUbicacion" class="location-data">\r
          <p>\r
            <strong>Lat:</strong> {{ tarea.lat | number:'1.6-6' }} <br>\r
            <strong>Lng:</strong> {{ tarea.lng | number:'1.6-6' }}\r
          </p>\r
          \r
          <ion-button\r
            expand="block"\r
            fill="outline"\r
            color="tertiary"\r
            class="map-btn"\r
            (click)="verEnMapa()">\r
            <ion-icon name="map-outline" slot="start"></ion-icon>\r
            Ver en Google Maps\r
          </ion-button>\r
        </div>\r
\r
        <ng-template #sinUbicacion>\r
          <div class="empty-location-state">\r
            <p class="hint">Sin ubicaci\xF3n guardada.</p>\r
            <ion-button expand="block" color="medium" (click)="obtenerUbicacion()">\r
              <ion-icon name="navigate-circle-outline" slot="start"></ion-icon>\r
              Obtener ubicaci\xF3n\r
            </ion-button>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Bot\xF3n de acci\xF3n principal (Completar/Pendiente) -->\r
    <div class="actions-container">\r
      <ion-button expand="block" [color]="tarea.completada ? 'medium' : 'success'" class="action-btn"\r
        (click)="toggleEstado()">\r
        <ion-icon [name]="tarea.completada ? 'arrow-undo' : 'checkmark-circle'" slot="start"></ion-icon>\r
        {{ tarea.completada ? 'Marcar como Pendiente' : 'Marcar como Completada' }}\r
      </ion-button>\r
    </div>\r
\r
  </div>\r
\r
  <!-- Estado vac\xEDo si no encuentra ID -->\r
  <ng-template #noEncontrada>\r
    <div class="empty-state centered">\r
      <ion-icon name="alert-circle-outline" color="medium" size="large"></ion-icon>\r
      <h3>Tarea no encontrada</h3>\r
      <p>Es posible que esta tarea haya sido eliminada.</p>\r
      <ion-button fill="clear" (click)="volver()">Volver al inicio</ion-button>\r
    </div>\r
  </ng-template>\r
</ion-content>`;
  }
});

// angular:jit:style:src\app\detalle-tarea\detalle-tarea.page.scss
var detalle_tarea_page_default2;
var init_detalle_tarea_page2 = __esm({
  "angular:jit:style:src\\app\\detalle-tarea\\detalle-tarea.page.scss"() {
    detalle_tarea_page_default2 = "/* src/app/detalle-tarea/detalle-tarea.page.scss */\n.detail-content {\n  --background: var(--ion-background-color);\n}\n.detail-container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding-top: 16px;\n}\n.note-detail-card {\n  background-color: var(--note-bg, #fff);\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n  margin-bottom: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.note-detail-card:not([style*=--note-bg]) {\n  background-color: var(--ion-card-background);\n}\n.detail-header {\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding-bottom: 16px;\n}\n.detail-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 12px 0;\n  color: #222;\n  line-height: 1.2;\n}\n.detail-meta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.date {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.date ion-icon {\n  font-size: 16px;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge.done {\n  background: var(--ion-color-success);\n  color: #fff;\n}\n.detail-body {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #333;\n  white-space: pre-wrap;\n}\nbody.dark .note-detail-card:not([style*=--note-bg]) .detail-title {\n  color: var(--ion-text-color);\n}\nbody.dark .note-detail-card:not([style*=--note-bg]) .detail-body {\n  color: var(--ion-text-color);\n}\nbody.dark .note-detail-card:not([style*=--note-bg]) .detail-meta {\n  color: var(--ion-color-medium);\n}\n.actions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.action-btn {\n  height: 56px;\n  font-size: 16px;\n  font-weight: 600;\n  --border-radius: 16px;\n  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.empty-state {\n  text-align: center;\n  margin-top: 100px;\n}\n.empty-state ion-icon {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.empty-state p {\n  font-size: 18px;\n  color: var(--ion-color-medium);\n}\n.foto-section,\n.ubicacion-section {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.foto-preview {\n  margin-bottom: 8px;\n}\n.foto-preview img {\n  width: 100%;\n  max-height: 220px;\n  border-radius: 12px;\n  object-fit: cover;\n  display: block;\n}\n.hint {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=detalle-tarea.page.css.map */\n";
  }
});

// node_modules/@capacitor/camera/dist/esm/definitions.js
var CameraSource, CameraDirection, CameraResultType;
var init_definitions = __esm({
  "node_modules/@capacitor/camera/dist/esm/definitions.js"() {
    "use strict";
    (function(CameraSource2) {
      CameraSource2["Prompt"] = "PROMPT";
      CameraSource2["Camera"] = "CAMERA";
      CameraSource2["Photos"] = "PHOTOS";
    })(CameraSource || (CameraSource = {}));
    (function(CameraDirection2) {
      CameraDirection2["Rear"] = "REAR";
      CameraDirection2["Front"] = "FRONT";
    })(CameraDirection || (CameraDirection = {}));
    (function(CameraResultType2) {
      CameraResultType2["Uri"] = "uri";
      CameraResultType2["Base64"] = "base64";
      CameraResultType2["DataUrl"] = "dataUrl";
    })(CameraResultType || (CameraResultType = {}));
  }
});

// node_modules/@capacitor/camera/dist/esm/web.js
var CameraWeb, Camera;
var init_web = __esm({
  "node_modules/@capacitor/camera/dist/esm/web.js"() {
    "use strict";
    init_dist();
    init_definitions();
    CameraWeb = class extends WebPlugin {
      getPhoto(options) {
        return __async(this, null, function* () {
          return new Promise((resolve, reject) => __async(this, null, function* () {
            if (options.webUseInput || options.source === CameraSource.Photos) {
              this.fileInputExperience(options, resolve, reject);
            } else if (options.source === CameraSource.Prompt) {
              let actionSheet = document.querySelector("pwa-action-sheet");
              if (!actionSheet) {
                actionSheet = document.createElement("pwa-action-sheet");
                document.body.appendChild(actionSheet);
              }
              actionSheet.header = options.promptLabelHeader || "Photo";
              actionSheet.cancelable = false;
              actionSheet.options = [
                { title: options.promptLabelPhoto || "From Photos" },
                { title: options.promptLabelPicture || "Take Picture" }
              ];
              actionSheet.addEventListener("onSelection", (e) => __async(this, null, function* () {
                const selection = e.detail;
                if (selection === 0) {
                  this.fileInputExperience(options, resolve, reject);
                } else {
                  this.cameraExperience(options, resolve, reject);
                }
              }));
            } else {
              this.cameraExperience(options, resolve, reject);
            }
          }));
        });
      }
      pickImages(_options) {
        return __async(this, null, function* () {
          return new Promise((resolve, reject) => __async(this, null, function* () {
            this.multipleFileInputExperience(resolve, reject);
          }));
        });
      }
      cameraExperience(options, resolve, reject) {
        return __async(this, null, function* () {
          if (customElements.get("pwa-camera-modal")) {
            const cameraModal = document.createElement("pwa-camera-modal");
            cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
            document.body.appendChild(cameraModal);
            try {
              yield cameraModal.componentOnReady();
              cameraModal.addEventListener("onPhoto", (e) => __async(this, null, function* () {
                const photo = e.detail;
                if (photo === null) {
                  reject(new CapacitorException("User cancelled photos app"));
                } else if (photo instanceof Error) {
                  reject(photo);
                } else {
                  resolve(yield this._getCameraPhoto(photo, options));
                }
                cameraModal.dismiss();
                document.body.removeChild(cameraModal);
              }));
              cameraModal.present();
            } catch (e) {
              this.fileInputExperience(options, resolve, reject);
            }
          } else {
            console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
            this.fileInputExperience(options, resolve, reject);
          }
        });
      }
      fileInputExperience(options, resolve, reject) {
        let input = document.querySelector("#_capacitor-camera-input");
        const cleanup = () => {
          var _a;
          (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
          input = document.createElement("input");
          input.id = "_capacitor-camera-input";
          input.type = "file";
          input.hidden = true;
          document.body.appendChild(input);
          input.addEventListener("change", (_e) => {
            const file = input.files[0];
            let format = "jpeg";
            if (file.type === "image/png") {
              format = "png";
            } else if (file.type === "image/gif") {
              format = "gif";
            }
            if (options.resultType === "dataUrl" || options.resultType === "base64") {
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                if (options.resultType === "dataUrl") {
                  resolve({
                    dataUrl: reader.result,
                    format
                  });
                } else if (options.resultType === "base64") {
                  const b64 = reader.result.split(",")[1];
                  resolve({
                    base64String: b64,
                    format
                  });
                }
                cleanup();
              });
              reader.readAsDataURL(file);
            } else {
              resolve({
                webPath: URL.createObjectURL(file),
                format
              });
              cleanup();
            }
          });
          input.addEventListener("cancel", (_e) => {
            reject(new CapacitorException("User cancelled photos app"));
            cleanup();
          });
        }
        input.accept = "image/*";
        input.capture = true;
        if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
          input.removeAttribute("capture");
        } else if (options.direction === CameraDirection.Front) {
          input.capture = "user";
        } else if (options.direction === CameraDirection.Rear) {
          input.capture = "environment";
        }
        input.click();
      }
      multipleFileInputExperience(resolve, reject) {
        let input = document.querySelector("#_capacitor-camera-input-multiple");
        const cleanup = () => {
          var _a;
          (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        };
        if (!input) {
          input = document.createElement("input");
          input.id = "_capacitor-camera-input-multiple";
          input.type = "file";
          input.hidden = true;
          input.multiple = true;
          document.body.appendChild(input);
          input.addEventListener("change", (_e) => {
            const photos = [];
            for (let i = 0; i < input.files.length; i++) {
              const file = input.files[i];
              let format = "jpeg";
              if (file.type === "image/png") {
                format = "png";
              } else if (file.type === "image/gif") {
                format = "gif";
              }
              photos.push({
                webPath: URL.createObjectURL(file),
                format
              });
            }
            resolve({ photos });
            cleanup();
          });
          input.addEventListener("cancel", (_e) => {
            reject(new CapacitorException("User cancelled photos app"));
            cleanup();
          });
        }
        input.accept = "image/*";
        input.click();
      }
      _getCameraPhoto(photo, options) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          const format = photo.type.split("/")[1];
          if (options.resultType === "uri") {
            resolve({
              webPath: URL.createObjectURL(photo),
              format,
              saved: false
            });
          } else {
            reader.readAsDataURL(photo);
            reader.onloadend = () => {
              const r = reader.result;
              if (options.resultType === "dataUrl") {
                resolve({
                  dataUrl: r,
                  format,
                  saved: false
                });
              } else {
                resolve({
                  base64String: r.split(",")[1],
                  format,
                  saved: false
                });
              }
            };
            reader.onerror = (e) => {
              reject(e);
            };
          }
        });
      }
      checkPermissions() {
        return __async(this, null, function* () {
          if (typeof navigator === "undefined" || !navigator.permissions) {
            throw this.unavailable("Permissions API not available in this browser");
          }
          try {
            const permission = yield window.navigator.permissions.query({
              name: "camera"
            });
            return {
              camera: permission.state,
              photos: "granted"
            };
          } catch (_a) {
            throw this.unavailable("Camera permissions are not available in this browser");
          }
        });
      }
      requestPermissions() {
        return __async(this, null, function* () {
          throw this.unimplemented("Not implemented on web.");
        });
      }
      pickLimitedLibraryPhotos() {
        return __async(this, null, function* () {
          throw this.unavailable("Not implemented on web.");
        });
      }
      getLimitedLibraryPhotos() {
        return __async(this, null, function* () {
          throw this.unavailable("Not implemented on web.");
        });
      }
    };
    Camera = new CameraWeb();
  }
});

// node_modules/@capacitor/camera/dist/esm/index.js
var Camera2;
var init_esm = __esm({
  "node_modules/@capacitor/camera/dist/esm/index.js"() {
    "use strict";
    init_dist();
    init_web();
    init_definitions();
    Camera2 = registerPlugin("Camera", {
      web: () => new CameraWeb()
    });
  }
});

// node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return new Proxy({}, {
          get(w, o) {
            return (c, p, r) => {
              const i = t.Capacitor.Plugins[n];
              if (i === void 0) {
                r(new Error(`Capacitor plugin ${n} not found`));
                return;
              }
              if (typeof i[o] != "function") {
                r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
                return;
              }
              (() => __async(null, null, function* () {
                try {
                  const a = yield i[o](c);
                  p(a);
                } catch (a) {
                  r(a);
                }
              }))();
            };
          }
        });
      }
    }
  );
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return t.cordova.plugins[n];
      }
    }
  );
}
function f(t = false) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}
var init_synapse = __esm({
  "node_modules/@capacitor/synapse/dist/synapse.mjs"() {
    "use strict";
  }
});

// node_modules/@capacitor/geolocation/dist/esm/definitions.js
var init_definitions2 = __esm({
  "node_modules/@capacitor/geolocation/dist/esm/definitions.js"() {
    "use strict";
  }
});

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation;
var init_esm2 = __esm({
  "node_modules/@capacitor/geolocation/dist/esm/index.js"() {
    "use strict";
    init_dist();
    init_synapse();
    init_definitions2();
    Geolocation = registerPlugin("Geolocation", {
      web: () => import("./chunk-ORF3W6G7.js").then((m) => new m.GeolocationWeb())
    });
    f();
  }
});

// src/app/detalle-tarea/detalle-tarea.page.ts
var DetalleTareaPage;
var init_detalle_tarea_page3 = __esm({
  "src/app/detalle-tarea/detalle-tarea.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_detalle_tarea_page();
    init_detalle_tarea_page2();
    init_core();
    init_common();
    init_router();
    init_ionic_angular();
    init_esm();
    init_esm2();
    DetalleTareaPage = class DetalleTareaPage2 {
      constructor(route, router, alertCtrl, toastCtrl) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
      }
      /**
       * Ciclo de vida de Angular. Carga la tarea al iniciar el componente.
       */
      ngOnInit() {
        this.cargarTarea();
      }
      /**
       * Ciclo de vida de Ionic. Se ejecuta cada vez que la vista va a ser visible,
       * asegurando que los datos se recarguen (ej. al volver de editar).
       */
      ionViewWillEnter() {
        this.cargarTarea();
      }
      /**
       * Obtiene el color de fondo de la nota basado en la clave.
       * @param c Clave de color opcional.
       * @returns Estilo CSS con el color de fondo.
       */
      /**
       * Carga la tarea desde el localStorage utilizando el 'id' de la URL.
       */
      cargarTarea() {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
        this.tarea = tareasGuardadas.find((t) => t.id === id);
        if (!this.tarea) {
          this.router.navigate(["/home"]);
        }
      }
      /**
       * Guarda la versión actualizada de la tarea en localStorage.
       */
      guardarTareaActualizada() {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
        const index = tareasGuardadas.findIndex((t) => t.id === this.tarea.id);
        if (index !== -1) {
          tareasGuardadas[index] = this.tarea;
          localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
        }
      }
      /**
       * Usa la cámara para tomar una foto y la guarda en la tarea.
       */
      tomarFoto() {
        return __async(this, null, function* () {
          try {
            const image = yield Camera2.getPhoto({
              quality: 70,
              resultType: CameraResultType.DataUrl,
              source: CameraSource.Camera
            });
            if (image && image.dataUrl) {
              this.tarea.fotoData = image.dataUrl;
              this.guardarTareaActualizada();
              const toast = yield this.toastCtrl.create({
                message: "Foto guardada en la tarea",
                duration: 2e3,
                color: "success"
              });
              yield toast.present();
            }
          } catch (err) {
            console.error("[Camera] Error", err);
            const toast = yield this.toastCtrl.create({
              message: "No se pudo tomar la foto",
              duration: 2e3,
              color: "danger"
            });
            yield toast.present();
          }
        });
      }
      // <--- Cierre de tomarFoto()
      /**
       * Elimina la foto asociada a la tarea.
       * Se cambió 'foto' por 'fotoData' para consistencia.
       */
      borrarFoto() {
        return __async(this, null, function* () {
          if (!this.tarea)
            return;
          const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
          const index = tareasGuardadas.findIndex((t) => t.id === this.tarea.id);
          if (index !== -1) {
            tareasGuardadas[index].fotoData = null;
            localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
            this.tarea.fotoData = null;
            const toast = yield this.toastCtrl.create({
              message: "Foto eliminada correctamente",
              duration: 2e3,
              color: "warning"
            });
            yield toast.present();
          }
        });
      }
      /**
       * Obtiene la ubicación GPS actual y la guarda en la tarea.
       */
      obtenerUbicacion() {
        return __async(this, null, function* () {
          try {
            const position = yield Geolocation.getCurrentPosition();
            this.tarea.lat = position.coords.latitude;
            this.tarea.lng = position.coords.longitude;
            this.guardarTareaActualizada();
            const toast = yield this.toastCtrl.create({
              message: "Ubicaci\xF3n guardada en la tarea",
              duration: 2e3,
              color: "success"
            });
            yield toast.present();
          } catch (err) {
            console.error("[Geo] Error", err);
            const toast = yield this.toastCtrl.create({
              message: "No se pudo obtener la ubicaci\xF3n",
              duration: 2e3,
              color: "danger"
            });
            yield toast.present();
          }
        });
      }
      /**
       * Abre Google Maps con las coordenadas guardadas de la tarea.
       */
      verEnMapa() {
        if (!this.tarea?.lat || !this.tarea?.lng) {
          return;
        }
        const url = `https://www.google.com/maps?q=${this.tarea.lat},${this.tarea.lng}`;
        window.open(url, "_blank");
      }
      /**
       * Navega de vuelta a la página de inicio.
       */
      volver() {
        this.router.navigate(["/home"]);
      }
      /**
       * Cambia el estado de completada de la tarea y lo guarda.
       */
      toggleEstado() {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
        const index = tareasGuardadas.findIndex((t) => t.id === this.tarea.id);
        if (index !== -1) {
          tareasGuardadas[index].completada = !tareasGuardadas[index].completada;
          tareasGuardadas[index].updatedAt = (/* @__PURE__ */ new Date()).toISOString();
          localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
          this.tarea.completada = tareasGuardadas[index].completada;
          this.tarea.updatedAt = tareasGuardadas[index].updatedAt;
        }
      }
      /**
       * Navega a la página de edición de la tarea.
       */
      editar() {
        this.router.navigate(["/editar-tarea", this.tarea.id]);
      }
      /**
       * Muestra una alerta de confirmación antes de eliminar la tarea.
       */
      eliminar() {
        return __async(this, null, function* () {
          const alerta = yield this.alertCtrl.create({
            header: "Confirmar eliminaci\xF3n",
            message: "\xBFEst\xE1s seguro de que deseas eliminar esta tarea?",
            buttons: [
              { text: "Cancelar", role: "cancel" },
              {
                text: "Eliminar",
                handler: () => __async(this, null, function* () {
                  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]");
                  const nuevasTareas = tareasGuardadas.filter((t) => t.id !== this.tarea.id);
                  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
                  const toast = yield this.toastCtrl.create({
                    message: "Tarea eliminada correctamente",
                    duration: 2e3,
                    color: "danger"
                  });
                  yield toast.present();
                  this.router.navigate(["/home"]);
                })
              }
            ]
          });
          yield alerta.present();
        });
      }
      static {
        this.ctorParameters = () => [
          { type: ActivatedRoute },
          { type: Router },
          { type: AlertController },
          { type: ToastController }
        ];
      }
    };
    DetalleTareaPage = __decorate([
      Component({
        selector: "app-detalle-tarea",
        standalone: true,
        template: detalle_tarea_page_default,
        imports: [CommonModule, IonicModule],
        styles: [detalle_tarea_page_default2]
      })
    ], DetalleTareaPage);
  }
});

// src/app/detalle-tarea/detalle-tarea.page.spec.ts
var require_detalle_tarea_page_spec = __commonJS({
  "src/app/detalle-tarea/detalle-tarea.page.spec.ts"(exports) {
    init_testing();
    init_detalle_tarea_page3();
    init_router();
    init_ionic_angular();
    describe("DetalleTareaPage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DetalleTareaPage],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: { get: () => "1" }
                }
              }
            },
            { provide: Router, useValue: { navigate: jasmine.createSpy("navigate") } },
            {
              provide: AlertController,
              useValue: {
                create: jasmine.createSpy("create").and.returnValue(Promise.resolve({ present: () => Promise.resolve() }))
              }
            },
            {
              provide: ToastController,
              useValue: {
                create: jasmine.createSpy("create").and.returnValue(Promise.resolve({ present: () => Promise.resolve() }))
              }
            },
            {
              provide: NavController,
              useValue: jasmine.createSpyObj("NavController", ["navigateForward", "navigateBack"])
            }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DetalleTareaPage);
        component = fixture.componentInstance;
      }));
      it("should create", () => {
        spyOn(localStorage, "getItem").and.returnValue(JSON.stringify([]));
        fixture.detectChanges();
        expect(component).toBeTruthy();
      });
      it("toggleEstado() should change completada and update date", () => {
        const mockTask = { id: 1, titulo: "Test", completada: false, updatedAt: "2023-01-01T00:00:00.000Z" };
        spyOn(localStorage, "getItem").and.returnValue(JSON.stringify([mockTask]));
        spyOn(localStorage, "setItem");
        fixture.detectChanges();
        component.toggleEstado();
        expect(component.tarea.completada).toBeTrue();
        expect(component.tarea.updatedAt).not.toBe("2023-01-01T00:00:00.000Z");
        expect(localStorage.setItem).toHaveBeenCalled();
      });
      it("borrarFoto() should clear fotoData", () => __async(null, null, function* () {
        const mockTask = { id: 1, titulo: "Test", fotoData: "base64-image" };
        spyOn(localStorage, "getItem").and.returnValue(JSON.stringify([mockTask]));
        spyOn(localStorage, "setItem");
        fixture.detectChanges();
        yield component.borrarFoto();
        expect(component.tarea.fotoData).toBeNull();
        expect(localStorage.setItem).toHaveBeenCalled();
      }));
    });
  }
});
export default require_detalle_tarea_page_spec();
//# sourceMappingURL=spec-detalle-tarea.page.spec.js.map
