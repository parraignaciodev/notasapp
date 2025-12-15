import {
  findClosestIonContent,
  init_index_Bs3kT4bc,
  scrollToTop
} from "./chunk-QKY2TJ7V.js";
import {
  componentOnReady,
  init_helpers_DEn3pfjm
} from "./chunk-CCLA7PPN.js";
import {
  init_index_C8IsBmNU,
  readTask,
  writeTask
} from "./chunk-O3V776ZK.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/status-tap-5DQ7Fc4V.js
var startStatusTap;
var init_status_tap_5DQ7Fc4V = __esm({
  "node_modules/@ionic/core/dist/esm/status-tap-5DQ7Fc4V.js"() {
    init_index_C8IsBmNU();
    init_index_Bs3kT4bc();
    init_helpers_DEn3pfjm();
    startStatusTap = () => {
      const win = window;
      win.addEventListener("statusTap", () => {
        readTask(() => {
          const width = win.innerWidth;
          const height = win.innerHeight;
          const el = document.elementFromPoint(width / 2, height / 2);
          if (!el) {
            return;
          }
          const contentEl = findClosestIonContent(el);
          if (contentEl) {
            new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
              writeTask(() => __async(null, null, function* () {
                contentEl.style.setProperty("--overflow", "hidden");
                yield scrollToTop(contentEl, 300);
                contentEl.style.removeProperty("--overflow");
              }));
            });
          }
        });
      });
    };
  }
});
init_status_tap_5DQ7Fc4V();
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/dist/esm/status-tap-5DQ7Fc4V.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-V3QL6DED.js.map
