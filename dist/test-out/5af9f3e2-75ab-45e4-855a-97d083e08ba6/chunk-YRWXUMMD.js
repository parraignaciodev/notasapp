import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/components/index4.js
var Config, config, LogLevel, printIonWarning, printIonError, printRequiredElementError;
var init_index4 = __esm({
  "node_modules/@ionic/core/components/index4.js"() {
    "use strict";
    Config = class {
      constructor() {
        this.m = /* @__PURE__ */ new Map();
      }
      reset(configObj) {
        this.m = new Map(Object.entries(configObj));
      }
      get(key, fallback) {
        const value = this.m.get(key);
        return value !== void 0 ? value : fallback;
      }
      getBoolean(key, fallback = false) {
        const val = this.m.get(key);
        if (val === void 0) {
          return fallback;
        }
        if (typeof val === "string") {
          return val === "true";
        }
        return !!val;
      }
      getNumber(key, fallback) {
        const val = parseFloat(this.m.get(key));
        return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
      }
      set(key, value) {
        this.m.set(key, value);
      }
    };
    config = /* @__PURE__ */ new Config();
    (function(LogLevel2) {
      LogLevel2["OFF"] = "OFF";
      LogLevel2["ERROR"] = "ERROR";
      LogLevel2["WARN"] = "WARN";
    })(LogLevel || (LogLevel = {}));
    printIonWarning = (message, ...params) => {
      const logLevel = config.get("logLevel", LogLevel.WARN);
      if ([LogLevel.WARN].includes(logLevel)) {
        return console.warn(`[Ionic Warning]: ${message}`, ...params);
      }
    };
    printIonError = (message, ...params) => {
      const logLevel = config.get("logLevel", LogLevel.ERROR);
      if ([LogLevel.ERROR, LogLevel.WARN].includes(logLevel)) {
        return console.error(`[Ionic Error]: ${message}`, ...params);
      }
    };
    printRequiredElementError = (el, ...targetSelectors) => {
      return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
    };
  }
});

export {
  config,
  printIonWarning,
  printIonError,
  printRequiredElementError,
  init_index4
};
/*! Bundled license information:

@ionic/core/components/index4.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-YRWXUMMD.js.map
