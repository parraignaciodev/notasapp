import {
  Keyboard,
  init_keyboard_CUw4ekVy
} from "./chunk-FXETNY4V.js";
import {
  init_capacitor_CFERIeaU
} from "./chunk-5FEZ6LNJ.js";
import {
  init_index_ZjP4CjeZ
} from "./chunk-5Z73BTII.js";
import {
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/keyboard-ywgs5efA.js
var KEYBOARD_DID_OPEN, KEYBOARD_DID_CLOSE, KEYBOARD_THRESHOLD, previousVisualViewport, currentVisualViewport, keyboardOpen, resetKeyboardAssist, startKeyboardAssist, startNativeListeners, setKeyboardOpen, setKeyboardClose, keyboardDidOpen, keyboardDidResize, keyboardDidClose, fireKeyboardOpenEvent, fireKeyboardCloseEvent, trackViewportChanges, copyVisualViewport;
var init_keyboard_ywgs5efA = __esm({
  "node_modules/@ionic/core/dist/esm/keyboard-ywgs5efA.js"() {
    init_keyboard_CUw4ekVy();
    init_capacitor_CFERIeaU();
    init_index_ZjP4CjeZ();
    KEYBOARD_DID_OPEN = "ionKeyboardDidShow";
    KEYBOARD_DID_CLOSE = "ionKeyboardDidHide";
    KEYBOARD_THRESHOLD = 150;
    previousVisualViewport = {};
    currentVisualViewport = {};
    keyboardOpen = false;
    resetKeyboardAssist = () => {
      previousVisualViewport = {};
      currentVisualViewport = {};
      keyboardOpen = false;
    };
    startKeyboardAssist = (win) => {
      const nativeEngine = Keyboard.getEngine();
      if (nativeEngine) {
        startNativeListeners(win);
      } else {
        if (!win.visualViewport) {
          return;
        }
        currentVisualViewport = copyVisualViewport(win.visualViewport);
        win.visualViewport.onresize = () => {
          trackViewportChanges(win);
          if (keyboardDidOpen() || keyboardDidResize(win)) {
            setKeyboardOpen(win);
          } else if (keyboardDidClose(win)) {
            setKeyboardClose(win);
          }
        };
      }
    };
    startNativeListeners = (win) => {
      win.addEventListener("keyboardDidShow", (ev) => setKeyboardOpen(win, ev));
      win.addEventListener("keyboardDidHide", () => setKeyboardClose(win));
    };
    setKeyboardOpen = (win, ev) => {
      fireKeyboardOpenEvent(win, ev);
      keyboardOpen = true;
    };
    setKeyboardClose = (win) => {
      fireKeyboardCloseEvent(win);
      keyboardOpen = false;
    };
    keyboardDidOpen = () => {
      const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
      return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
    };
    keyboardDidResize = (win) => {
      return keyboardOpen && !keyboardDidClose(win);
    };
    keyboardDidClose = (win) => {
      return keyboardOpen && currentVisualViewport.height === win.innerHeight;
    };
    fireKeyboardOpenEvent = (win, nativeEv) => {
      const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
      const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
        detail: { keyboardHeight }
      });
      win.dispatchEvent(ev);
    };
    fireKeyboardCloseEvent = (win) => {
      const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
      win.dispatchEvent(ev);
    };
    trackViewportChanges = (win) => {
      previousVisualViewport = Object.assign({}, currentVisualViewport);
      currentVisualViewport = copyVisualViewport(win.visualViewport);
    };
    copyVisualViewport = (visualViewport) => {
      return {
        width: Math.round(visualViewport.width),
        height: Math.round(visualViewport.height),
        offsetTop: visualViewport.offsetTop,
        offsetLeft: visualViewport.offsetLeft,
        pageTop: visualViewport.pageTop,
        pageLeft: visualViewport.pageLeft,
        scale: visualViewport.scale
      };
    };
  }
});

export {
  KEYBOARD_DID_OPEN,
  KEYBOARD_DID_CLOSE,
  resetKeyboardAssist,
  startKeyboardAssist,
  setKeyboardOpen,
  setKeyboardClose,
  keyboardDidOpen,
  keyboardDidResize,
  keyboardDidClose,
  trackViewportChanges,
  copyVisualViewport,
  init_keyboard_ywgs5efA
};
/*! Bundled license information:

@ionic/core/dist/esm/keyboard-ywgs5efA.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-RL6KINOP.js.map
