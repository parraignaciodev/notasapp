import {
  init_dir_C53feagD,
  isRTL
} from "./chunk-HNB3ICIF.js";
import {
  createGesture,
  init_index_CfgBF1SE
} from "./chunk-6HJKRNGZ.js";
import {
  init_gesture_controller_BTEOs1at
} from "./chunk-JWAZIQ4S.js";
import {
  clamp,
  init_helpers_DEn3pfjm
} from "./chunk-CCLA7PPN.js";
import {
  init_index_C8IsBmNU
} from "./chunk-O3V776ZK.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/swipe-back-BKw2CAHc.js
var createSwipeBackGesture;
var init_swipe_back_BKw2CAHc = __esm({
  "node_modules/@ionic/core/dist/esm/swipe-back-BKw2CAHc.js"() {
    init_helpers_DEn3pfjm();
    init_dir_C53feagD();
    init_index_CfgBF1SE();
    init_index_C8IsBmNU();
    init_gesture_controller_BTEOs1at();
    createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
      const win = el.ownerDocument.defaultView;
      let rtl = isRTL(el);
      const isAtEdge = (detail) => {
        const threshold = 50;
        const { startX } = detail;
        if (rtl) {
          return startX >= win.innerWidth - threshold;
        }
        return startX <= threshold;
      };
      const getDeltaX = (detail) => {
        return rtl ? -detail.deltaX : detail.deltaX;
      };
      const getVelocityX = (detail) => {
        return rtl ? -detail.velocityX : detail.velocityX;
      };
      const canStart = (detail) => {
        rtl = isRTL(el);
        return isAtEdge(detail) && canStartHandler();
      };
      const onMove = (detail) => {
        const delta = getDeltaX(detail);
        const stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
      };
      const onEnd = (detail) => {
        const delta = getDeltaX(detail);
        const width = win.innerWidth;
        const stepValue = delta / width;
        const velocity = getVelocityX(detail);
        const z = width / 2;
        const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
          const dur = missingDistance / Math.abs(velocity);
          realDur = Math.min(dur, 540);
        }
        onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
      };
      return createGesture({
        el,
        gestureName: "goback-swipe",
        /**
         * Swipe to go back should have priority over other horizontal swipe
         * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
         */
        gesturePriority: 101,
        threshold: 10,
        canStart,
        onStart: onStartHandler,
        onMove,
        onEnd
      });
    };
  }
});
init_swipe_back_BKw2CAHc();
export {
  createSwipeBackGesture
};
/*! Bundled license information:

@ionic/core/dist/esm/swipe-back-BKw2CAHc.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-ZVP3KJ5R.js.map
