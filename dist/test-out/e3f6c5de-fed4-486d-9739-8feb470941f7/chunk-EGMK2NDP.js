import {
  getIonMode,
  init_ionic_global_CDrldh_5
} from "./chunk-34X6K5NF.js";
import {
  Host,
  createEvent,
  h,
  init_index_C8IsBmNU,
  registerInstance
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js
var backdropIosCss, backdropMdCss, Backdrop;
var init_ion_backdrop_entry = __esm({
  "node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js"() {
    init_index_C8IsBmNU();
    init_ionic_global_CDrldh_5();
    backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
    backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
    Backdrop = class {
      constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
      }
      onMouseDown(ev) {
        this.emitTap(ev);
      }
      emitTap(ev) {
        if (this.stopPropagation) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        if (this.tappable) {
          this.ionBackdropTap.emit();
        }
      }
      render() {
        const mode = getIonMode(this);
        return h(Host, { key: "7abaf2c310aa399607451b14063265e8a5846938", "aria-hidden": "true", class: {
          [mode]: true,
          "backdrop-hide": !this.visible,
          "backdrop-no-tappable": !this.tappable
        } });
      }
    };
    Backdrop.style = {
      ios: backdropIosCss,
      md: backdropMdCss
    };
  }
});
init_ion_backdrop_entry();
export {
  Backdrop as ion_backdrop
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-backdrop.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-EGMK2NDP.js.map
