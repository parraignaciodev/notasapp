import {
  WebPlugin,
  init_dist
} from "./chunk-EIMUG3PL.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@capacitor/geolocation/dist/esm/web.js
var GeolocationWeb, Geolocation;
var init_web = __esm({
  "node_modules/@capacitor/geolocation/dist/esm/web.js"() {
    init_dist();
    GeolocationWeb = class extends WebPlugin {
      getCurrentPosition(options) {
        return __async(this, null, function* () {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
              resolve(pos);
            }, (err) => {
              reject(err);
            }, Object.assign({ enableHighAccuracy: false, timeout: 1e4, maximumAge: 0 }, options));
          });
        });
      }
      watchPosition(options, callback) {
        return __async(this, null, function* () {
          const id = navigator.geolocation.watchPosition((pos) => {
            callback(pos);
          }, (err) => {
            callback(null, err);
          }, Object.assign({ enableHighAccuracy: false, timeout: 1e4, maximumAge: 0, minimumUpdateInterval: 5e3 }, options));
          return `${id}`;
        });
      }
      clearWatch(options) {
        return __async(this, null, function* () {
          navigator.geolocation.clearWatch(parseInt(options.id, 10));
        });
      }
      checkPermissions() {
        return __async(this, null, function* () {
          if (typeof navigator === "undefined" || !navigator.permissions) {
            throw this.unavailable("Permissions API not available in this browser");
          }
          const permission = yield navigator.permissions.query({
            name: "geolocation"
          });
          return { location: permission.state, coarseLocation: permission.state };
        });
      }
      requestPermissions() {
        return __async(this, null, function* () {
          throw this.unimplemented("Not implemented on web.");
        });
      }
    };
    Geolocation = new GeolocationWeb();
  }
});
init_web();
export {
  Geolocation,
  GeolocationWeb
};
//# sourceMappingURL=chunk-ORF3W6G7.js.map
