import {
  getCapacitor,
  init_capacitor_CFERIeaU
} from "./chunk-5FEZ6LNJ.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/keyboard-CUw4ekVy.js
var ExceptionCode, KeyboardResize, Keyboard;
var init_keyboard_CUw4ekVy = __esm({
  "node_modules/@ionic/core/dist/esm/keyboard-CUw4ekVy.js"() {
    "use strict";
    init_capacitor_CFERIeaU();
    (function(ExceptionCode2) {
      ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
      ExceptionCode2["Unavailable"] = "UNAVAILABLE";
    })(ExceptionCode || (ExceptionCode = {}));
    (function(KeyboardResize2) {
      KeyboardResize2["Body"] = "body";
      KeyboardResize2["Ionic"] = "ionic";
      KeyboardResize2["Native"] = "native";
      KeyboardResize2["None"] = "none";
    })(KeyboardResize || (KeyboardResize = {}));
    Keyboard = {
      getEngine() {
        const capacitor = getCapacitor();
        if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable("Keyboard")) {
          return capacitor.Plugins.Keyboard;
        }
        return void 0;
      },
      getResizeMode() {
        const engine = this.getEngine();
        if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
          return Promise.resolve(void 0);
        }
        return engine.getResizeMode().catch((e) => {
          if (e.code === ExceptionCode.Unimplemented) {
            return void 0;
          }
          throw e;
        });
      }
    };
  }
});

export {
  KeyboardResize,
  Keyboard,
  init_keyboard_CUw4ekVy
};
/*! Bundled license information:

@ionic/core/dist/esm/keyboard-CUw4ekVy.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-FXETNY4V.js.map
