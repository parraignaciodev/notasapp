import {
  getCapacitor,
  init_capacitor_CFERIeaU
} from "./chunk-5FEZ6LNJ.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/haptic-DzAMWJuk.js
var ImpactStyle, NotificationType, HapticEngine, hapticAvailable, hapticSelection, hapticSelectionStart, hapticSelectionChanged, hapticSelectionEnd, hapticImpact;
var init_haptic_DzAMWJuk = __esm({
  "node_modules/@ionic/core/dist/esm/haptic-DzAMWJuk.js"() {
    "use strict";
    init_capacitor_CFERIeaU();
    (function(ImpactStyle2) {
      ImpactStyle2["Heavy"] = "HEAVY";
      ImpactStyle2["Medium"] = "MEDIUM";
      ImpactStyle2["Light"] = "LIGHT";
    })(ImpactStyle || (ImpactStyle = {}));
    (function(NotificationType2) {
      NotificationType2["Success"] = "SUCCESS";
      NotificationType2["Warning"] = "WARNING";
      NotificationType2["Error"] = "ERROR";
    })(NotificationType || (NotificationType = {}));
    HapticEngine = {
      getEngine() {
        const capacitor = getCapacitor();
        if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable("Haptics")) {
          return capacitor.Plugins.Haptics;
        }
        return void 0;
      },
      available() {
        const engine = this.getEngine();
        if (!engine) {
          return false;
        }
        const capacitor = getCapacitor();
        if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === "web") {
          return typeof navigator !== "undefined" && navigator.vibrate !== void 0;
        }
        return true;
      },
      impact(options) {
        const engine = this.getEngine();
        if (!engine) {
          return;
        }
        engine.impact({ style: options.style });
      },
      notification(options) {
        const engine = this.getEngine();
        if (!engine) {
          return;
        }
        engine.notification({ type: options.type });
      },
      selection() {
        this.impact({ style: ImpactStyle.Light });
      },
      selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
          return;
        }
        engine.selectionStart();
      },
      selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
          return;
        }
        engine.selectionChanged();
      },
      selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
          return;
        }
        engine.selectionEnd();
      }
    };
    hapticAvailable = () => {
      return HapticEngine.available();
    };
    hapticSelection = () => {
      hapticAvailable() && HapticEngine.selection();
    };
    hapticSelectionStart = () => {
      hapticAvailable() && HapticEngine.selectionStart();
    };
    hapticSelectionChanged = () => {
      hapticAvailable() && HapticEngine.selectionChanged();
    };
    hapticSelectionEnd = () => {
      hapticAvailable() && HapticEngine.selectionEnd();
    };
    hapticImpact = (options) => {
      hapticAvailable() && HapticEngine.impact(options);
    };
  }
});

export {
  ImpactStyle,
  hapticSelection,
  hapticSelectionStart,
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticImpact,
  init_haptic_DzAMWJuk
};
/*! Bundled license information:

@ionic/core/dist/esm/haptic-DzAMWJuk.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-BZO7OIFL.js.map
