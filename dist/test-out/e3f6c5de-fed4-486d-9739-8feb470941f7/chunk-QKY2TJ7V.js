import {
  componentOnReady,
  init_helpers_DEn3pfjm
} from "./chunk-CCLA7PPN.js";
import {
  init_index_C8IsBmNU,
  printRequiredElementError
} from "./chunk-O3V776ZK.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/index-Bs3kT4bc.js
var ION_CONTENT_TAG_NAME, ION_CONTENT_ELEMENT_SELECTOR, ION_CONTENT_CLASS_SELECTOR, ION_CONTENT_SELECTOR, isIonContent, getScrollElement, findIonContent, findClosestIonContent, scrollToTop, scrollByPoint, printIonContentErrorMsg, disableContentScrollY, resetContentScrollY;
var init_index_Bs3kT4bc = __esm({
  "node_modules/@ionic/core/dist/esm/index-Bs3kT4bc.js"() {
    "use strict";
    init_helpers_DEn3pfjm();
    init_index_C8IsBmNU();
    ION_CONTENT_TAG_NAME = "ION-CONTENT";
    ION_CONTENT_ELEMENT_SELECTOR = "ion-content";
    ION_CONTENT_CLASS_SELECTOR = ".ion-content-scroll-host";
    ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
    isIonContent = (el) => el.tagName === ION_CONTENT_TAG_NAME;
    getScrollElement = (el) => __async(null, null, function* () {
      if (isIonContent(el)) {
        yield new Promise((resolve) => componentOnReady(el, resolve));
        return el.getScrollElement();
      }
      return el;
    });
    findIonContent = (el) => {
      const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
      if (customContentHost) {
        return customContentHost;
      }
      return el.querySelector(ION_CONTENT_SELECTOR);
    };
    findClosestIonContent = (el) => {
      return el.closest(ION_CONTENT_SELECTOR);
    };
    scrollToTop = (el, durationMs) => {
      if (isIonContent(el)) {
        const content = el;
        return content.scrollToTop(durationMs);
      }
      return Promise.resolve(el.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      }));
    };
    scrollByPoint = (el, x, y, durationMs) => {
      if (isIonContent(el)) {
        const content = el;
        return content.scrollByPoint(x, y, durationMs);
      }
      return Promise.resolve(el.scrollBy({
        top: y,
        left: x,
        behavior: durationMs > 0 ? "smooth" : "auto"
      }));
    };
    printIonContentErrorMsg = (el) => {
      return printRequiredElementError(el, ION_CONTENT_ELEMENT_SELECTOR);
    };
    disableContentScrollY = (contentEl) => {
      if (isIonContent(contentEl)) {
        const ionContent = contentEl;
        const initialScrollY = ionContent.scrollY;
        ionContent.scrollY = false;
        return initialScrollY;
      } else {
        contentEl.style.setProperty("overflow", "hidden");
        return true;
      }
    };
    resetContentScrollY = (contentEl, initialScrollY) => {
      if (isIonContent(contentEl)) {
        contentEl.scrollY = initialScrollY;
      } else {
        contentEl.style.removeProperty("overflow");
      }
    };
  }
});

export {
  ION_CONTENT_ELEMENT_SELECTOR,
  ION_CONTENT_CLASS_SELECTOR,
  isIonContent,
  getScrollElement,
  findIonContent,
  findClosestIonContent,
  scrollToTop,
  scrollByPoint,
  printIonContentErrorMsg,
  disableContentScrollY,
  resetContentScrollY,
  init_index_Bs3kT4bc
};
/*! Bundled license information:

@ionic/core/dist/esm/index-Bs3kT4bc.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-QKY2TJ7V.js.map
