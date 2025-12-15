import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/dir-C53feagD.js
var isRTL;
var init_dir_C53feagD = __esm({
  "node_modules/@ionic/core/dist/esm/dir-C53feagD.js"() {
    "use strict";
    isRTL = (hostEl) => {
      if (hostEl) {
        if (hostEl.dir !== "") {
          return hostEl.dir.toLowerCase() === "rtl";
        }
      }
      return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
    };
  }
});

export {
  isRTL,
  init_dir_C53feagD
};
/*! Bundled license information:

@ionic/core/dist/esm/dir-C53feagD.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-HNB3ICIF.js.map
