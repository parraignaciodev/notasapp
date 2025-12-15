import {
  init_index_ZjP4CjeZ,
  win
} from "./chunk-5Z73BTII.js";
import {
  config,
  init_index_C8IsBmNU,
  printIonError
} from "./chunk-O3V776ZK.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/hardware-back-button-CPLxO-Ev.js
var shouldUseCloseWatcher, blockHardwareBackButton, startHardwareBackButton, OVERLAY_BACK_BUTTON_PRIORITY, MENU_BACK_BUTTON_PRIORITY;
var init_hardware_back_button_CPLxO_Ev = __esm({
  "node_modules/@ionic/core/dist/esm/hardware-back-button-CPLxO-Ev.js"() {
    init_index_ZjP4CjeZ();
    init_index_C8IsBmNU();
    shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
    blockHardwareBackButton = () => {
      document.addEventListener("backbutton", () => {
      });
    };
    startHardwareBackButton = () => {
      const doc = document;
      let busy = false;
      const backButtonCallback = () => {
        if (busy) {
          return;
        }
        let index = 0;
        let handlers = [];
        const ev = new CustomEvent("ionBackButton", {
          bubbles: false,
          detail: {
            register(priority, handler) {
              handlers.push({ priority, handler, id: index++ });
            }
          }
        });
        doc.dispatchEvent(ev);
        const executeAction = (handlerRegister) => __async(null, null, function* () {
          try {
            if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
              const result = handlerRegister.handler(processHandlers);
              if (result != null) {
                yield result;
              }
            }
          } catch (e) {
            printIonError("[ion-app] - Exception in startHardwareBackButton:", e);
          }
        });
        const processHandlers = () => {
          if (handlers.length > 0) {
            let selectedHandler = {
              priority: Number.MIN_SAFE_INTEGER,
              handler: () => void 0,
              id: -1
            };
            handlers.forEach((handler) => {
              if (handler.priority >= selectedHandler.priority) {
                selectedHandler = handler;
              }
            });
            busy = true;
            handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
            executeAction(selectedHandler).then(() => busy = false);
          }
        };
        processHandlers();
      };
      if (shouldUseCloseWatcher()) {
        let watcher;
        const configureWatcher = () => {
          watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
          watcher = new win.CloseWatcher();
          watcher.onclose = () => {
            backButtonCallback();
            configureWatcher();
          };
        };
        configureWatcher();
      } else {
        doc.addEventListener("backbutton", backButtonCallback);
      }
    };
    OVERLAY_BACK_BUTTON_PRIORITY = 100;
    MENU_BACK_BUTTON_PRIORITY = 99;
  }
});

export {
  shouldUseCloseWatcher,
  blockHardwareBackButton,
  startHardwareBackButton,
  OVERLAY_BACK_BUTTON_PRIORITY,
  MENU_BACK_BUTTON_PRIORITY,
  init_hardware_back_button_CPLxO_Ev
};
/*! Bundled license information:

@ionic/core/dist/esm/hardware-back-button-CPLxO-Ev.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-762M2KFK.js.map
