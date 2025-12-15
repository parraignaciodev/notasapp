import {
  init_helpers_DEn3pfjm,
  raf
} from "./chunk-CCLA7PPN.js";
import {
  init_index_ZjP4CjeZ,
  win
} from "./chunk-5Z73BTII.js";
import {
  init_index_C8IsBmNU,
  printIonError
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/input.utils-DrvTa8gz.js
var createSlotMutationController, getCounterText, defaultCounterFormatter;
var init_input_utils_DrvTa8gz = __esm({
  "node_modules/@ionic/core/dist/esm/input.utils-DrvTa8gz.js"() {
    "use strict";
    init_index_ZjP4CjeZ();
    init_helpers_DEn3pfjm();
    init_index_C8IsBmNU();
    createSlotMutationController = (el, slotName, mutationCallback) => {
      let hostMutationObserver;
      let slottedContentMutationObserver;
      if (win !== void 0 && "MutationObserver" in win) {
        const slots = Array.isArray(slotName) ? slotName : [slotName];
        hostMutationObserver = new MutationObserver((entries) => {
          for (const entry of entries) {
            for (const node of entry.addedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE && slots.includes(node.slot)) {
                mutationCallback();
                raf(() => watchForSlotChange(node));
                return;
              }
            }
          }
        });
        hostMutationObserver.observe(el, {
          childList: true,
          /**
           * This fixes an issue with the `ion-input` and
           * `ion-textarea` not re-rendering in some cases
           * when using the label slot functionality.
           *
           * HTML element patches in Stencil that are enabled
           * by the `experimentalSlotFixes` flag in Stencil v4
           * result in DOM manipulations that won't trigger
           * the current mutation observer configuration and
           * callback.
           */
          subtree: true
        });
      }
      const watchForSlotChange = (slottedEl) => {
        var _a;
        if (slottedContentMutationObserver) {
          slottedContentMutationObserver.disconnect();
          slottedContentMutationObserver = void 0;
        }
        slottedContentMutationObserver = new MutationObserver((entries) => {
          mutationCallback();
          for (const entry of entries) {
            for (const node of entry.removedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE && node.slot === slotName) {
                destroySlottedContentObserver();
              }
            }
          }
        });
        slottedContentMutationObserver.observe((_a = slottedEl.parentElement) !== null && _a !== void 0 ? _a : slottedEl, { subtree: true, childList: true });
      };
      const destroy = () => {
        if (hostMutationObserver) {
          hostMutationObserver.disconnect();
          hostMutationObserver = void 0;
        }
        destroySlottedContentObserver();
      };
      const destroySlottedContentObserver = () => {
        if (slottedContentMutationObserver) {
          slottedContentMutationObserver.disconnect();
          slottedContentMutationObserver = void 0;
        }
      };
      return {
        destroy
      };
    };
    getCounterText = (value, maxLength, counterFormatter) => {
      const valueLength = value == null ? 0 : value.toString().length;
      const defaultCounterText = defaultCounterFormatter(valueLength, maxLength);
      if (counterFormatter === void 0) {
        return defaultCounterText;
      }
      try {
        return counterFormatter(valueLength, maxLength);
      } catch (e) {
        printIonError("[ion-input] - Exception in provided `counterFormatter`:", e);
        return defaultCounterText;
      }
    };
    defaultCounterFormatter = (length, maxlength) => {
      return `${length} / ${maxlength}`;
    };
  }
});

export {
  createSlotMutationController,
  getCounterText,
  init_input_utils_DrvTa8gz
};
/*! Bundled license information:

@ionic/core/dist/esm/input.utils-DrvTa8gz.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-RIGFKGH4.js.map
