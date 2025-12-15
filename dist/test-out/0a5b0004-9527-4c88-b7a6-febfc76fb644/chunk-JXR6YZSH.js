import {
  CoreDelegate,
  init_framework_delegate_BYawdMXj
} from "./chunk-K5LSGGKI.js";
import {
  getIonMode,
  init_ionic_global_CDrldh_5
} from "./chunk-34X6K5NF.js";
import {
  BACKDROP_NO_SCROLL,
  init_gesture_controller_BTEOs1at
} from "./chunk-JWAZIQ4S.js";
import {
  OVERLAY_BACK_BUTTON_PRIORITY,
  init_hardware_back_button_CPLxO_Ev,
  shouldUseCloseWatcher
} from "./chunk-762M2KFK.js";
import {
  addEventListener,
  componentOnReady,
  focusVisibleElement,
  getElementRoot,
  init_helpers_DEn3pfjm,
  removeEventListener
} from "./chunk-CCLA7PPN.js";
import {
  doc,
  init_index_ZjP4CjeZ
} from "./chunk-5Z73BTII.js";
import {
  config,
  init_index_C8IsBmNU,
  printIonError,
  printIonWarning
} from "./chunk-O3V776ZK.js";
import {
  __async,
  __esm
} from "./chunk-WLDIRXGG.js";

