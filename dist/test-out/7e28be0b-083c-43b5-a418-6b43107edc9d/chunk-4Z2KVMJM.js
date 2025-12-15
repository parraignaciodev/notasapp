import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js
var compareOptions, isOptionSelected;
var init_compare_with_utils_sObYyvOy = __esm({
  "node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js"() {
    "use strict";
    compareOptions = (currentValue, compareValue, compareWith) => {
      if (typeof compareWith === "function") {
        return compareWith(currentValue, compareValue);
      } else if (typeof compareWith === "string") {
        return currentValue[compareWith] === compareValue[compareWith];
      } else {
        return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
      }
    };
    isOptionSelected = (currentValue, compareValue, compareWith) => {
      if (currentValue === void 0) {
        return false;
      }
      if (Array.isArray(currentValue)) {
        return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
      } else {
        return compareOptions(currentValue, compareValue, compareWith);
      }
    };
  }
});

export {
  compareOptions,
  isOptionSelected,
  init_compare_with_utils_sObYyvOy
};
/*! Bundled license information:

@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-4Z2KVMJM.js.map
