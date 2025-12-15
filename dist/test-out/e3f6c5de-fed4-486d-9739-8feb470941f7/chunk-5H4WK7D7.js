import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js
var watchForOptions, getSelectedOption, findCheckedOption;
var init_watch_options_Dtdm8lKC = __esm({
  "node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js"() {
    "use strict";
    watchForOptions = (containerEl, tagName, onChange) => {
      if (typeof MutationObserver === "undefined") {
        return;
      }
      const mutation = new MutationObserver((mutationList) => {
        onChange(getSelectedOption(mutationList, tagName));
      });
      mutation.observe(containerEl, {
        childList: true,
        subtree: true
      });
      return mutation;
    };
    getSelectedOption = (mutationList, tagName) => {
      let newOption;
      mutationList.forEach((mut) => {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
      });
      return newOption;
    };
    findCheckedOption = (node, tagName) => {
      if (node.nodeType !== 1) {
        return void 0;
      }
      const el = node;
      const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
      return options.find((o) => o.value === el.value);
    };
  }
});

export {
  watchForOptions,
  init_watch_options_Dtdm8lKC
};
/*! Bundled license information:

@ionic/core/dist/esm/watch-options-Dtdm8lKC.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-5H4WK7D7.js.map
