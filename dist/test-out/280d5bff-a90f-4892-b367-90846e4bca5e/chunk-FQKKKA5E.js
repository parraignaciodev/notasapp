import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/theme-DiVJyqlX.js
var hostContext, createColorClasses, getClassList, getClassMap, SCHEME, openURL;
var init_theme_DiVJyqlX = __esm({
  "node_modules/@ionic/core/dist/esm/theme-DiVJyqlX.js"() {
    "use strict";
    hostContext = (selector, el) => {
      return el.closest(selector) !== null;
    };
    createColorClasses = (color, cssClassMap) => {
      return typeof color === "string" && color.length > 0 ? Object.assign({ "ion-color": true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
    };
    getClassList = (classes) => {
      if (classes !== void 0) {
        const array = Array.isArray(classes) ? classes : classes.split(" ");
        return array.filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
      }
      return [];
    };
    getClassMap = (classes) => {
      const map = {};
      getClassList(classes).forEach((c) => map[c] = true);
      return map;
    };
    SCHEME = /^[a-z][a-z0-9+\-.]*:/;
    openURL = (url, ev, direction, animation) => __async(null, null, function* () {
      if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
        const router = document.querySelector("ion-router");
        if (router) {
          if (ev != null) {
            ev.preventDefault();
          }
          return router.push(url, direction, animation);
        }
      }
      return false;
    });
  }
});

export {
  hostContext,
  createColorClasses,
  getClassMap,
  openURL,
  init_theme_DiVJyqlX
};
/*! Bundled license information:

@ionic/core/dist/esm/theme-DiVJyqlX.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-FQKKKA5E.js.map
