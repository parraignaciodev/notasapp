import {
  init_index9,
  win
} from "./chunk-HDGMTXV5.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/components/capacitor.js
var getCapacitor;
var init_capacitor = __esm({
  "node_modules/@ionic/core/components/capacitor.js"() {
    "use strict";
    init_index9();
    getCapacitor = () => {
      if (win !== void 0) {
        return win.Capacitor;
      }
      return void 0;
    };
  }
});

// node_modules/@ionic/core/components/keyboard2.js
var ExceptionCode, KeyboardResize, Keyboard;
var init_keyboard2 = __esm({
  "node_modules/@ionic/core/components/keyboard2.js"() {
    "use strict";
    init_capacitor();
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
  getCapacitor,
  init_capacitor,
  KeyboardResize,
  Keyboard,
  init_keyboard2
};
/*! Bundled license information:

@ionic/core/components/capacitor.js:
@ionic/core/components/keyboard2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-PQUYOW7L.js.map
