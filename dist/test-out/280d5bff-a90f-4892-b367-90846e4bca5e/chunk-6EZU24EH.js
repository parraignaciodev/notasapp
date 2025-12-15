import {
  init_index_C8IsBmNU,
  printIonError
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/config-mCdtaoPe.js
var sanitizeDOMString, sanitizeElement, getElementChildren, isSanitizerEnabled, allowedAttributes, blockedTags, IonicSafeString, setupConfig, ENABLE_HTML_CONTENT_DEFAULT;
var init_config_mCdtaoPe = __esm({
  "node_modules/@ionic/core/dist/esm/config-mCdtaoPe.js"() {
    "use strict";
    init_index_C8IsBmNU();
    sanitizeDOMString = (untrustedString) => {
      try {
        if (untrustedString instanceof IonicSafeString) {
          return untrustedString.value;
        }
        if (!isSanitizerEnabled() || typeof untrustedString !== "string" || untrustedString === "") {
          return untrustedString;
        }
        if (untrustedString.includes("onload=")) {
          return "";
        }
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement("div");
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        blockedTags.forEach((blockedTag) => {
          const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
          for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            const element = getElementsToRemove[elementIndex];
            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            const childElements = getElementChildren(element);
            for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        const dfChildren = getElementChildren(documentFragment);
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        }
        const fragmentDiv = document.createElement("div");
        fragmentDiv.appendChild(documentFragment);
        const getInnerDiv = fragmentDiv.querySelector("div");
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        printIonError("sanitizeDOMString", err);
        return "";
      }
    };
    sanitizeElement = (element) => {
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }
      if (typeof NamedNodeMap !== "undefined" && !(element.attributes instanceof NamedNodeMap)) {
        element.remove();
        return;
      }
      for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        }
        const attributeValue = attribute.value;
        const propertyValue = element[attributeName];
        if (attributeValue != null && attributeValue.toLowerCase().includes("javascript:") || propertyValue != null && propertyValue.toLowerCase().includes("javascript:")) {
          element.removeAttribute(attributeName);
        }
      }
      const childElements = getElementChildren(element);
      for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
      }
    };
    getElementChildren = (el) => {
      return el.children != null ? el.children : el.childNodes;
    };
    isSanitizerEnabled = () => {
      var _a;
      const win = window;
      const config = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
      if (config) {
        if (config.get) {
          return config.get("sanitizerEnabled", true);
        } else {
          return config.sanitizerEnabled === true || config.sanitizerEnabled === void 0;
        }
      }
      return true;
    };
    allowedAttributes = ["class", "id", "href", "src", "name", "slot"];
    blockedTags = ["script", "style", "iframe", "meta", "link", "object", "embed"];
    IonicSafeString = class {
      constructor(value) {
        this.value = value;
      }
    };
    setupConfig = (config) => {
      const win = window;
      const Ionic = win.Ionic;
      if (Ionic && Ionic.config && Ionic.config.constructor.name !== "Object") {
        return;
      }
      win.Ionic = win.Ionic || {};
      win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
      return win.Ionic.config;
    };
    ENABLE_HTML_CONTENT_DEFAULT = false;
  }
});

export {
  sanitizeDOMString,
  setupConfig,
  ENABLE_HTML_CONTENT_DEFAULT,
  init_config_mCdtaoPe
};
/*! Bundled license information:

@ionic/core/dist/esm/config-mCdtaoPe.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-6EZU24EH.js.map
