import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart,
  init_haptic_DzAMWJuk
} from "./chunk-BZO7OIFL.js";
import {
  createGesture,
  init_index_CfgBF1SE
} from "./chunk-6HJKRNGZ.js";
import {
  init_index_C8IsBmNU,
  writeTask
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/button-active-L570Swow.js
var createButtonActiveGesture;
var init_button_active_L570Swow = __esm({
  "node_modules/@ionic/core/dist/esm/button-active-L570Swow.js"() {
    "use strict";
    init_index_C8IsBmNU();
    init_haptic_DzAMWJuk();
    init_index_CfgBF1SE();
    createButtonActiveGesture = (el, isButton) => {
      let currentTouchedButton;
      let initialTouchedButton;
      const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === "undefined") {
          return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target) || target.disabled) {
          clearActiveButton();
          return;
        }
        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };
      const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        writeTask(() => buttonToModify.classList.add("ion-activated"));
        hapticFeedbackFn();
      };
      const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
          return;
        }
        const buttonToModify = currentTouchedButton;
        writeTask(() => buttonToModify.classList.remove("ion-activated"));
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }
        currentTouchedButton = void 0;
      };
      return createGesture({
        el,
        gestureName: "buttonActiveDrag",
        threshold: 0,
        onStart: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart),
        onMove: (ev) => activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged),
        onEnd: () => {
          clearActiveButton(true);
          hapticSelectionEnd();
          initialTouchedButton = void 0;
        }
      });
    };
  }
});

export {
  createButtonActiveGesture,
  init_button_active_L570Swow
};
/*! Bundled license information:

@ionic/core/dist/esm/button-active-L570Swow.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-2HBU7AJC.js.map
