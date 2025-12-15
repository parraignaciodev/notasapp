import {
  createColorClasses,
  init_theme_DiVJyqlX
} from "./chunk-FQKKKA5E.js";
import {
  getIonMode,
  init_ionic_global_CDrldh_5
} from "./chunk-34X6K5NF.js";
import {
  Host,
  h,
  init_index_C8IsBmNU,
  registerInstance
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/ion-text.entry.js
var textCss, Text;
var init_ion_text_entry = __esm({
  "node_modules/@ionic/core/dist/esm/ion-text.entry.js"() {
    init_index_C8IsBmNU();
    init_theme_DiVJyqlX();
    init_ionic_global_CDrldh_5();
    textCss = ":host(.ion-color){color:var(--ion-color-base)}";
    Text = class {
      constructor(hostRef) {
        registerInstance(this, hostRef);
      }
      render() {
        const mode = getIonMode(this);
        return h(Host, { key: "361035eae7b92dc109794348d39bad2f596eb6be", class: createColorClasses(this.color, {
          [mode]: true
        }) }, h("slot", { key: "c7b8835cf485ba9ecd73298f0529276ce1ea0852" }));
      }
    };
    Text.style = textCss;
  }
});
init_ion_text_entry();
export {
  Text as ion_text
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-text.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-T3ICVP73.js.map
