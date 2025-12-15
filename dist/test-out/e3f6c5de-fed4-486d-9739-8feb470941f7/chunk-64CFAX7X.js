import {
  findClosestIonContent,
  init_index8,
  scrollToTop
} from "./chunk-RXWKPGKN.js";
import {
  init_client,
  readTask,
  writeTask
} from "./chunk-7FDHUQWW.js";
import {
  componentOnReady,
  init_helpers
} from "./chunk-JFMPIF7U.js";
import "./chunk-YRWXUMMD.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/components/status-tap.js
var startStatusTap;
var init_status_tap = __esm({
  "node_modules/@ionic/core/components/status-tap.js"() {
    init_client();
    init_index8();
    init_helpers();
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
init_status_tap();
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/components/status-tap.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-64CFAX7X.js.map