// node_modules/@ionic/core/dist/esm/overlays-BymNv-BL.js
var focusableQueryString, focusFirstDescendant, focusLastDescendant, focusElementInContext, lastOverlayIndex, lastId, activeAnimations, createController, alertController, actionSheetController, loadingController, modalController, pickerController, popoverController, toastController, prepareOverlay, setOverlayId, createOverlay, isOverlayHidden, focusElementInOverlay, trapKeyboardFocus, connectListeners, dismissOverlay, getOverlays, getPresentedOverlays, getPresentedOverlay, setRootAriaHidden, present, restoreElementFocus, dismiss, getAppRoot, overlayAnimation, eventMethod, onceEvent, isCancel, defaultGate, safeCall, BACKDROP, GESTURE, OVERLAY_GESTURE_PRIORITY, createDelegateController, createTriggerController, FOCUS_TRAP_DISABLE_CLASS;
var init_overlays_BymNv_BL = __esm({
  "node_modules/@ionic/core/dist/esm/overlays-BymNv-BL.js"() {
    "use strict";
    init_index_ZjP4CjeZ();
    init_helpers_DEn3pfjm();
    init_hardware_back_button_CPLxO_Ev();
    init_index_C8IsBmNU();
    init_ionic_global_CDrldh_5();
    init_framework_delegate_BYawdMXj();
    init_gesture_controller_BTEOs1at();
    focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
    focusFirstDescendant = (ref, fallbackElement) => {
      const firstInput = ref.querySelector(focusableQueryString);
      focusElementInContext(firstInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
    };
    focusLastDescendant = (ref, fallbackElement) => {
      const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
      const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
      focusElementInContext(lastInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
    };
    focusElementInContext = (hostToFocus, fallbackElement) => {
      let elementToFocus = hostToFocus;
      const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
      if (shadowRoot) {
        elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
      }
      if (elementToFocus) {
        const radioGroup = elementToFocus.closest("ion-radio-group");
        if (radioGroup) {
          radioGroup.setFocus();
        } else {
          focusVisibleElement(elementToFocus);
        }
      } else {
        fallbackElement.focus();
      }
    };
    lastOverlayIndex = 0;
    lastId = 0;
    activeAnimations = /* @__PURE__ */ new WeakMap();
    createController = (tagName) => {
      return {
        create(options) {
          return createOverlay(tagName, options);
        },
        dismiss(data, role, id) {
          return dismissOverlay(document, data, role, tagName, id);
        },
        getTop() {
          return __async(this, null, function* () {
            return getPresentedOverlay(document, tagName);
          });
        }
      };
    };
    alertController = /* @__PURE__ */ createController("ion-alert");
    actionSheetController = /* @__PURE__ */ createController("ion-action-sheet");
    loadingController = /* @__PURE__ */ createController("ion-loading");
    modalController = /* @__PURE__ */ createController("ion-modal");
    pickerController = /* @__PURE__ */ createController("ion-picker-legacy");
    popoverController = /* @__PURE__ */ createController("ion-popover");
    toastController = /* @__PURE__ */ createController("ion-toast");
    prepareOverlay = (el) => {
      if (typeof document !== "undefined") {
        connectListeners(document);
      }
      const overlayIndex = lastOverlayIndex++;
      el.overlayIndex = overlayIndex;
    };
    setOverlayId = (el) => {
      if (!el.hasAttribute("id")) {
        el.id = `ion-overlay-${++lastId}`;
      }
      return el.id;
    };
    createOverlay = (tagName, opts) => {
      if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
        return window.customElements.whenDefined(tagName).then(() => {
          const element = document.createElement(tagName);
          element.classList.add("overlay-hidden");
          Object.assign(element, Object.assign(Object.assign({}, opts), { hasController: true }));
          getAppRoot(document).appendChild(element);
          return new Promise((resolve) => componentOnReady(element, resolve));
        });
      }
      return Promise.resolve();
    };
    isOverlayHidden = (overlay) => overlay.classList.contains("overlay-hidden");
    focusElementInOverlay = (hostToFocus, overlay) => {
      let elementToFocus = hostToFocus;
      const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
      if (shadowRoot) {
        elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
      }
      if (elementToFocus) {
        focusVisibleElement(elementToFocus);
      } else {
        overlay.focus();
      }
    };
    trapKeyboardFocus = (ev, doc2) => {
      const lastOverlay = getPresentedOverlay(doc2, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover");
      const target = ev.target;
      if (!lastOverlay || !target) {
        return;
      }
      if (lastOverlay.classList.contains(FOCUS_TRAP_DISABLE_CLASS)) {
        return;
      }
      const trapScopedFocus = () => {
        if (lastOverlay === target) {
          lastOverlay.lastFocus = void 0;
        } else if (target.tagName === "ION-TOAST") {
          focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
        } else {
          const overlayRoot = getElementRoot(lastOverlay);
          if (!overlayRoot.contains(target)) {
            return;
          }
          const overlayWrapper = overlayRoot.querySelector(".ion-overlay-wrapper");
          if (!overlayWrapper) {
            return;
          }
          if (overlayWrapper.contains(target) || target === overlayRoot.querySelector("ion-backdrop")) {
            lastOverlay.lastFocus = target;
          } else {
            const lastFocus = lastOverlay.lastFocus;
            focusFirstDescendant(overlayWrapper, lastOverlay);
            if (lastFocus === doc2.activeElement) {
              focusLastDescendant(overlayWrapper, lastOverlay);
            }
            lastOverlay.lastFocus = doc2.activeElement;
          }
        }
      };
      const trapShadowFocus = () => {
        if (lastOverlay.contains(target)) {
          lastOverlay.lastFocus = target;
        } else if (target.tagName === "ION-TOAST") {
          focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
        } else {
          const lastFocus = lastOverlay.lastFocus;
          focusFirstDescendant(lastOverlay);
          if (lastFocus === doc2.activeElement) {
            focusLastDescendant(lastOverlay);
          }
          lastOverlay.lastFocus = doc2.activeElement;
        }
      };
      if (lastOverlay.shadowRoot) {
        trapShadowFocus();
      } else {
        trapScopedFocus();
      }
    };
    connectListeners = (doc2) => {
      if (lastOverlayIndex === 0) {
        lastOverlayIndex = 1;
        doc2.addEventListener("focus", (ev) => {
          trapKeyboardFocus(ev, doc2);
        }, true);
        doc2.addEventListener("ionBackButton", (ev) => {
          const lastOverlay = getPresentedOverlay(doc2);
          if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
            ev.detail.register(OVERLAY_BACK_BUTTON_PRIORITY, () => {
              lastOverlay.dismiss(void 0, BACKDROP);
            });
          }
        });
        if (!shouldUseCloseWatcher()) {
          doc2.addEventListener("keydown", (ev) => {
            if (ev.key === "Escape") {
              const lastOverlay = getPresentedOverlay(doc2);
              if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
                lastOverlay.dismiss(void 0, BACKDROP);
              }
            }
          });
        }
      }
    };
    dismissOverlay = (doc2, data, role, overlayTag, id) => {
      const overlay = getPresentedOverlay(doc2, overlayTag, id);
      if (!overlay) {
        return Promise.reject("overlay does not exist");
      }
      return overlay.dismiss(data, role);
    };
    getOverlays = (doc2, selector) => {
      if (selector === void 0) {
        selector = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast";
      }
      return Array.from(doc2.querySelectorAll(selector)).filter((c) => c.overlayIndex > 0);
    };
    getPresentedOverlays = (doc2, overlayTag) => {
      return getOverlays(doc2, overlayTag).filter((o) => !isOverlayHidden(o));
    };
    getPresentedOverlay = (doc2, overlayTag, id) => {
      const overlays = getPresentedOverlays(doc2, overlayTag);
      return id === void 0 ? overlays[overlays.length - 1] : overlays.find((o) => o.id === id);
    };
    setRootAriaHidden = (hidden = false) => {
      const root = getAppRoot(document);
      const viewContainer = root.querySelector("ion-router-outlet, #ion-view-container-root");
      if (!viewContainer) {
        return;
      }
      if (hidden) {
        viewContainer.setAttribute("aria-hidden", "true");
      } else {
        viewContainer.removeAttribute("aria-hidden");
      }
    };
    present = (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => __async(null, null, function* () {
      var _a, _b;
      if (overlay.presented) {
        return;
      }
      if (overlay.el.tagName !== "ION-TOAST") {
        restoreElementFocus(overlay.el);
      }
      const overlayEl = overlay.el;
      const shouldTrapFocus = overlayEl.tagName !== "ION-TOAST" && overlayEl.focusTrap !== false;
      const shouldLockRoot = shouldTrapFocus && overlayEl.showBackdrop !== false;
      overlay.presented = true;
      overlay.willPresent.emit();
      if (shouldLockRoot) {
        const root = getAppRoot(document);
        const viewContainer = root.querySelector("ion-router-outlet, #ion-view-container-root");
        const overlayInsideViewContainer = viewContainer ? viewContainer.contains(overlayEl) : false;
        if (!overlayInsideViewContainer) {
          setRootAriaHidden(true);
        }
        document.body.classList.add(BACKDROP_NO_SCROLL);
      }
      (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
      const mode = getIonMode(overlay);
      const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : config.get(name, mode === "ios" ? iosEnterAnimation : mdEnterAnimation);
      const completed = yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
      if (completed) {
        overlay.didPresent.emit();
        (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
      }
      if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
        overlay.el.focus();
      }
      overlay.el.removeAttribute("aria-hidden");
      overlay.el.removeAttribute("inert");
    });
    restoreElementFocus = (overlayEl) => __async(null, null, function* () {
      let previousElement = document.activeElement;
      if (!previousElement) {
        return;
      }
      previousElement.blur();
      const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
      if (shadowRoot) {
        previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
      }
      yield overlayEl.onDidDismiss();
      if (document.activeElement === null || document.activeElement === document.body) {
        previousElement.focus();
      }
    });
    dismiss = (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => __async(null, null, function* () {
      var _a, _b;
      if (!overlay.presented) {
        return false;
      }
      const presentedOverlays = doc !== void 0 ? getPresentedOverlays(doc) : [];
      const overlaysLockingRoot = presentedOverlays.filter((o) => {
        const el = o;
        return el.tagName !== "ION-TOAST" && el.focusTrap !== false && el.showBackdrop !== false;
      });
      const overlayEl = overlay.el;
      const locksRoot = overlayEl.tagName !== "ION-TOAST" && overlayEl.focusTrap !== false && overlayEl.showBackdrop !== false;
      const lastOverlayTrappingFocus = locksRoot && overlaysLockingRoot.length === 1 && overlaysLockingRoot[0].id === overlayEl.id;
      if (lastOverlayTrappingFocus) {
        setRootAriaHidden(false);
        document.body.classList.remove(BACKDROP_NO_SCROLL);
      }
      overlay.presented = false;
      try {
        overlay.el.style.setProperty("pointer-events", "none");
        overlay.willDismiss.emit({ data, role });
        (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({ data, role });
        const mode = getIonMode(overlay);
        const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : config.get(name, mode === "ios" ? iosLeaveAnimation : mdLeaveAnimation);
        if (role !== GESTURE) {
          yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
        }
        overlay.didDismiss.emit({ data, role });
        (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({ data, role });
        const animations = activeAnimations.get(overlay) || [];
        animations.forEach((ani) => ani.destroy());
        activeAnimations.delete(overlay);
        overlay.el.classList.add("overlay-hidden");
        overlay.el.style.removeProperty("pointer-events");
        if (overlay.el.lastFocus !== void 0) {
          overlay.el.lastFocus = void 0;
        }
      } catch (err) {
        printIonError(`[${overlay.el.tagName.toLowerCase()}] - `, err);
      }
      overlay.el.remove();
      return true;
    });
    getAppRoot = (doc2) => {
      return doc2.querySelector("ion-app") || doc2.body;
    };
    overlayAnimation = (overlay, animationBuilder, baseEl, opts) => __async(null, null, function* () {
      baseEl.classList.remove("overlay-hidden");
      const aniRoot = overlay.el;
      const animation = animationBuilder(aniRoot, opts);
      if (!overlay.animated || !config.getBoolean("animated", true)) {
        animation.duration(0);
      }
      if (overlay.keyboardClose) {
        animation.beforeAddWrite(() => {
          const activeElement = baseEl.ownerDocument.activeElement;
          if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches("input,ion-input, ion-textarea")) {
            activeElement.blur();
          }
        });
      }
      const activeAni = activeAnimations.get(overlay) || [];
      activeAnimations.set(overlay, [...activeAni, animation]);
      yield animation.play();
      return true;
    });
    eventMethod = (element, eventName) => {
      let resolve;
      const promise = new Promise((r) => resolve = r);
      onceEvent(element, eventName, (event) => {
        resolve(event.detail);
      });
      return promise;
    };
    onceEvent = (element, eventName, callback) => {
      const handler = (ev) => {
        removeEventListener(element, eventName, handler);
        callback(ev);
      };
      addEventListener(element, eventName, handler);
    };
    isCancel = (role) => {
      return role === "cancel" || role === BACKDROP;
    };
    defaultGate = (h) => h();
    safeCall = (handler, arg) => {
      if (typeof handler === "function") {
        const jmp = config.get("_zoneGate", defaultGate);
        return jmp(() => {
          try {
            return handler(arg);
          } catch (e) {
            throw e;
          }
        });
      }
      return void 0;
    };
    BACKDROP = "backdrop";
    GESTURE = "gesture";
    OVERLAY_GESTURE_PRIORITY = 39;
    createDelegateController = (ref) => {
      let inline = false;
      let workingDelegate;
      const coreDelegate = CoreDelegate();
      const getDelegate = (force = false) => {
        if (workingDelegate && !force) {
          return {
            delegate: workingDelegate,
            inline
          };
        }
        const { el, hasController, delegate } = ref;
        const parentEl = el.parentNode;
        inline = parentEl !== null && !hasController;
        workingDelegate = inline ? delegate || coreDelegate : delegate;
        return { inline, delegate: workingDelegate };
      };
      const attachViewToDom = (component) => __async(null, null, function* () {
        const { delegate } = getDelegate(true);
        if (delegate) {
          return yield delegate.attachViewToDom(ref.el, component);
        }
        const { hasController } = ref;
        if (hasController && component !== void 0) {
          throw new Error("framework delegate is missing");
        }
        return null;
      });
      const removeViewFromDom = () => {
        const { delegate } = getDelegate();
        if (delegate && ref.el !== void 0) {
          delegate.removeViewFromDom(ref.el.parentElement, ref.el);
        }
      };
      return {
        attachViewToDom,
        removeViewFromDom
      };
    };
    createTriggerController = () => {
      let destroyTriggerInteraction;
      const removeClickListener = () => {
        if (destroyTriggerInteraction) {
          destroyTriggerInteraction();
          destroyTriggerInteraction = void 0;
        }
      };
      const addClickListener = (el, trigger) => {
        removeClickListener();
        const triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
        if (!triggerEl) {
          printIonWarning(`[${el.tagName.toLowerCase()}] - A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
          return;
        }
        const configureTriggerInteraction = (targetEl, overlayEl) => {
          const openOverlay = () => {
            overlayEl.present();
          };
          targetEl.addEventListener("click", openOverlay);
          return () => {
            targetEl.removeEventListener("click", openOverlay);
          };
        };
        destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
      };
      return {
        addClickListener,
        removeClickListener
      };
    };
    FOCUS_TRAP_DISABLE_CLASS = "ion-disable-focus-trap";
  }
});

export {
  focusFirstDescendant,
  focusLastDescendant,
  alertController,
  actionSheetController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController,
  prepareOverlay,
  setOverlayId,
  getPresentedOverlay,
  present,
  dismiss,
  eventMethod,
  isCancel,
  safeCall,
  BACKDROP,
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createDelegateController,
  createTriggerController,
  FOCUS_TRAP_DISABLE_CLASS,
  init_overlays_BymNv_BL
};
/*! Bundled license information:

@ionic/core/dist/esm/overlays-BymNv-BL.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-JXR6YZSH.js.map
