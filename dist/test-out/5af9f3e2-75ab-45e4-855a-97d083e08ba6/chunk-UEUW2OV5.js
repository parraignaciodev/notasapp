import {
  getIonMode,
  init_ionic_global_CDrldh_5
} from "./chunk-34X6K5NF.js";
import {
  inheritAttributes,
  init_helpers_DEn3pfjm
} from "./chunk-CCLA7PPN.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  init_index_C8IsBmNU,
  registerInstance
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/ion-img.entry.js
var imgCss, Img, isDraggable;
var init_ion_img_entry = __esm({
  "node_modules/@ionic/core/dist/esm/ion-img.entry.js"() {
    init_index_C8IsBmNU();
    init_helpers_DEn3pfjm();
    init_ionic_global_CDrldh_5();
    imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
    Img = class {
      constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
        this.ionError = createEvent(this, "ionError", 7);
        this.inheritedAttributes = {};
        this.onLoad = () => {
          this.ionImgDidLoad.emit();
        };
        this.onError = () => {
          this.ionError.emit();
        };
      }
      srcChanged() {
        this.addIO();
      }
      componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, ["draggable"]);
      }
      componentDidLoad() {
        this.addIO();
      }
      addIO() {
        if (this.src === void 0) {
          return;
        }
        if (typeof window !== "undefined" && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype) {
          this.removeIO();
          this.io = new IntersectionObserver((data) => {
            if (data[data.length - 1].isIntersecting) {
              this.load();
              this.removeIO();
            }
          });
          this.io.observe(this.el);
        } else {
          setTimeout(() => this.load(), 200);
        }
      }
      load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
      }
      removeIO() {
        if (this.io) {
          this.io.disconnect();
          this.io = void 0;
        }
      }
      render() {
        const { loadSrc, alt, onLoad, loadError, inheritedAttributes } = this;
        const { draggable } = inheritedAttributes;
        return h(Host, { key: "da600442894427dee1974a28e545613afac69fca", class: getIonMode(this) }, h("img", { key: "16df0c7069af86c0fa7ce5af598bc0f63b4eb71a", decoding: "async", src: loadSrc, alt, onLoad, onError: loadError, part: "image", draggable: isDraggable(draggable) }));
      }
      get el() {
        return getElement(this);
      }
      static get watchers() {
        return {
          "src": ["srcChanged"]
        };
      }
    };
    isDraggable = (draggable) => {
      switch (draggable) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          return void 0;
      }
    };
    Img.style = imgCss;
  }
});
init_ion_img_entry();
export {
  Img as ion_img
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-img.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-UEUW2OV5.js.map
