import {
  MENU_BACK_BUTTON_PRIORITY,
  OVERLAY_BACK_BUTTON_PRIORITY,
  init_hardware_back_button,
  shouldUseCloseWatcher
} from "./chunk-6YBUCQSU.js";
import {
  BACKDROP_NO_SCROLL,
  init_gesture_controller,
  init_index3
} from "./chunk-F6ACTOZO.js";
import {
  LIFECYCLE_DID_ENTER,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  createAnimation,
  init_animation,
  init_index2
} from "./chunk-VRZQFXGC.js";
import {
  getMode,
  init_client
} from "./chunk-7FDHUQWW.js";
import {
  doc,
  init_index9
} from "./chunk-HDGMTXV5.js";
import {
  addEventListener,
  componentOnReady,
  focusVisibleElement,
  getElementRoot,
  init_helpers,
  removeEventListener
} from "./chunk-JFMPIF7U.js";
import {
  config,
  init_index4,
  printIonError,
  printIonWarning
} from "./chunk-YRWXUMMD.js";
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationStart,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  UrlSerializer,
  init_router
} from "./chunk-XEOTF763.js";
import {
  Location,
  LocationStrategy,
  getDOM,
  init_common
} from "./chunk-CCYTJPIP.js";
import {
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectorRef,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  __decorate,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  computed,
  core_exports,
  createComponent,
  distinctUntilChanged,
  filter,
  forkJoin,
  forwardRef,
  from,
  fromEvent,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  isPromise,
  isSubscribable,
  map,
  of,
  reflectComponentType,
  signal,
  switchMap,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-GKFQG4U6.js";
import {
  __async,
  __esm,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WLDIRXGG.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? { "min": { "min": min, "actual": control.value } } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? { "max": { "max": max, "actual": control.value } } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? { "required": true } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : { "required": true };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : { "email": true };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? { "minlength": { "requiredLength": minLength, "actualLength": length } } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return { "maxlength": { "requiredLength": maxLength, "actualLength": length } };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern)
    return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^")
      regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$")
      regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : { "pattern": { "requiredPattern": regexStr, "actualValue": value } };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : ((c) => validator.validate(c));
  });
}
function compose(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators)
    return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0)
    return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null)
    return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators)
    return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control)
      _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor)
      _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange)
      validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change")
      updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange)
      updateControl(control, dir);
    if (control.updateOn !== "submit")
      control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty)
    control.markAsDirty();
  control.setValue(control._pendingValue, { emitModelToViewChange: false });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent)
      dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1)
    return `path: '${path.join(" -> ")}'`;
  if (path?.[0])
    return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model"))
    return false;
  const change = changes["model"];
  if (change.isFirstChange())
    return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors)
    return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode))
    _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode))
        _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor)
    return customAccessor;
  if (builtinAccessor)
    return builtinAccessor;
  if (defaultAccessor)
    return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never")
    return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1)
    list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
function _buildValueString$1(id, value) {
  if (id == null)
    return `${value}`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
function _buildValueString(id, value) {
  if (id == null)
    return `${value}`;
  if (typeof value === "string")
    value = `'${value}'`;
  if (value && typeof value === "object")
    value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var BaseControlValueAccessor, BuiltInControlValueAccessor, NG_VALUE_ACCESSOR, CHECKBOX_VALUE_ACCESSOR, CheckboxControlValueAccessor, DEFAULT_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, EMAIL_REGEXP, Validators, AbstractControlDirective, ControlContainer, NgControl, AbstractControlStatus, ngControlStatusHost, ngGroupStatusHost, NgControlStatus, NgControlStatusGroup, formControlNameExample, formGroupNameExample, formArrayNameExample, ngModelGroupExample, ngModelWithFormGroupExample, disabledAttrWarning, asyncValidatorsDroppedWithOptsWarning, VALID, INVALID, PENDING, DISABLED, ControlEvent, ValueChangeEvent, PristineChangeEvent, TouchedChangeEvent, StatusChangeEvent, FormSubmittedEvent, FormResetEvent, AbstractControl, FormGroup, FormRecord, CALL_SET_DISABLED_STATE, setDisabledStateDefault, formDirectiveProvider$1, resolvedPromise$1, NgForm, FormControl, isFormControl, AbstractFormGroupDirective, modelGroupProvider, NgModelGroup, formControlBinding$1, resolvedPromise, NgModel, \u0275NgNoValidate, NUMBER_VALUE_ACCESSOR, NumberValueAccessor, RADIO_VALUE_ACCESSOR, RadioControlRegistry, RadioControlValueAccessor, RANGE_VALUE_ACCESSOR, RangeValueAccessor, NG_MODEL_WITH_FORM_CONTROL_WARNING, formControlBinding, FormControlDirective, formDirectiveProvider, FormGroupDirective, formGroupNameProvider, FormGroupName, formArrayNameProvider, FormArrayName, controlNameBinding, FormControlName, SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption, SELECT_MULTIPLE_VALUE_ACCESSOR, SelectMultipleControlValueAccessor, \u0275NgSelectMultipleOption, AbstractValidatorDirective, MAX_VALIDATOR, MaxValidator, MIN_VALIDATOR, MinValidator, REQUIRED_VALIDATOR, CHECKBOX_REQUIRED_VALIDATOR, RequiredValidator, CheckboxRequiredValidator, EMAIL_VALIDATOR, EmailValidator, MIN_LENGTH_VALIDATOR, MinLengthValidator, MAX_LENGTH_VALIDATOR, MaxLengthValidator, PATTERN_VALIDATOR, PatternValidator, SHARED_FORM_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES, \u0275InternalFormsSharedModule, FormArray, FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, VERSION, FormsModule, ReactiveFormsModule;
var init_forms = __esm({
  "node_modules/@angular/forms/fesm2022/forms.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    BaseControlValueAccessor = class _BaseControlValueAccessor {
      _renderer;
      _elementRef;
      /**
       * The registered callback function called when a change or input event occurs on the input
       * element.
       * @docs-private
       */
      onChange = (_) => {
      };
      /**
       * The registered callback function called when a blur event occurs on the input element.
       * @docs-private
       */
      onTouched = () => {
      };
      constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
      }
      /**
       * Helper method that sets a property on a target element using the current Renderer
       * implementation.
       * @docs-private
       */
      setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
      }
      /**
       * Registers a function called when the control is touched.
       * @docs-private
       */
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = fn;
      }
      /**
       * Sets the "disabled" property on the range input element.
       * @docs-private
       */
      setDisabledState(isDisabled) {
        this.setProperty("disabled", isDisabled);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _BaseControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _BaseControlValueAccessor, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: BaseControlValueAccessor, decorators: [{
      type: Directive
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }] });
    BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _BuiltInControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _BuiltInControlValueAccessor, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: BuiltInControlValueAccessor, decorators: [{
      type: Directive
    }] });
    NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
    CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessor),
      multi: true
    };
    CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "checked" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("checked", value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _CheckboxControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _CheckboxControlValueAccessor, isStandalone: false, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { listeners: { "change": "onChange($any($event.target).checked)", "blur": "onTouched()" } }, providers: [CHECKBOX_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: CheckboxControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
        host: { "(change)": "onChange($any($event.target).checked)", "(blur)": "onTouched()" },
        providers: [CHECKBOX_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    };
    COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
    DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
      _compositionMode;
      /** Whether the user is creating a composition string (IME events). */
      _composing = false;
      constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /** @internal */
      _handleInput(value) {
        if (!this._compositionMode || this._compositionMode && !this._composing) {
          this.onChange(value);
        }
      }
      /** @internal */
      _compositionStart() {
        this._composing = true;
      }
      /** @internal */
      _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _DefaultValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _DefaultValueAccessor, isStandalone: false, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { listeners: { "input": "_handleInput($any($event.target).value)", "blur": "onTouched()", "compositionstart": "_compositionStart()", "compositionend": "_compositionEnd($any($event.target).value)" } }, providers: [DEFAULT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: DefaultValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          "(input)": "_handleInput($any($event.target).value)",
          "(blur)": "onTouched()",
          "(compositionstart)": "_compositionStart()",
          "(compositionend)": "_compositionEnd($any($event.target).value)"
        },
        providers: [DEFAULT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }] }] });
    NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
    NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    Validators = class {
      /**
       * @description
       * Validator that requires the control's value to be greater than or equal to the provided number.
       *
       * @usageNotes
       *
       * ### Validate against a minimum of 3
       *
       * ```ts
       * const control = new FormControl(2, Validators.min(3));
       *
       * console.log(control.errors); // {min: {min: 3, actual: 2}}
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `min` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static min(min) {
        return minValidator(min);
      }
      /**
       * @description
       * Validator that requires the control's value to be less than or equal to the provided number.
       *
       * @usageNotes
       *
       * ### Validate against a maximum of 15
       *
       * ```ts
       * const control = new FormControl(16, Validators.max(15));
       *
       * console.log(control.errors); // {max: {max: 15, actual: 16}}
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `max` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static max(max) {
        return maxValidator(max);
      }
      /**
       * @description
       * Validator that requires the control have a non-empty value.
       *
       * @usageNotes
       *
       * ### Validate that the field is non-empty
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       *
       * console.log(control.errors); // {required: true}
       * ```
       *
       * @returns An error map with the `required` property
       * if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static required(control) {
        return requiredValidator(control);
      }
      /**
       * @description
       * Validator that requires the control's value be true. This validator is commonly
       * used for required checkboxes.
       *
       * @usageNotes
       *
       * ### Validate that the field value is true
       *
       * ```ts
       * const control = new FormControl('some value', Validators.requiredTrue);
       *
       * console.log(control.errors); // {required: true}
       * ```
       *
       * @returns An error map that contains the `required` property
       * set to `true` if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static requiredTrue(control) {
        return requiredTrueValidator(control);
      }
      /**
       * @description
       * Validator that requires the control's value pass an email validation test.
       *
       * Tests the value using a [regular
       * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
       * pattern suitable for common use cases. The pattern is based on the definition of a valid email
       * address in the [WHATWG HTML
       * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address).
       *
       * The differences from the WHATWG version include:
       * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
       * - Disallow `local-part` to be longer than 64 characters.
       * - Disallow the whole address to be longer than 254 characters.
       *
       * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
       * validate the value against a different pattern.
       *
       * @usageNotes
       *
       * ### Validate that the field matches a valid email pattern
       *
       * ```ts
       * const control = new FormControl('bad@', Validators.email);
       *
       * console.log(control.errors); // {email: true}
       * ```
       *
       * @returns An error map with the `email` property
       * if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static email(control) {
        return emailValidator(control);
      }
      /**
       * @description
       * Validator that requires the number of items in the control's value to be greater than or equal
       * to the provided minimum length. This validator is also provided by default if you use
       * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
       * only for types that have a numeric `length` or `size` property, such as strings, arrays or
       * sets. The `minLength` validator logic is also not invoked for values when their `length` or
       * `size` property is 0 (for example in case of an empty string or an empty array), to support
       * optional controls. You can use the standard `required` validator if empty values should not be
       * considered valid.
       *
       * @usageNotes
       *
       * ### Validate that the field has a minimum of 3 characters
       *
       * ```ts
       * const control = new FormControl('ng', Validators.minLength(3));
       *
       * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
       * ```
       *
       * ```html
       * <input minlength="5">
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `minlength` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static minLength(minLength) {
        return minLengthValidator(minLength);
      }
      /**
       * @description
       * Validator that requires the number of items in the control's value to be less than or equal
       * to the provided maximum length. This validator is also provided by default if you use
       * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
       * only for types that have a numeric `length` or `size` property, such as strings, arrays or
       * sets.
       *
       * @usageNotes
       *
       * ### Validate that the field has maximum of 5 characters
       *
       * ```ts
       * const control = new FormControl('Angular', Validators.maxLength(5));
       *
       * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
       * ```
       *
       * ```html
       * <input maxlength="5">
       * ```
       *
       * @returns A validator function that returns an error map with the
       * `maxlength` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static maxLength(maxLength) {
        return maxLengthValidator(maxLength);
      }
      /**
       * @description
       * Validator that requires the control's value to match a regex pattern. This validator is also
       * provided by default if you use the HTML5 `pattern` attribute.
       *
       * @usageNotes
       *
       * ### Validate that the field only contains letters or spaces
       *
       * ```ts
       * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
       *
       * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
       * ```
       *
       * ```html
       * <input pattern="[a-zA-Z ]*">
       * ```
       *
       * ### Pattern matching with the global or sticky flag
       *
       * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
       * can produce different results on the same input when validations are run consecutively. This is
       * due to how the behavior of `RegExp.prototype.test` is
       * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
       * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
       * Due to this behavior, it is recommended that when using
       * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
       * flag enabled.
       *
       * ```ts
       * // Not recommended (since the `g` flag is used)
       * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
       *
       * // Good
       * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
       * ```
       *
       * @param pattern A regular expression to be used as is to test the values, or a string.
       * If a string is passed, the `^` character is prepended and the `$` character is
       * appended to the provided string (if not already present), and the resulting regular
       * expression is used to test the values.
       *
       * @returns A validator function that returns an error map with the
       * `pattern` property if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static pattern(pattern) {
        return patternValidator(pattern);
      }
      /**
       * @description
       * Validator that performs no operation.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static nullValidator(control) {
        return nullValidator();
      }
      static compose(validators) {
        return compose(validators);
      }
      /**
       * @description
       * Compose multiple async validators into a single function that returns the union
       * of the individual error objects for the provided control.
       *
       * @returns A validator function that returns an error map with the
       * merged error objects of the async validators if the validation check fails, otherwise `null`.
       *
       * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
       *
       */
      static composeAsync(validators) {
        return composeAsync(validators);
      }
    };
    AbstractControlDirective = class {
      /**
       * @description
       * Reports the value of the control if it is present, otherwise null.
       */
      get value() {
        return this.control ? this.control.value : null;
      }
      /**
       * @description
       * Reports whether the control is valid. A control is considered valid if no
       * validation errors exist with the current value.
       * If the control is not present, null is returned.
       */
      get valid() {
        return this.control ? this.control.valid : null;
      }
      /**
       * @description
       * Reports whether the control is invalid, meaning that an error exists in the input value.
       * If the control is not present, null is returned.
       */
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      /**
       * @description
       * Reports whether a control is pending, meaning that async validation is occurring and
       * errors are not yet available for the input value. If the control is not present, null is
       * returned.
       */
      get pending() {
        return this.control ? this.control.pending : null;
      }
      /**
       * @description
       * Reports whether the control is disabled, meaning that the control is disabled
       * in the UI and is exempt from validation checks and excluded from aggregate
       * values of ancestor controls. If the control is not present, null is returned.
       */
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      /**
       * @description
       * Reports whether the control is enabled, meaning that the control is included in ancestor
       * calculations of validity or value. If the control is not present, null is returned.
       */
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      /**
       * @description
       * Reports the control's validation errors. If the control is not present, null is returned.
       */
      get errors() {
        return this.control ? this.control.errors : null;
      }
      /**
       * @description
       * Reports whether the control is pristine, meaning that the user has not yet changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      /**
       * @description
       * Reports whether the control is dirty, meaning that the user has changed
       * the value in the UI. If the control is not present, null is returned.
       */
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      /**
       * @description
       * Reports whether the control is touched, meaning that the user has triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get touched() {
        return this.control ? this.control.touched : null;
      }
      /**
       * @description
       * Reports the validation status of the control. Possible values include:
       * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
       * If the control is not present, null is returned.
       */
      get status() {
        return this.control ? this.control.status : null;
      }
      /**
       * @description
       * Reports whether the control is untouched, meaning that the user has not yet triggered
       * a `blur` event on it. If the control is not present, null is returned.
       */
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      /**
       * @description
       * Returns a multicasting observable that emits a validation status whenever it is
       * calculated for the control. If the control is not present, null is returned.
       */
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      /**
       * @description
       * Returns a multicasting observable of value changes for the control that emits every time the
       * value of the control changes in the UI or programmatically.
       * If the control is not present, null is returned.
       */
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return null;
      }
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       */
      _composedAsyncValidatorFn;
      /**
       * Set of synchronous validators as they were provided while calling `setValidators` function.
       * @internal
       */
      _rawValidators = [];
      /**
       * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
       * function.
       * @internal
       */
      _rawAsyncValidators = [];
      /**
       * Sets synchronous validators for this directive.
       * @internal
       */
      _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
      }
      /**
       * Sets asynchronous validators for this directive.
       * @internal
       */
      _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
      }
      /**
       * @description
       * Synchronous validator function composed of all the synchronous validators registered with this
       * directive.
       */
      get validator() {
        return this._composedValidatorFn || null;
      }
      /**
       * @description
       * Asynchronous validator function composed of all the asynchronous validators registered with
       * this directive.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      /*
       * The set of callbacks to be invoked when directive instance is being destroyed.
       */
      _onDestroyCallbacks = [];
      /**
       * Internal function to register callbacks that should be invoked
       * when directive instance is being destroyed.
       * @internal
       */
      _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
      }
      /**
       * Internal function to invoke all registered "on destroy" callbacks.
       * Note: calling this function also clears the list of callbacks.
       * @internal
       */
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((fn) => fn());
        this._onDestroyCallbacks = [];
      }
      /**
       * @description
       * Resets the control with the provided value if the control is present.
       */
      reset(value = void 0) {
        if (this.control)
          this.control.reset(value);
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
      }
    };
    ControlContainer = class extends AbstractControlDirective {
      /**
       * @description
       * The name for the control
       */
      name;
      /**
       * @description
       * The top-level form directive for the control.
       */
      get formDirective() {
        return null;
      }
      /**
       * @description
       * The path to this group.
       */
      get path() {
        return null;
      }
    };
    NgControl = class extends AbstractControlDirective {
      /**
       * @description
       * The parent form for the control.
       *
       * @internal
       */
      _parent = null;
      /**
       * @description
       * The name for the control
       */
      name = null;
      /**
       * @description
       * The value accessor for the control
       */
      valueAccessor = null;
    };
    AbstractControlStatus = class {
      _cd;
      constructor(cd) {
        this._cd = cd;
      }
      get isTouched() {
        this._cd?.control?._touched?.();
        return !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        this._cd?.control?._pristine?.();
        return !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        this._cd?.control?._status?.();
        return !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        this._cd?._submitted?.();
        return !!this._cd?.submitted;
      }
    };
    ngControlStatusHost = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending"
    };
    ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
      "[class.ng-submitted]": "isSubmitted"
    });
    NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgControlStatus, deps: [{ token: NgControl, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgControlStatus, isStandalone: false, selector: "[formControlName],[ngModel],[formControl]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgControlStatus, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName],[ngModel],[formControl]",
        host: ngControlStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: NgControl, decorators: [{
      type: Self
    }] }] });
    NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgControlStatusGroup, deps: [{ token: ControlContainer, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgControlStatusGroup, isStandalone: false, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending", "class.ng-submitted": "isSubmitted" } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgControlStatusGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
        host: ngGroupStatusHost,
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Self
    }] }] });
    formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
    formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
    formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
    ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
    ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
    disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
    asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
    VALID = "VALID";
    INVALID = "INVALID";
    PENDING = "PENDING";
    DISABLED = "DISABLED";
    ControlEvent = class {
    };
    ValueChangeEvent = class extends ControlEvent {
      value;
      source;
      constructor(value, source) {
        super();
        this.value = value;
        this.source = source;
      }
    };
    PristineChangeEvent = class extends ControlEvent {
      pristine;
      source;
      constructor(pristine, source) {
        super();
        this.pristine = pristine;
        this.source = source;
      }
    };
    TouchedChangeEvent = class extends ControlEvent {
      touched;
      source;
      constructor(touched, source) {
        super();
        this.touched = touched;
        this.source = source;
      }
    };
    StatusChangeEvent = class extends ControlEvent {
      status;
      source;
      constructor(status, source) {
        super();
        this.status = status;
        this.source = source;
      }
    };
    FormSubmittedEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    FormResetEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    AbstractControl = class {
      /** @internal */
      _pendingDirty = false;
      /**
       * Indicates that a control has its own pending asynchronous validation in progress.
       * It also stores if the control should emit events when the validation status changes.
       *
       * @internal
       */
      _hasOwnPendingAsyncValidator = null;
      /** @internal */
      _pendingTouched = false;
      /** @internal */
      _onCollectionChange = () => {
      };
      /** @internal */
      _updateOn;
      _parent = null;
      _asyncValidationSubscription;
      /**
       * Contains the result of merging synchronous validators into a single validator function
       * (combined using `Validators.compose`).
       *
       * @internal
       */
      _composedValidatorFn;
      /**
       * Contains the result of merging asynchronous validators into a single validator function
       * (combined using `Validators.composeAsync`).
       *
       * @internal
       */
      _composedAsyncValidatorFn;
      /**
       * Synchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setValidators` function
       *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
       *
       * @internal
       */
      _rawValidators;
      /**
       * Asynchronous validators as they were provided:
       *  - in `AbstractControl` constructor
       *  - as an argument while calling `setAsyncValidators` function
       *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
       * asyncValidatorFn`)
       *
       * @internal
       */
      _rawAsyncValidators;
      /**
       * The current value of the control.
       *
       * * For a `FormControl`, the current value.
       * * For an enabled `FormGroup`, the values of enabled controls as an object
       * with a key-value pair for each member of the group.
       * * For a disabled `FormGroup`, the values of all controls as an object
       * with a key-value pair for each member of the group.
       * * For a `FormArray`, the values of enabled controls as an array.
       *
       */
      value;
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validators The function or array of functions that is used to determine the validity of
       *     this control synchronously.
       * @param asyncValidators The function or array of functions that is used to determine validity of
       *     this control asynchronously.
       */
      constructor(validators, asyncValidators) {
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
      }
      /**
       * Returns the function that is used to determine the validity of this control synchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get validator() {
        return this._composedValidatorFn;
      }
      set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
      }
      /**
       * Returns the function that is used to determine the validity of this control asynchronously.
       * If multiple validators have been added, this will be a single composed function.
       * See `Validators.compose()` for additional information.
       */
      get asyncValidator() {
        return this._composedAsyncValidatorFn;
      }
      set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
      }
      /**
       * The parent control.
       */
      get parent() {
        return this._parent;
      }
      /**
       * The validation status of the control.
       *
       * @see {@link FormControlStatus}
       *
       * These status values are mutually exclusive, so a control cannot be
       * both valid AND invalid or invalid AND disabled.
       */
      get status() {
        return untracked(this.statusReactive);
      }
      set status(v) {
        untracked(() => this.statusReactive.set(v));
      }
      /** @internal */
      _status = computed(() => this.statusReactive(), ...ngDevMode ? [{ debugName: "_status" }] : []);
      statusReactive = signal(void 0, ...ngDevMode ? [{ debugName: "statusReactive" }] : []);
      /**
       * A control is `valid` when its `status` is `VALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control has passed all of its validation tests,
       * false otherwise.
       */
      get valid() {
        return this.status === VALID;
      }
      /**
       * A control is `invalid` when its `status` is `INVALID`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control has failed one or more of its validation checks,
       * false otherwise.
       */
      get invalid() {
        return this.status === INVALID;
      }
      /**
       * A control is `pending` when its `status` is `PENDING`.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if this control is in the process of conducting a validation check,
       * false otherwise.
       */
      get pending() {
        return this.status == PENDING;
      }
      /**
       * A control is `disabled` when its `status` is `DISABLED`.
       *
       * Disabled controls are exempt from validation checks and
       * are not included in the aggregate value of their ancestor
       * controls.
       *
       * @see {@link AbstractControl.status}
       *
       * @returns True if the control is disabled, false otherwise.
       */
      get disabled() {
        return this.status === DISABLED;
      }
      /**
       * A control is `enabled` as long as its `status` is not `DISABLED`.
       *
       * @returns True if the control has any status other than 'DISABLED',
       * false if the status is 'DISABLED'.
       *
       * @see {@link AbstractControl.status}
       *
       */
      get enabled() {
        return this.status !== DISABLED;
      }
      /**
       * An object containing any errors generated by failing validation,
       * or null if there are no errors.
       */
      errors;
      /**
       * A control is `pristine` if the user has not yet changed
       * the value in the UI.
       *
       * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get pristine() {
        return untracked(this.pristineReactive);
      }
      set pristine(v) {
        untracked(() => this.pristineReactive.set(v));
      }
      /** @internal */
      _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{ debugName: "_pristine" }] : []);
      pristineReactive = signal(true, ...ngDevMode ? [{ debugName: "pristineReactive" }] : []);
      /**
       * A control is `dirty` if the user has changed the value
       * in the UI.
       *
       * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
       * Programmatic changes to a control's value do not mark it dirty.
       */
      get dirty() {
        return !this.pristine;
      }
      /**
       * True if the control is marked as `touched`.
       *
       * A control is marked `touched` once the user has triggered
       * a `blur` event on it.
       */
      get touched() {
        return untracked(this.touchedReactive);
      }
      set touched(v) {
        untracked(() => this.touchedReactive.set(v));
      }
      /** @internal */
      _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{ debugName: "_touched" }] : []);
      touchedReactive = signal(false, ...ngDevMode ? [{ debugName: "touchedReactive" }] : []);
      /**
       * True if the control has not been marked as touched
       *
       * A control is `untouched` if the user has not yet triggered
       * a `blur` event on it.
       */
      get untouched() {
        return !this.touched;
      }
      /**
       * Exposed as observable, see below.
       *
       * @internal
       */
      _events = new Subject();
      /**
       * A multicasting observable that emits an event every time the state of the control changes.
       * It emits for value, status, pristine or touched changes.
       *
       * **Note**: On value change, the emit happens right after a value of this control is updated. The
       * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
       * later, so accessing a value of a parent control (using the `value` property) from the callback
       * of this event might result in getting a value that has not been updated yet. Subscribe to the
       * `events` of the parent control instead.
       * For other event types, the events are emitted after the parent control has been updated.
       *
       * @see [Unified control state change events](guide/forms/reactive-forms#unified-control-state-change-events)
       */
      events = this._events.asObservable();
      /**
       * A multicasting observable that emits an event every time the value of the control changes, in
       * the UI or programmatically. It also emits an event each time you call enable() or disable()
       * without passing along {emitEvent: false} as a function argument.
       *
       * **Note**: the emit happens right after a value of this control is updated. The value of a
       * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
       * accessing a value of a parent control (using the `value` property) from the callback of this
       * event might result in getting a value that has not been updated yet. Subscribe to the
       * `valueChanges` event of the parent control instead.
       */
      valueChanges;
      /**
       * A multicasting observable that emits an event every time the validation `status` of the control
       * recalculates.
       *
       * @see {@link FormControlStatus}
       * @see {@link AbstractControl.status}
       */
      statusChanges;
      /**
       * Reports the update strategy of the `AbstractControl` (meaning
       * the event on which the control updates itself).
       * Possible values: `'change'` | `'blur'` | `'submit'`
       * Default value: `'change'`
       */
      get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
      }
      /**
       * Sets the synchronous validators that are active on this control.  Calling
       * this overwrites any existing synchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addValidators()` method instead.
       */
      setValidators(validators) {
        this._assignValidators(validators);
      }
      /**
       * Sets the asynchronous validators that are active on this control. Calling this
       * overwrites any existing asynchronous validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * If you want to add a new validator without affecting existing ones, consider
       * using `addAsyncValidators()` method instead.
       */
      setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
      }
      /**
       * Add a synchronous validator or validators to this control, without affecting other validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect. If duplicate validator functions
       * are present in the `validators` array, only the first instance would be added to a form
       * control.
       *
       * @param validators The new validator function or functions to add to this control.
       */
      addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
      }
      /**
       * Add an asynchronous validator or validators to this control, without affecting other
       * validators.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * Adding a validator that already exists will have no effect.
       *
       * @param validators The new asynchronous validator function or functions to add to this control.
       */
      addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Remove a synchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found,
       * it is ignored.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<string | null>('', Validators.required);
       * ctrl.removeValidators(Validators.required);
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<string | null>('', minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       *
       * ctrl.removeValidators(minValidator);
       * ```
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The validator or validators to remove.
       */
      removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
      }
      /**
       * Remove an asynchronous validator from this control, without affecting other validators.
       * Validators are compared by function reference; you must pass a reference to the exact same
       * validator function as the one that was originally set. If a provided validator is not found, it
       * is ignored.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       * @param validators The asynchronous validator or validators to remove.
       */
      removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
      }
      /**
       * Check whether a synchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @usageNotes
       *
       * ### Reference to a ValidatorFn
       *
       * ```
       * // Reference to the RequiredValidator
       * const ctrl = new FormControl<number | null>(0, Validators.required);
       * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
       *
       * // Reference to anonymous function inside MinValidator
       * const minValidator = Validators.min(3);
       * const ctrl = new FormControl<number | null>(0, minValidator);
       * expect(ctrl.hasValidator(minValidator)).toEqual(true)
       * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
       * ```
       *
       * @param validator The validator to check for presence. Compared by function reference.
       * @returns Whether the provided validator was found on this control.
       */
      hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
      }
      /**
       * Check whether an asynchronous validator function is present on this control. The provided
       * validator must be a reference to the exact same function that was provided.
       *
       * @param validator The asynchronous validator to check for presence. Compared by function
       *     reference.
       * @returns Whether the provided asynchronous validator was found on this control.
       */
      hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
      }
      /**
       * Empties out the synchronous validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearValidators() {
        this.validator = null;
      }
      /**
       * Empties out the async validator list.
       *
       * When you add or remove a validator at run time, you must call
       * `updateValueAndValidity()` for the new validation to take effect.
       *
       */
      clearAsyncValidators() {
        this.asyncValidator = null;
      }
      markAsTouched(opts = {}) {
        const changed = this.touched === false;
        this.touched = true;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(true, sourceControl));
        }
      }
      /**
       * Marks the control and all its descendant controls as `dirty`.
       * @see {@link markAsDirty()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `PristineChangeEvent` with the `pristine` property being `false`.
       * When false, no events are emitted.
       */
      markAllAsDirty(opts = {}) {
        this.markAsDirty({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsDirty(opts));
      }
      /**
       * Marks the control and all its descendant controls as `touched`.
       * @see {@link markAsTouched()}
       *
       * @param opts Configuration options that determine how the control propagates changes
       * and emits events after marking is applied.
       * * `emitEvent`: When true or not supplied (the default), the `events`
       * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
       * When false, no events are emitted.
       */
      markAllAsTouched(opts = {}) {
        this.markAsTouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl: this });
        this._forEachChild((control) => control.markAllAsTouched(opts));
      }
      markAsUntouched(opts = {}) {
        const changed = this.touched === true;
        this.touched = false;
        this._pendingTouched = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsUntouched({ onlySelf: true, emitEvent: opts.emitEvent, sourceControl });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(false, sourceControl));
        }
      }
      markAsDirty(opts = {}) {
        const changed = this.pristine === true;
        this.pristine = false;
        const sourceControl = opts.sourceControl ?? this;
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(false, sourceControl));
        }
      }
      markAsPristine(opts = {}) {
        const changed = this.pristine === false;
        this.pristine = true;
        this._pendingDirty = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsPristine({ onlySelf: true, emitEvent: opts.emitEvent });
        });
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(true, sourceControl));
        }
      }
      markAsPending(opts = {}) {
        this.status = PENDING;
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      disable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
          control.disable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this._updateValue();
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
      }
      /**
       * Enables the control. This means the control is included in validation checks and
       * the aggregate value of its parent. Its status recalculates based on its value and
       * its validators.
       *
       * By default, if the control has children, all children are enabled.
       *
       * @see {@link AbstractControl.status}
       *
       * @param opts Configure options that control how the control propagates changes and
       * emits events when marked as untouched
       * * `onlySelf`: When true, mark only this control. When false or not supplied,
       * marks all direct ancestors. Default is false.
       * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
       * `valueChanges` and `events`
       * observables emit events with the latest status and value when the control is enabled.
       * When false, no events are emitted.
       */
      enable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
          control.enable(__spreadProps(__spreadValues({}, opts), { onlySelf: true }));
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), { skipPristineCheck }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
      }
      _updateAncestors(opts, sourceControl) {
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(opts);
          if (!opts.skipPristineCheck) {
            this._parent._updatePristine({}, sourceControl);
          }
          this._parent._updateTouched({}, sourceControl);
        }
      }
      /**
       * Sets the parent of the control
       *
       * @param parent The new parent.
       */
      setParent(parent) {
        this._parent = parent;
      }
      /**
       * The raw value of this control. For most control implementations, the raw value will include
       * disabled children.
       */
      getRawValue() {
        return this.value;
      }
      updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
          const shouldHaveEmitted = this._cancelExistingSubscription();
          this.errors = this._runValidator();
          this.status = this._calculateStatus();
          if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
          }
        }
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
          this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), { sourceControl }));
        }
      }
      /** @internal */
      _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
      }
      _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
      }
      _runValidator() {
        return this.validator ? this.validator(this) : null;
      }
      _runAsyncValidator(shouldHaveEmitted, emitEvent) {
        if (this.asyncValidator) {
          this.status = PENDING;
          this._hasOwnPendingAsyncValidator = {
            emitEvent: emitEvent !== false,
            shouldHaveEmitted: shouldHaveEmitted !== false
          };
          const obs = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = obs.subscribe((errors) => {
            this._hasOwnPendingAsyncValidator = null;
            this.setErrors(errors, { emitEvent, shouldHaveEmitted });
          });
        }
      }
      _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
          this._asyncValidationSubscription.unsubscribe();
          const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
          this._hasOwnPendingAsyncValidator = null;
          return shouldHaveEmitted;
        }
        return false;
      }
      setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
      }
      /**
       * Retrieves a child control given the control's name or path.
       *
       * @param path A dot-delimited string or array of string/number values that define the path to the
       * control. If a string is provided, passing it as a string literal will result in improved type
       * information. Likewise, if an array is provided, passing it `as const` will cause improved type
       * information to be available.
       *
       * @usageNotes
       * ### Retrieve a nested control
       *
       * For example, to get a `name` control nested within a `person` sub-group:
       *
       * * `this.form.get('person.name');`
       *
       * -OR-
       *
       * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
       *
       * ### Retrieve a control in a FormArray
       *
       * When accessing an element inside a FormArray, you can use an element index.
       * For example, to get a `price` control from the first element in an `items` array you can use:
       *
       * * `this.form.get('items.0.price');`
       *
       * -OR-
       *
       * * `this.form.get(['items', 0, 'price']);`
       */
      get(path) {
        let currPath = path;
        if (currPath == null)
          return null;
        if (!Array.isArray(currPath))
          currPath = currPath.split(".");
        if (currPath.length === 0)
          return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
      }
      /**
       * @description
       * Reports error data for the control with the given path.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * @returns error data for that particular error. If the control or error is not present,
       * null is returned.
       */
      getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
      }
      /**
       * @description
       * Reports whether the control with the given path has the error specified.
       *
       * @param errorCode The code of the error to check
       * @param path A list of control names that designates how to move from the current control
       * to the control that should be queried for errors.
       *
       * @usageNotes
       * For example, for the following `FormGroup`:
       *
       * ```ts
       * form = new FormGroup({
       *   address: new FormGroup({ street: new FormControl() })
       * });
       * ```
       *
       * The path to the 'street' control from the root form would be 'address' -> 'street'.
       *
       * It can be provided to this method in one of two formats:
       *
       * 1. An array of string control names, e.g. `['address', 'street']`
       * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
       *
       * If no path is given, this method checks for the error on the current control.
       *
       * @returns whether the given error is present in the control at the given path.
       *
       * If the control is not present, false is returned.
       */
      hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
      }
      /**
       * Retrieves the top-level ancestor of this control.
       */
      get root() {
        let x = this;
        while (x._parent) {
          x = x._parent;
        }
        return x;
      }
      /** @internal */
      _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
        this.status = this._calculateStatus();
        if (emitEvent) {
          this.statusChanges.emit(this.status);
        }
        if (emitEvent || shouldHaveEmitted) {
          this._events.next(new StatusChangeEvent(this.status, changedControl));
        }
        if (this._parent) {
          this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
        }
      }
      /** @internal */
      _initObservables() {
        this.valueChanges = new EventEmitter();
        this.statusChanges = new EventEmitter();
      }
      _calculateStatus() {
        if (this._allControlsDisabled())
          return DISABLED;
        if (this.errors)
          return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
          return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
          return INVALID;
        return VALID;
      }
      /** @internal */
      _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
      }
      /** @internal */
      _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
      }
      /** @internal */
      _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
      }
      /** @internal */
      _updatePristine(opts, changedControl) {
        const newPristine = !this._anyControlsDirty();
        const changed = this.pristine !== newPristine;
        this.pristine = newPristine;
        if (this._parent && !opts.onlySelf) {
          this._parent._updatePristine(opts, changedControl);
        }
        if (changed) {
          this._events.next(new PristineChangeEvent(this.pristine, changedControl));
        }
      }
      /** @internal */
      _updateTouched(opts = {}, changedControl) {
        this.touched = this._anyControlsTouched();
        this._events.next(new TouchedChangeEvent(this.touched, changedControl));
        if (this._parent && !opts.onlySelf) {
          this._parent._updateTouched(opts, changedControl);
        }
      }
      /** @internal */
      _onDisabledChange = [];
      /** @internal */
      _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
      }
      /** @internal */
      _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
          this._updateOn = opts.updateOn;
        }
      }
      /**
       * Check to see if parent has been marked artificially dirty.
       *
       * @internal
       */
      _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
      }
      /** @internal */
      _find(name) {
        return null;
      }
      /**
       * Internal implementation of the `setValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
      }
      /**
       * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
       * different method, because it is called in the constructor and it can break cases where
       * a control is extended.
       */
      _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
      }
    };
    FormGroup = class extends AbstractControl {
      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
          // so we set `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      registerControl(name, control) {
        if (this.controls[name])
          return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
      }
      addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Remove a control from this group. In a strongly-typed group, required controls cannot be
       * removed.
       *
       * This method also updates the value and validity of the control.
       *
       * @param name The control name to remove from the collection
       * @param options Specifies whether this FormGroup instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       */
      removeControl(name, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      setControl(name, control, options = {}) {
        if (this.controls[name])
          this.controls[name]._registerOnCollectionChange(() => {
          });
        delete this.controls[name];
        if (control)
          this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
      }
      /**
       * Sets the value of the `FormGroup`. It accepts an object that matches
       * the structure of the group, with control names as keys.
       *
       * @usageNotes
       * ### Set the complete value for the form group
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl(),
       *   last: new FormControl()
       * });
       *
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.setValue({first: 'Nancy', last: 'Drew'});
       * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
       * ```
       *
       * @throws When strict checks fail, such as setting the value of a control
       * that doesn't exist or if you exclude a value of a control that does exist.
       *
       * @param value The new value for the control that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events after the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach((name) => {
          assertControlPresent(this, true, name);
          this.controls[name].setValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormGroup`. It accepts an object with control
       * names as keys, and does its best to match the values to the correct controls
       * in the group.
       *
       * It accepts both super-sets and sub-sets of the group without throwing an error.
       *
       * @usageNotes
       * ### Patch the value for a form group
       *
       * ```ts
       * const form = new FormGroup({
       *    first: new FormControl(),
       *    last: new FormControl()
       * });
       * console.log(form.value);   // {first: null, last: null}
       *
       * form.patchValue({first: 'Nancy'});
       * console.log(form.value);   // {first: 'Nancy', last: null}
       * ```
       *
       * @param value The object that matches the structure of the group.
       * @param options Configuration options that determine how the control propagates changes and
       * emits events after the value is patched.
       * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
       * true.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control value
       * is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        Object.keys(value).forEach((name) => {
          const control = this.controls[name];
          if (control) {
            control.patchValue(
              /* Guaranteed to be present, due to the outer forEach. */
              value[name],
              { onlySelf: true, emitEvent: options.emitEvent }
            );
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
       * the value of all descendants to their default values, or null if no defaults were provided.
       *
       * You reset to a specific form state by passing in a map of states
       * that matches the structure of your form, with control names as keys. The state
       * is a standalone value or a form state object with both a value and a disabled
       * status.
       *
       * @param value Resets the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the group is reset.
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * @usageNotes
       *
       * ### Reset the form group values
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * console.log(form.value);  // {first: 'first name', last: 'last name'}
       *
       * form.reset({ first: 'name', last: 'last name' });
       *
       * console.log(form.value);  // {first: 'name', last: 'last name'}
       * ```
       *
       * ### Reset the form group values and disabled status
       *
       * ```ts
       * const form = new FormGroup({
       *   first: new FormControl('first name'),
       *   last: new FormControl('last name')
       * });
       *
       * form.reset({
       *   first: {value: 'name', disabled: true},
       *   last: 'last'
       * });
       *
       * console.log(form.value);  // {last: 'last'}
       * console.log(form.get('first').status);  // 'DISABLED'
       * ```
       */
      reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
          control.reset(value ? value[name] : null, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**
       * The aggregate value of the `FormGroup`, including any disabled controls.
       *
       * Retrieves all values regardless of disabled status.
       */
      getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
          acc[name] = control.getRawValue();
          return acc;
        });
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
          return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        Object.keys(this.controls).forEach((key) => {
          const control = this.controls[key];
          control && cb(control, key);
        });
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => {
          control.setParent(this);
          control._registerOnCollectionChange(this._onCollectionChange);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this._reduceValue();
      }
      /** @internal */
      _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
          if (this.contains(controlName) && condition(control)) {
            return true;
          }
        }
        return false;
      }
      /** @internal */
      _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc2, control, name) => {
          if (control.enabled || this.disabled) {
            acc2[name] = control.value;
          }
          return acc2;
        });
      }
      /** @internal */
      _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
          res = fn(res, control, name);
        });
        return res;
      }
      /** @internal */
      _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
          if (this.controls[controlName].enabled) {
            return false;
          }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
      }
      /** @internal */
      _find(name) {
        return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
      }
    };
    FormRecord = class extends FormGroup {
    };
    CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
      providedIn: "root",
      factory: () => setDisabledStateDefault
    });
    setDisabledStateDefault = "always";
    formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    };
    resolvedPromise$1 = (() => Promise.resolve())();
    NgForm = class _NgForm extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Returns whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this.submittedReactive);
      }
      /** @internal */
      _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "submittedReactive" }] : []);
      _directives = /* @__PURE__ */ new Set();
      /**
       * @description
       * The `FormGroup` instance created for this form.
       */
      form;
      /**
       * @description
       * Event emitter for the "ngSubmit" event
       */
      ngSubmit = new EventEmitter();
      /**
       * @description
       * Tracks options for the `NgForm` instance.
       *
       * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
       * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
       * Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
      }
      /** @docs-private */
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      /**
       * @description
       * The directive instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * The internal `FormGroup` instance.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it is always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Returns a map of the controls in this group.
       */
      get controls() {
        return this.form.controls;
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `NgModel` directive instance.
       */
      addControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          dir.control = container.registerControl(dir.name, dir.control);
          setUpControl(dir.control, dir, this.callSetDisabledState);
          dir.control.updateValueAndValidity({ emitEvent: false });
          this._directives.add(dir);
        });
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `NgModel` directive.
       *
       * @param dir The `NgModel` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `NgModel` instance from the internal list of directives
       *
       * @param dir The `NgModel` directive instance.
       */
      removeControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
          this._directives.delete(dir);
        });
      }
      /**
       * @description
       * Adds a new `NgModelGroup` directive instance to the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      addFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          const group = new FormGroup({});
          setUpFormContainer(group, dir);
          container.registerControl(dir.name, group);
          group.updateValueAndValidity({ emitEvent: false });
        });
      }
      /**
       * @description
       * Removes the `NgModelGroup` directive instance from the form.
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          if (container) {
            container.removeControl(dir.name);
          }
        });
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
       *
       * @param dir The `NgModelGroup` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `NgControl` directive.
       *
       * @param dir The `NgControl` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        resolvedPromise$1.then(() => {
          const ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        });
      }
      /**
       * @description
       * Sets the value for this `FormGroup`.
       *
       * @param value The new value
       */
      setValue(value) {
        this.control.setValue(value);
      }
      /**
       * @description
       * Method called when the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this.submittedReactive.set(true);
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form.
       */
      resetForm(value = void 0) {
        this.form.reset(value);
        this.submittedReactive.set(false);
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.form._updateOn = this.options.updateOn;
        }
      }
      _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgForm, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgForm, isStandalone: false, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: { options: ["ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider$1], exportAs: ["ngForm"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgForm, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
        providers: [formDirectiveProvider$1],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        outputs: ["ngSubmit"],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { options: [{
      type: Input,
      args: ["ngFormOptions"]
    }] } });
    FormControl = class FormControl2 extends AbstractControl {
      /** @publicApi */
      defaultValue = null;
      /** @internal */
      _onChange = [];
      /** @internal */
      _pendingValue;
      /** @internal */
      _pendingChange = false;
      constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set
          // `emitEvent` to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
          if (isFormControlState(formState)) {
            this.defaultValue = formState.value;
          } else {
            this.defaultValue = formState;
          }
        }
      }
      setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
          this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        this.setValue(value, options);
      }
      reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**  @internal */
      _updateValue() {
      }
      /**  @internal */
      _anyControls(condition) {
        return false;
      }
      /**  @internal */
      _allControlsDisabled() {
        return this.disabled;
      }
      registerOnChange(fn) {
        this._onChange.push(fn);
      }
      /** @internal */
      _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
      }
      registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
      }
      /** @internal */
      _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
      }
      /** @internal */
      _forEachChild(cb) {
      }
      /** @internal */
      _syncPendingControls() {
        if (this.updateOn === "submit") {
          if (this._pendingDirty)
            this.markAsDirty();
          if (this._pendingTouched)
            this.markAsTouched();
          if (this._pendingChange) {
            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
            return true;
          }
        }
        return false;
      }
      _applyFormState(formState) {
        if (isFormControlState(formState)) {
          this.value = this._pendingValue = formState.value;
          formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) : this.enable({ onlySelf: true, emitEvent: false });
        } else {
          this.value = this._pendingValue = formState;
        }
      }
    };
    isFormControl = (control) => control instanceof FormControl;
    AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
      /**
       * @description
       * The parent control for the group
       *
       * @internal
       */
      _parent;
      /** @docs-private */
      ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeFormGroup(this);
        }
      }
      /**
       * @description
       * The `FormGroup` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      /**
       * @description
       * The path to this group from the top-level directive.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /** @internal */
      _checkParentType() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _AbstractFormGroupDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _AbstractFormGroupDirective, isStandalone: false, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: AbstractFormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        standalone: false
      }]
    }] });
    modelGroupProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgModelGroup)
    };
    NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
       * to a key in the parent `NgForm`.
       */
      name = "";
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw modelGroupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgModelGroup, deps: [{ token: ControlContainer, host: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgModelGroup, isStandalone: false, selector: "[ngModelGroup]", inputs: { name: ["ngModelGroup", "name"] }, providers: [modelGroupProvider], exportAs: ["ngModelGroup"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgModelGroup, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModelGroup]",
        providers: [modelGroupProvider],
        exportAs: "ngModelGroup",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["ngModelGroup"]
    }] } });
    formControlBinding$1 = {
      provide: NgControl,
      useExisting: forwardRef(() => NgModel)
    };
    resolvedPromise = (() => Promise.resolve())();
    NgModel = class _NgModel extends NgControl {
      _changeDetectorRef;
      callSetDisabledState;
      control = new FormControl();
      // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
      // This is not reflected in the type of the property because outside of templates, consumers
      // should only deal with booleans. In templates, a string is allowed for convenience and to
      // match the native "disabled attribute" semantics which can be observed on input elements.
      // This static member tells the compiler that values of type "string" can also be assigned
      // to the input in a template.
      /** @docs-private */
      static ngAcceptInputType_isDisabled;
      /** @internal */
      _registered = false;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the name bound to the directive. If a parent form exists, it
       * uses this name as a key to retrieve this control's value.
       */
      name = "";
      /**
       * @description
       * Tracks whether the control is disabled.
       */
      isDisabled;
      /**
       * @description
       * Tracks the value bound to this directive.
       */
      model;
      /**
       * @description
       * Tracks the configuration options for this `ngModel` instance.
       *
       * **name**: An alternative to setting the name attribute on the form control element. See
       * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
       * as a standalone control.
       *
       * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
       * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
       * has no effect.
       *
       * **updateOn**: Defines the event upon which the form control value and validity update.
       * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
       *
       */
      options;
      /**
       * @description
       * Event emitter for producing the `ngModelChange` event after
       * the view model updates.
       */
      update = new EventEmitter();
      constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || "name" in changes) {
          if (this._registered) {
            this._checkName();
            if (this.formDirective) {
              const oldName = changes["name"].previousValue;
              this.formDirective.removeControl({ name: oldName, path: this._getPath(oldName) });
            }
          }
          this._setUpControl();
        }
        if ("isDisabled" in changes) {
          this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          this._updateValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return this._getPath(this.name);
      }
      /**
       * @description
       * The top-level directive for this control if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value emitted by `ngModelChange`.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.control._updateOn = this.options.updateOn;
        }
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({ emitEvent: false });
      }
      _checkForErrors() {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
          checkParentType$1(this._parent);
        }
        this._checkName();
      }
      _checkName() {
        if (this.options && this.options.name)
          this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingNameException();
        }
      }
      _updateValue(value) {
        resolvedPromise.then(() => {
          this.control.setValue(value, { emitViewToModelChange: false });
          this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(changes) {
        const disabledValue = changes["isDisabled"].currentValue;
        const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
        resolvedPromise.then(() => {
          if (isDisabled && !this.control.disabled) {
            this.control.disable();
          } else if (!isDisabled && this.control.disabled) {
            this.control.enable();
          }
          this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgModel, deps: [{ token: ControlContainer, host: true, optional: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: ChangeDetectorRef, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgModel, isStandalone: false, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: { name: "name", isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"], options: ["ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding$1], exportAs: ["ngModel"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgModel, decorators: [{
      type: Directive,
      args: [{
        selector: "[ngModel]:not([formControlName]):not([formControl])",
        providers: [formControlBinding$1],
        exportAs: "ngModel",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: ChangeDetectorRef, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { name: [{
      type: Input
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], options: [{
      type: Input,
      args: ["ngModelOptions"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    \u0275NgNoValidate = class _\u0275NgNoValidate {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _\u0275NgNoValidate, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _\u0275NgNoValidate, isStandalone: false, selector: "form:not([ngNoForm]):not([ngNativeValidate])", host: { attributes: { "novalidate": "" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: \u0275NgNoValidate, decorators: [{
      type: Directive,
      args: [{
        selector: "form:not([ngNoForm]):not([ngNativeValidate])",
        host: { "novalidate": "" },
        standalone: false
      }]
    }] });
    NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberValueAccessor),
      multi: true
    };
    NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NumberValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NumberValueAccessor, isStandalone: false, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { listeners: { "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [NUMBER_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NumberValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
        host: { "(input)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [NUMBER_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlValueAccessor),
      multi: true
    };
    RadioControlRegistry = class _RadioControlRegistry {
      _accessors = [];
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */
      add(control, accessor) {
        this._accessors.push([control, accessor]);
      }
      /**
       * @description
       * Removes a control from the internal registry. For internal use only.
       */
      remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
          if (this._accessors[i][1] === accessor) {
            this._accessors.splice(i, 1);
            return;
          }
        }
      }
      /**
       * @description
       * Selects a radio button. For internal use only.
       */
      select(accessor) {
        this._accessors.forEach((c) => {
          if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
            c[1].fireUncheck(accessor.value);
          }
        });
      }
      _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
          return false;
        return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _RadioControlRegistry, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _RadioControlRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: RadioControlRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
      _registry;
      _injector;
      /** @internal */
      _state;
      /** @internal */
      _control;
      /** @internal */
      _fn;
      setDisabledStateFired = false;
      /**
       * The registered callback function called when a change event occurs on the input element.
       * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
       * to override the `onChange` function (which expects 1 argument) in the parent
       * `BaseControlValueAccessor` class.
       * @docs-private
       */
      onChange = () => {
      };
      /**
       * @description
       * Tracks the name of the radio input element.
       */
      name;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       */
      formControlName;
      /**
       * @description
       * Tracks the value of the radio input element
       */
      value;
      callSetDisabledState = inject(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
      constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
      }
      /** @docs-private */
      ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
      }
      /** @docs-private */
      ngOnDestroy() {
        this._registry.remove(this);
      }
      /**
       * Sets the "checked" property value on the radio input element.
       * @docs-private
       */
      writeValue(value) {
        this._state = value === this.value;
        this.setProperty("checked", this._state);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
          fn(this.value);
          this._registry.select(this);
        };
      }
      /** @docs-private */
      setDisabledState(isDisabled) {
        if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
          this.setProperty("disabled", isDisabled);
        }
        this.setDisabledStateFired = true;
      }
      /**
       * Sets the "value" on the radio input element and unchecks it.
       *
       * @param value
       */
      fireUncheck(value) {
        this.writeValue(value);
      }
      _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwNameError();
        }
        if (!this.name && this.formControlName)
          this.name = this.formControlName;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _RadioControlValueAccessor, deps: [{ token: Renderer2 }, { token: ElementRef }, { token: RadioControlRegistry }, { token: Injector }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _RadioControlValueAccessor, isStandalone: false, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: { name: "name", formControlName: "formControlName", value: "value" }, host: { listeners: { "change": "onChange()", "blur": "onTouched()" } }, providers: [RADIO_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: RadioControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
        host: { "(change)": "onChange()", "(blur)": "onTouched()" },
        providers: [RADIO_VALUE_ACCESSOR],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: Renderer2 }, { type: ElementRef }, { type: RadioControlRegistry }, { type: Injector }], propDecorators: { name: [{
      type: Input
    }], formControlName: [{
      type: Input
    }], value: [{
      type: Input
    }] } });
    RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeValueAccessor),
      multi: true
    };
    RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
      /**
       * Sets the "value" property on the input element.
       * @docs-private
       */
      writeValue(value) {
        this.setProperty("value", parseFloat(value));
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _RangeValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _RangeValueAccessor, isStandalone: false, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]", host: { listeners: { "change": "onChange($any($event.target).value)", "input": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [RANGE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: RangeValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
        host: {
          "(change)": "onChange($any($event.target).value)",
          "(input)": "onChange($any($event.target).value)",
          "(blur)": "onTouched()"
        },
        providers: [RANGE_VALUE_ACCESSOR],
        standalone: false
      }]
    }] });
    NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
    formControlBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlDirective)
    };
    FormControlDirective = class _FormControlDirective extends NgControl {
      _ngModelWarningConfig;
      callSetDisabledState;
      /**
       * Internal reference to the view model value.
       * @docs-private
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      form;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular `FormControlDirective` instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
          const previousForm = changes["form"].previousValue;
          if (previousForm) {
            cleanUpControl(
              previousForm,
              this,
              /* validateControlPresenceOnChange */
              false
            );
          }
          setUpControl(this.form, this, this.callSetDisabledState);
          this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
          }
          this.form.setValue(this.model);
          this.viewModel = this.model;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpControl(
            this.form,
            this,
            /* validateControlPresenceOnChange */
            false
          );
        }
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * The `FormControl` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _isControlChanged(changes) {
        return changes.hasOwnProperty("form");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormControlDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _FormControlDirective, isStandalone: false, selector: "[formControl]", inputs: { form: ["formControl", "form"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormControlDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControl]",
        providers: [formControlBinding],
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formControl"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective)
    };
    FormGroupDirective = class _FormGroupDirective extends ControlContainer {
      callSetDisabledState;
      /**
       * @description
       * Reports whether the form submission has been triggered.
       */
      get submitted() {
        return untracked(this._submittedReactive);
      }
      // TODO(atscott): Remove once invalid API usage is cleaned up internally
      set submitted(value) {
        this._submittedReactive.set(value);
      }
      /** @internal */
      _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{ debugName: "_submitted" }] : []);
      _submittedReactive = signal(false, ...ngDevMode ? [{ debugName: "_submittedReactive" }] : []);
      /**
       * Reference to an old form group input value, which is needed to cleanup
       * old instance in case it was replaced with a new one.
       */
      _oldForm;
      /**
       * Callback that should be invoked when controls in FormGroup or FormArray collection change
       * (added or removed). This callback triggers corresponding DOM updates.
       */
      _onCollectionChange = () => this._updateDomValue();
      /**
       * @description
       * Tracks the list of added `FormControlName` instances
       */
      directives = [];
      /**
       * @description
       * Tracks the `FormGroup` bound to this directive.
       */
      form = null;
      /**
       * @description
       * Emits an event when the form submission has been triggered.
       */
      ngSubmit = new EventEmitter();
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this.form) {
          throw missingFormException();
        }
        if (changes.hasOwnProperty("form")) {
          this._updateValidators();
          this._updateDomValue();
          this._updateRegistrations();
          this._oldForm = this.form;
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.form) {
          cleanUpValidators(this.form, this);
          if (this.form._onCollectionChange === this._onCollectionChange) {
            this.form._registerOnCollectionChange(() => {
            });
          }
        }
      }
      /**
       * @description
       * Returns this directive's instance.
       */
      get formDirective() {
        return this;
      }
      /**
       * @description
       * Returns the `FormGroup` bound to this directive.
       */
      get control() {
        return this.form;
      }
      /**
       * @description
       * Returns an array representing the path to this group. Because this directive
       * always lives at the top level of a form, it always an empty array.
       */
      get path() {
        return [];
      }
      /**
       * @description
       * Method that sets up the control directive in this group, re-calculates its value
       * and validity, and adds the instance to the internal list of directives.
       *
       * @param dir The `FormControlName` directive instance.
       */
      addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
      }
      /**
       * @description
       * Retrieves the `FormControl` instance from the provided `FormControlName` directive
       *
       * @param dir The `FormControlName` directive instance.
       */
      getControl(dir) {
        return this.form.get(dir.path);
      }
      /**
       * @description
       * Removes the `FormControlName` instance from the internal list of directives
       *
       * @param dir The `FormControlName` directive instance.
       */
      removeControl(dir) {
        cleanUpControl(
          dir.control || null,
          dir,
          /* validateControlPresenceOnChange */
          false
        );
        removeListItem$1(this.directives, dir);
      }
      /**
       * Adds a new `FormGroupName` directive instance to the form.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      addFormGroup(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormGroupName` directive instance.
       */
      removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
       *
       * @param dir The `FormGroupName` directive instance.
       */
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      addFormArray(dir) {
        this._setUpFormContainer(dir);
      }
      /**
       * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
       * view.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
      }
      /**
       * @description
       * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
       *
       * @param dir The `FormArrayName` directive instance.
       */
      getFormArray(dir) {
        return this.form.get(dir.path);
      }
      /**
       * Sets the new value for the provided `FormControlName` directive.
       *
       * @param dir The `FormControlName` directive instance.
       * @param value The new value for the directive's control.
       */
      updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
      }
      /**
       * @description
       * Method called with the "submit" event is triggered on the form.
       * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
       *
       * @param $event The "submit" event object
       */
      onSubmit($event) {
        this._submittedReactive.set(true);
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      /**
       * @description
       * Method called when the "reset" event is triggered on the form.
       */
      onReset() {
        this.resetForm();
      }
      /**
       * @description
       * Resets the form to an initial value and resets its submitted status.
       *
       * @param value The new value for the form, `undefined` by default
       */
      resetForm(value = void 0, options = {}) {
        this.form.reset(value, options);
        this._submittedReactive.set(false);
      }
      /** @internal */
      _updateDomValue() {
        this.directives.forEach((dir) => {
          const oldCtrl = dir.control;
          const newCtrl = this.form.get(dir.path);
          if (oldCtrl !== newCtrl) {
            cleanUpControl(oldCtrl || null, dir);
            if (isFormControl(newCtrl)) {
              setUpControl(newCtrl, dir, this.callSetDisabledState);
              dir.control = newCtrl;
            }
          }
        });
        this.form._updateTreeValidity({ emitEvent: false });
      }
      _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
      }
      _cleanUpFormContainer(dir) {
        if (this.form) {
          const ctrl = this.form.get(dir.path);
          if (ctrl) {
            const isControlUpdated = cleanUpFormContainer(ctrl, dir);
            if (isControlUpdated) {
              ctrl.updateValueAndValidity({ emitEvent: false });
            }
          }
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
          this._oldForm._registerOnCollectionChange(() => {
          });
        }
      }
      _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
          cleanUpValidators(this._oldForm, this);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormGroupDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _FormGroupDirective, isStandalone: false, selector: "[formGroup]", inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormGroupDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroup]",
        providers: [formDirectiveProvider],
        host: { "(submit)": "onSubmit($event)", "(reset)": "onReset()" },
        exportAs: "ngForm",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }] }], propDecorators: { form: [{
      type: Input,
      args: ["formGroup"]
    }], ngSubmit: [{
      type: Output
    }] } });
    formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupName)
    };
    FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
      /**
       * @description
       * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form groups to be bound
       * to indices when iterating over groups in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /** @internal */
      _checkParentType() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw groupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormGroupName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _FormGroupName, isStandalone: false, selector: "[formGroupName]", inputs: { name: ["formGroupName", "name"] }, providers: [formGroupNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormGroupName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formGroupName]",
        providers: [formGroupNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formGroupName"]
    }] } });
    formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayName)
    };
    FormArrayName = class _FormArrayName extends ControlContainer {
      /** @internal */
      _parent;
      /**
       * @description
       * Tracks the name of the `FormArray` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form arrays to be bound
       * to indices when iterating over arrays in a `FormArray`.
       */
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      /**
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       * @throws If the directive does not have a valid parent.
       * @docs-private
       */
      ngOnInit() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw arrayParentException();
        }
        this.formDirective.addFormArray(this);
      }
      /**
       * A lifecycle method called before the directive's instance is destroyed. For internal use only.
       * @docs-private
       */
      ngOnDestroy() {
        this.formDirective?.removeFormArray(this);
      }
      /**
       * @description
       * The `FormArray` bound to this directive.
       */
      get control() {
        return this.formDirective.getFormArray(this);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormArrayName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _FormArrayName, isStandalone: false, selector: "[formArrayName]", inputs: { name: ["formArrayName", "name"] }, providers: [formArrayNameProvider], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormArrayName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formArrayName]",
        providers: [formArrayNameProvider],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formArrayName"]
    }] } });
    controlNameBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlName)
    };
    FormControlName = class _FormControlName extends NgControl {
      _ngModelWarningConfig;
      _added = false;
      /**
       * Internal reference to the view model value.
       * @internal
       */
      viewModel;
      /**
       * @description
       * Tracks the `FormControl` instance bound to the directive.
       */
      control;
      /**
       * @description
       * Tracks the name of the `FormControl` bound to the directive. The name corresponds
       * to a key in the parent `FormGroup` or `FormArray`.
       * Accepts a name as a string or a number.
       * The name in the form of a string is useful for individual forms,
       * while the numerical form allows for form controls to be bound
       * to indices when iterating over controls in a `FormArray`.
       */
      name = null;
      /**
       * @description
       * Triggers a warning in dev mode that this input should not be used with reactive forms.
       */
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      // TODO(kara): remove next 4 properties once deprecation period is over
      /** @deprecated as of v6 */
      model;
      /** @deprecated as of v6 */
      update = new EventEmitter();
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */
      static _ngModelWarningSentOnce = false;
      /**
       * @description
       * Instance property used to track whether an ngModel warning has been sent out for this
       * particular FormControlName instance. Used to support warning config of "always".
       *
       * @internal
       */
      _ngModelWarningSent = false;
      constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      /** @docs-private */
      ngOnChanges(changes) {
        if (!this._added)
          this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
          }
          this.viewModel = this.model;
          this.formDirective.updateModel(this, this.model);
        }
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this.formDirective) {
          this.formDirective.removeControl(this);
        }
      }
      /**
       * @description
       * Sets the new value for the view model and emits an `ngModelChange` event.
       *
       * @param newValue The new value for the view model.
       */
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      /**
       * @description
       * Returns an array that represents the path from the top-level form to this control.
       * Each index is the string name of the control on that level.
       */
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      /**
       * @description
       * The top-level directive for this group if present, otherwise null.
       */
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkParentType(this._parent, this.name);
        }
        this.control = this.formDirective.addControl(this);
        this._added = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormControlName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _FormControlName, isStandalone: false, selector: "[formControlName]", inputs: { name: ["formControlName", "name"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [controlNameBinding], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormControlName, decorators: [{
      type: Directive,
      args: [{
        selector: "[formControlName]",
        providers: [controlNameBinding],
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }] }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }] }], propDecorators: { name: [{
      type: Input,
      args: ["formControlName"]
    }], isDisabled: [{
      type: Input,
      args: ["disabled"]
    }], model: [{
      type: Input,
      args: ["ngModel"]
    }], update: [{
      type: Output,
      args: ["ngModelChange"]
    }] } });
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlValueAccessor),
      multi: true
    };
    SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
      /** @docs-private */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      // We need this because we might be in the process of destroying the root
      // injector, which is marked as destroyed before running destroy hooks.
      // Attempting to use afterNextRender with the node injector would evntually
      // run into that already destroyed injector.
      appRefInjector = inject(ApplicationRef).injector;
      destroyRef = inject(DestroyRef);
      cdr = inject(ChangeDetectorRef);
      _queuedWrite = false;
      /**
       * This is needed to efficiently set the select value when adding/removing options. If
       * writeValue is instead called for every added/removed option, this results in exponentially
       * more _compareValue calls than the number of option elements (issue #41330).
       *
       * Secondly, calling writeValue when rendering individual option elements instead of after they
       * are all rendered caused an issue in Safari and IE 11 where the first option element failed
       * to be deselected when no option matched the select ngModel. This was because Angular would
       * set the select element's value property before appending the option's child text node to the
       * DOM (issue #14505).
       *
       * Finally, this approach is necessary to avoid an issue with delayed element removal when
       * using the animations module (in all browsers). Otherwise when a selected option is removed
       * (so no option matches the ngModel anymore), Angular would change the select element value
       * before actually removing the option from the DOM. Then when the option is finally removed
       * from the DOM, the browser would change the select value to that of the first option, even
       * though it doesn't match the ngModel (issue #18430).
       *
       * @internal
       */
      _writeValueAfterRender() {
        if (this._queuedWrite || this.appRefInjector.destroyed) {
          return;
        }
        this._queuedWrite = true;
        afterNextRender({
          write: () => {
            if (this.destroyRef.destroyed) {
              return;
            }
            this._queuedWrite = false;
            this.writeValue(this.value);
          }
        }, { injector: this.appRefInjector });
      }
      /**
       * Sets the "value" property on the select element.
       * @docs-private
       */
      writeValue(value) {
        this.cdr.markForCheck();
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty("value", valueString);
      }
      /**
       * Registers a function called when the control value changes.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (valueString) => {
          this.value = this._getOptionValue(valueString);
          fn(this.value);
        };
      }
      /** @internal */
      _registerOption() {
        return (this._idCounter++).toString();
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id), value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _SelectControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _SelectControlValueAccessor, isStandalone: false, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($any($event.target).value)", "blur": "onTouched()" } }, providers: [SELECT_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: SelectControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
        host: { "(change)": "onChange($any($event.target).value)", "(blur)": "onTouched()" },
        providers: [SELECT_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    NgSelectOption = class _NgSelectOption {
      _element;
      _renderer;
      _select;
      /**
       * @description
       * ID of the option element
       */
      id;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
          this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select._writeValueAfterRender();
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        this._setElementValue(value);
        if (this._select)
          this._select._writeValueAfterRender();
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select._writeValueAfterRender();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NgSelectOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _NgSelectOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NgSelectOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
      multi: true
    };
    SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
      /**
       * The current value.
       * @docs-private
       */
      value;
      /** @internal */
      _optionMap = /* @__PURE__ */ new Map();
      /** @internal */
      _idCounter = 0;
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      /**
       * Sets the "value" property on one or of more of the select's options.
       * @docs-private
       */
      writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
          const ids = value.map((v) => this._getOptionId(v));
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(ids.indexOf(o.toString()) > -1);
          };
        } else {
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(false);
          };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
      }
      /**
       * Registers a function called when the control value changes
       * and writes an array of the selected options.
       * @docs-private
       */
      registerOnChange(fn) {
        this.onChange = (element) => {
          const selected = [];
          const selectedOptions = element.selectedOptions;
          if (selectedOptions !== void 0) {
            const options = selectedOptions;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          } else {
            const options = element.options;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              if (opt.selected) {
                const val = this._getOptionValue(opt.value);
                selected.push(val);
              }
            }
          }
          this.value = selected;
          fn(selected);
        };
      }
      /** @internal */
      _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
      }
      /** @internal */
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id)._value, value))
            return id;
        }
        return null;
      }
      /** @internal */
      _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _SelectMultipleControlValueAccessor, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _SelectMultipleControlValueAccessor, isStandalone: false, selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target)", "blur": "onTouched()" } }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: SelectMultipleControlValueAccessor, decorators: [{
      type: Directive,
      args: [{
        selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
        host: { "(change)": "onChange($event.target)", "(blur)": "onTouched()" },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
        standalone: false
      }]
    }], propDecorators: { compareWith: [{
      type: Input
    }] } });
    \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
      _element;
      _renderer;
      _select;
      id;
      /** @internal */
      _value;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */
      set ngValue(value) {
        if (this._select == null)
          return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      }
      /**
       * @description
       * Tracks simple string values bound to the option element.
       * For objects, use the `ngValue` input binding.
       */
      set value(value) {
        if (this._select) {
          this._value = value;
          this._setElementValue(_buildValueString(this.id, value));
          this._select.writeValue(this._select.value);
        } else {
          this._setElementValue(value);
        }
      }
      /** @internal */
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      /** @internal */
      _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, "selected", selected);
      }
      /** @docs-private */
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _\u0275NgSelectMultipleOption, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: SelectMultipleControlValueAccessor, host: true, optional: true }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _\u0275NgSelectMultipleOption, isStandalone: false, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: \u0275NgSelectMultipleOption, decorators: [{
      type: Directive,
      args: [{
        selector: "option",
        standalone: false
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }, { type: SelectMultipleControlValueAccessor, decorators: [{
      type: Optional
    }, {
      type: Host
    }] }], propDecorators: { ngValue: [{
      type: Input,
      args: ["ngValue"]
    }], value: [{
      type: Input,
      args: ["value"]
    }] } });
    AbstractValidatorDirective = class _AbstractValidatorDirective {
      _validator = nullValidator;
      _onChange;
      /**
       * A flag that tracks whether this validator is enabled.
       *
       * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
       * directive classes that extend this base class.
       * @internal
       */
      _enabled;
      /** @docs-private */
      ngOnChanges(changes) {
        if (this.inputName in changes) {
          const input = this.normalizeInput(changes[this.inputName].currentValue);
          this._enabled = this.enabled(input);
          this._validator = this._enabled ? this.createValidator(input) : nullValidator;
          if (this._onChange) {
            this._onChange();
          }
        }
      }
      /** @docs-private */
      validate(control) {
        return this._validator(control);
      }
      /** @docs-private */
      registerOnValidatorChange(fn) {
        this._onChange = fn;
      }
      /**
       * @description
       * Determines whether this validator should be active or not based on an input.
       * Base class implementation checks whether an input is defined (if the value is different from
       * `null` and `undefined`). Validator classes that extend this base class can override this
       * function with the logic specific to a particular validator directive.
       */
      enabled(input) {
        return input != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _AbstractValidatorDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _AbstractValidatorDirective, isStandalone: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: AbstractValidatorDirective, decorators: [{
      type: Directive
    }] });
    MAX_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValidator),
      multi: true
    };
    MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the max bound to this directive.
       */
      max;
      /** @internal */
      inputName = "max";
      /** @internal */
      normalizeInput = (input) => toFloat(input);
      /** @internal */
      createValidator = (max) => maxValidator(max);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _MaxValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _MaxValidator, isStandalone: false, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: { max: "max" }, host: { properties: { "attr.max": "_enabled ? max : null" } }, providers: [MAX_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: MaxValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
        providers: [MAX_VALIDATOR],
        host: { "[attr.max]": "_enabled ? max : null" },
        standalone: false
      }]
    }], propDecorators: { max: [{
      type: Input
    }] } });
    MIN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinValidator),
      multi: true
    };
    MinValidator = class _MinValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the min bound to this directive.
       */
      min;
      /** @internal */
      inputName = "min";
      /** @internal */
      normalizeInput = (input) => toFloat(input);
      /** @internal */
      createValidator = (min) => minValidator(min);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _MinValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _MinValidator, isStandalone: false, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: { min: "min" }, host: { properties: { "attr.min": "_enabled ? min : null" } }, providers: [MIN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: MinValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
        providers: [MIN_VALIDATOR],
        host: { "[attr.min]": "_enabled ? min : null" },
        standalone: false
      }]
    }], propDecorators: { min: [{
      type: Input
    }] } });
    REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RequiredValidator),
      multi: true
    };
    CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxRequiredValidator),
      multi: true
    };
    RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the required attribute bound to this directive.
       */
      required;
      /** @internal */
      inputName = "required";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input) => requiredValidator;
      /** @docs-private */
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _RequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _RequiredValidator, isStandalone: false, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: { required: "required" }, host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: RequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
        providers: [REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }], propDecorators: { required: [{
      type: Input
    }] } });
    CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
      /** @internal */
      createValidator = (input) => requiredTrueValidator;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _CheckboxRequiredValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _CheckboxRequiredValidator, isStandalone: false, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]", host: { properties: { "attr.required": '_enabled ? "" : null' } }, providers: [CHECKBOX_REQUIRED_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: CheckboxRequiredValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: { "[attr.required]": '_enabled ? "" : null' },
        standalone: false
      }]
    }] });
    EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    };
    EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the email attribute bound to this directive.
       */
      email;
      /** @internal */
      inputName = "email";
      /** @internal */
      normalizeInput = booleanAttribute;
      /** @internal */
      createValidator = (input) => emailValidator;
      /** @docs-private */
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _EmailValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _EmailValidator, isStandalone: false, selector: "[email][formControlName],[email][formControl],[email][ngModel]", inputs: { email: "email" }, providers: [EMAIL_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: EmailValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        providers: [EMAIL_VALIDATOR],
        standalone: false
      }]
    }], propDecorators: { email: [{
      type: Input
    }] } });
    MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidator),
      multi: true
    };
    MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the minimum length bound to this directive.
       */
      minlength;
      /** @internal */
      inputName = "minlength";
      /** @internal */
      normalizeInput = (input) => toInteger(input);
      /** @internal */
      createValidator = (minlength) => minLengthValidator(minlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _MinLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _MinLengthValidator, isStandalone: false, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: { minlength: "minlength" }, host: { properties: { "attr.minlength": "_enabled ? minlength : null" } }, providers: [MIN_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: MinLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
        providers: [MIN_LENGTH_VALIDATOR],
        host: { "[attr.minlength]": "_enabled ? minlength : null" },
        standalone: false
      }]
    }], propDecorators: { minlength: [{
      type: Input
    }] } });
    MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxLengthValidator),
      multi: true
    };
    MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the maximum length bound to this directive.
       */
      maxlength;
      /** @internal */
      inputName = "maxlength";
      /** @internal */
      normalizeInput = (input) => toInteger(input);
      /** @internal */
      createValidator = (maxlength) => maxLengthValidator(maxlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _MaxLengthValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _MaxLengthValidator, isStandalone: false, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: { maxlength: "maxlength" }, host: { properties: { "attr.maxlength": "_enabled ? maxlength : null" } }, providers: [MAX_LENGTH_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: MaxLengthValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
        providers: [MAX_LENGTH_VALIDATOR],
        host: { "[attr.maxlength]": "_enabled ? maxlength : null" },
        standalone: false
      }]
    }], propDecorators: { maxlength: [{
      type: Input
    }] } });
    PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PatternValidator),
      multi: true
    };
    PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
      /**
       * @description
       * Tracks changes to the pattern bound to this directive.
       */
      pattern;
      // This input is always defined, since the name matches selector.
      /** @internal */
      inputName = "pattern";
      /** @internal */
      normalizeInput = (input) => input;
      /** @internal */
      createValidator = (input) => patternValidator(input);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _PatternValidator, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.10", type: _PatternValidator, isStandalone: false, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: { pattern: "pattern" }, host: { properties: { "attr.pattern": "_enabled ? pattern : null" } }, providers: [PATTERN_VALIDATOR], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: PatternValidator, decorators: [{
      type: Directive,
      args: [{
        selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
        providers: [PATTERN_VALIDATOR],
        host: { "[attr.pattern]": "_enabled ? pattern : null" },
        standalone: false
      }]
    }], propDecorators: { pattern: [{
      type: Input
    }] } });
    SHARED_FORM_DIRECTIVES = [
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      SelectMultipleControlValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      MinLengthValidator,
      MaxLengthValidator,
      PatternValidator,
      CheckboxRequiredValidator,
      EmailValidator,
      MinValidator,
      MaxValidator
    ];
    TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    REACTIVE_DRIVEN_DIRECTIVES = [
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      FormArrayName
    ];
    \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.10", ngImport: core_exports, type: _\u0275InternalFormsSharedModule, declarations: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ], exports: [
        \u0275NgNoValidate,
        NgSelectOption,
        \u0275NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
        MinValidator,
        MaxValidator
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _\u0275InternalFormsSharedModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: \u0275InternalFormsSharedModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }] });
    FormArray = class extends AbstractControl {
      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
          // `VALID` or `INVALID`.
          // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
          // to `true` to allow that during the control creation process.
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
       *     around from the back, and if index is greatly negative (less than `-length`), the result is
       * undefined. This behavior is the same as `Array.at(index)`.
       */
      at(index) {
        return this.controls[this._adjustIndex(index)];
      }
      /**
       * Insert a new `AbstractControl` at the end of the array.
       *
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is added.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       *
       * NOTE: Pushing to the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      push(control, options = {}) {
        if (Array.isArray(control)) {
          control.forEach((ctrl) => {
            this.controls.push(ctrl);
            this._registerControl(ctrl);
          });
        } else {
          this.controls.push(control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Insert a new `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to insert the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
       * This behavior is the same as `Array.splice(index, 0, control)`.
       * @param control Form control to be inserted
       * @param options Specifies whether this FormArray instance should emit events after a new
       *     control is inserted.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * inserted. When false, no events are emitted.
       *
       * NOTE: Inserting to the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Remove the control at the given `index` in the array.
       *
       * @param index Index in the array to remove the control.  If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), removes the first
       *     element. This behavior is the same as `Array.splice(index, 1)`.
       * @param options Specifies whether this FormArray instance should emit events after a
       *     control is removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * removed. When false, no events are emitted.
       *
       * NOTE: Removing the FormArray will not mark it dirty. If you want to mark if dirty, call `markAsDirty()`.
       */
      removeAt(index, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Replace an existing control.
       *
       * @param index Index in the array to replace the control. If `index` is negative, wraps around
       *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
       *     element. This behavior is the same as `Array.splice(index, 1, control)`.
       * @param control The `AbstractControl` control to replace the existing control
       * @param options Specifies whether this FormArray instance should emit events after an
       *     existing control is replaced with a new one.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control is
       * replaced with a new one. When false, no events are emitted.
       */
      setControl(index, control, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
          adjustedIndex = 0;
        if (this.controls[adjustedIndex])
          this.controls[adjustedIndex]._registerOnCollectionChange(() => {
          });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
          this.controls.splice(adjustedIndex, 0, control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
      }
      /**
       * Length of the control array.
       */
      get length() {
        return this.controls.length;
      }
      /**
       * Sets the value of the `FormArray`. It accepts an array that matches
       * the structure of the control.
       *
       * This method performs strict checks, and throws an error if you try
       * to set the value of a control that doesn't exist or if you exclude the
       * value of a control.
       *
       * @usageNotes
       * ### Set the values for the controls in the form array
       *
       * ```ts
       * const arr = new FormArray([
       *   new FormControl(),
       *   new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.setValue(['Nancy', 'Drew']);
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
          assertControlPresent(this, false, index);
          this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Patches the value of the `FormArray`. It accepts an array that matches the
       * structure of the control, and does its best to match the values to the correct
       * controls in the group.
       *
       * It accepts both super-sets and sub-sets of the array without throwing an error.
       *
       * @usageNotes
       * ### Patch the values for controls in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.value);   // [null, null]
       *
       * arr.patchValue(['Nancy']);
       * console.log(arr.value);   // ['Nancy', null]
       * ```
       *
       * @param value Array of latest values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when the control
       * value is updated. When false, no events are emitted. The configuration options are passed to
       * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
       */
      patchValue(value, options = {}) {
        if (value == null)
          return;
        value.forEach((newValue, index) => {
          if (this.at(index)) {
            this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
          }
        });
        this.updateValueAndValidity(options);
      }
      /**
       * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
       * value of all descendants to null or null maps.
       *
       * You reset to a specific form state by passing in an array of states
       * that matches the structure of the control. The state is a standalone value
       * or a form state object with both a value and a disabled status.
       *
       * @usageNotes
       * ### Reset the values in a form array
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * arr.reset(['name', 'last name']);
       *
       * console.log(arr.value);  // ['name', 'last name']
       * ```
       *
       * ### Reset the values in a form array and the disabled status for the first control
       *
       * ```ts
       * arr.reset([
       *   {value: 'name', disabled: true},
       *   'last'
       * ]);
       *
       * console.log(arr.value);  // ['last']
       * console.log(arr.at(0).status);  // 'DISABLED'
       * ```
       *
       * @param value Array of values for the controls
       * @param options Configure options that determine how the control propagates changes and
       * emits events after the value changes
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
       * is false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control is reset.
       * When false, no events are emitted.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       */
      reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
          control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      /**
       * The aggregate value of the array, including any disabled controls.
       *
       * Reports all values regardless of disabled status.
       */
      getRawValue() {
        return this.controls.map((control) => control.getRawValue());
      }
      /**
       * Remove all controls in the `FormArray`.
       *
       * @param options Specifies whether this FormArray instance should emit events after all
       *     controls are removed.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges` observables emit events with the latest status and value when all controls
       * in this FormArray instance are removed. When false, no events are emitted.
       *
       * @usageNotes
       * ### Remove all elements from a FormArray
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       * console.log(arr.length);  // 2
       *
       * arr.clear();
       * console.log(arr.length);  // 0
       * ```
       *
       * It's a simpler and more efficient alternative to removing all elements one by one:
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl(),
       *    new FormControl()
       * ]);
       *
       * while (arr.length) {
       *    arr.removeAt(0);
       * }
       * ```
       */
      clear(options = {}) {
        if (this.controls.length < 1)
          return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => {
        }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
      }
      /**
       * Adjusts a negative index by summing it with the length of the array. For very negative
       * indices, the result may remain negative.
       * @internal
       */
      _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
      }
      /** @internal */
      _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
          return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
          this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
      }
      /** @internal */
      _forEachChild(cb) {
        this.controls.forEach((control, index) => {
          cb(control, index);
        });
      }
      /** @internal */
      _updateValue() {
        this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
      }
      /** @internal */
      _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
      }
      /** @internal */
      _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
      }
      /** @internal */
      _allControlsDisabled() {
        for (const control of this.controls) {
          if (control.enabled)
            return false;
        }
        return this.controls.length > 0 || this.disabled;
      }
      _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
      }
      /** @internal */
      _find(name) {
        return this.at(name) ?? null;
      }
    };
    FormBuilder = class _FormBuilder {
      useNonNullable = false;
      /**
       * @description
       * Returns a FormBuilder in which automatically constructed `FormControl` elements
       * have `{nonNullable: true}` and are non-nullable.
       *
       * **Constructing non-nullable controls**
       *
       * When constructing a control, it will be non-nullable, and will reset to its initial value.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.control('Alex'); // FormControl<string>
       * name.reset();
       * console.log(name); // 'Alex'
       * ```
       *
       * **Constructing non-nullable groups or arrays**
       *
       * When constructing a group or array, all automatically created inner controls will be
       * non-nullable, and will reset to their initial values.
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
       * name.reset();
       * console.log(name); // {who: 'Alex'}
       * ```
       * **Constructing *nullable* fields on groups or arrays**
       *
       * It is still possible to have a nullable field. In particular, any `FormControl` which is
       * *already* constructed will not be altered. For example:
       *
       * ```ts
       * let nnfb = new FormBuilder().nonNullable;
       * // FormGroup<{who: FormControl<string|null>}>
       * let name = nnfb.group({who: new FormControl('Alex')});
       * name.reset(); console.log(name); // {who: null}
       * ```
       *
       * Because the inner control is constructed explicitly by the caller, the builder has
       * no control over how it is created, and cannot exclude the `null`.
       */
      get nonNullable() {
        const nnfb = new _FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
      }
      group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
          newOptions = options;
        } else if (options !== null) {
          newOptions.validators = options.validator;
          newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
      }
      /**
       * @description
       * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
       * containing all the keys and corresponding inner control types.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param options Configuration options object for the `FormRecord`. The object should have the
       * `AbstractControlOptions` type and might contain the following fields:
       * * `validators`: A synchronous validator function, or an array of validator functions.
       * * `asyncValidators`: A single async validator or array of async validator functions.
       * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
       * | submit').
       */
      record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        return new FormRecord(reducedControls, options);
      }
      /**
       * @description
       * Constructs a new `FormControl` with the given state, validators and options. Sets
       * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
       * control will be nullable. Accepts a single generic argument, which is the type  of the
       * control's value.
       *
       * @param formState Initializes the control with an initial state value, or
       * with an object that contains both a value and a disabled status.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or a `FormControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator
       * functions.
       *
       * @usageNotes
       *
       * ### Initialize a control as disabled
       *
       * The following example returns a control with an initial value in a disabled state.
       *
       * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
       */
      control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
          newOptions = validatorOrOpts;
        } else {
          newOptions.validators = validatorOrOpts;
          newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), { nonNullable: true }));
      }
      /**
       * Constructs a new `FormArray` from the given array of configurations,
       * validators and options. Accepts a single generic argument, which is the type of each control
       * inside the array.
       *
       * @param controls An array of child controls or control configs. Each child control is given an
       *     index when it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
       *     `AbstractControlOptions` object that contains
       * validation functions and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions.
       */
      array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map((c) => this._createControl(c));
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
      }
      /** @internal */
      _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach((controlName) => {
          createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
      }
      /** @internal */
      _createControl(controls) {
        if (controls instanceof FormControl) {
          return controls;
        } else if (controls instanceof AbstractControl) {
          return controls;
        } else if (Array.isArray(controls)) {
          const value = controls[0];
          const validator = controls.length > 1 ? controls[1] : null;
          const asyncValidator = controls.length > 2 ? controls[2] : null;
          return this.control(value, validator, asyncValidator);
        } else {
          return this.control(controls);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    NonNullableFormBuilder = class _NonNullableFormBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NonNullableFormBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _NonNullableFormBuilder, providedIn: "root", useFactory: () => inject(FormBuilder).nonNullable });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: NonNullableFormBuilder, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root",
        useFactory: () => inject(FormBuilder).nonNullable
      }]
    }] });
    UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
      group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
      }
      /**
       * Like `FormBuilder#control`, except the resulting control is untyped.
       */
      control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
      }
      /**
       * Like `FormBuilder#array`, except the resulting array is untyped.
       */
      array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _UntypedFormBuilder, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _UntypedFormBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: UntypedFormBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    VERSION = new Version("20.3.10");
    FormsModule = class _FormsModule {
      /**
       * @description
       * Provides options for configuring the forms module.
       *
       * @param opts An object of configuration options
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _FormsModule,
          providers: [
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.10", ngImport: core_exports, type: _FormsModule, declarations: [NgModel, NgModelGroup, NgForm], exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _FormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: FormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }] });
    ReactiveFormsModule = class _ReactiveFormsModule {
      /**
       * @description
       * Provides options for configuring the reactive forms module.
       *
       * @param opts An object of configuration options
       * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
       * binding is used with reactive form directives.
       * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
       * correct, or to only call it `whenDisabled`, which is the legacy behavior.
       */
      static withConfig(opts) {
        return {
          ngModule: _ReactiveFormsModule,
          providers: [
            {
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl ?? "always"
            },
            {
              provide: CALL_SET_DISABLED_STATE,
              useValue: opts.callSetDisabledState ?? setDisabledStateDefault
            }
          ]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _ReactiveFormsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.10", ngImport: core_exports, type: _ReactiveFormsModule, declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: _ReactiveFormsModule, imports: [\u0275InternalFormsSharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: core_exports, type: ReactiveFormsModule, decorators: [{
      type: NgModule,
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }] });
  }
});

// node_modules/@ionic/core/components/cubic-bezier.js
var getTimeGivenProgression, solveCubicParametricEquation, solveCubicBezier, solveQuadraticEquation, solveCubicEquation;
var init_cubic_bezier = __esm({
  "node_modules/@ionic/core/components/cubic-bezier.js"() {
    "use strict";
    getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
      return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map((tValue) => {
        return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
      });
    };
    solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
      const partA = 3 * p1 * Math.pow(t - 1, 2);
      const partB = -3 * p2 * t + 3 * p2 + p3 * t;
      const partC = p0 * Math.pow(t - 1, 3);
      return t * (partA + t * partB) - partC;
    };
    solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
      p0 -= refPoint;
      p1 -= refPoint;
      p2 -= refPoint;
      p3 -= refPoint;
      const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
      return roots.filter((root) => root >= 0 && root <= 1);
    };
    solveQuadraticEquation = (a, b, c) => {
      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) {
        return [];
      } else {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
      }
    };
    solveCubicEquation = (a, b, c, d) => {
      if (a === 0) {
        return solveQuadraticEquation(b, c, d);
      }
      b /= a;
      c /= a;
      d /= a;
      const p = (3 * c - b * b) / 3;
      const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
      if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
      } else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
      }
      const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
      if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
      } else if (discriminant > 0) {
        return [
          Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3
        ];
      }
      const r = Math.sqrt(Math.pow(-(p / 3), 3));
      const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
      const s = 2 * Math.pow(r, 1 / 3);
      return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
      ];
    };
  }
});

// node_modules/@ionic/core/components/ionic-global.js
var getPlatforms, isPlatform, setupPlatforms, detectPlatforms, isMobileWeb, isIpad, isIphone, isIOS, isAndroid, isAndroidTablet, isPhablet, isTablet, isMobile, isDesktop, isHybrid, isCordova, isCapacitorNative, isElectron, isPWA, testUserAgent, matchMedia, PLATFORMS_MAP, defaultMode, getIonMode;
var init_ionic_global = __esm({
  "node_modules/@ionic/core/components/ionic-global.js"() {
    "use strict";
    init_client();
    init_index4();
    getPlatforms = (win) => setupPlatforms(win);
    isPlatform = (winOrPlatform, platform) => {
      if (typeof winOrPlatform === "string") {
        platform = winOrPlatform;
        winOrPlatform = void 0;
      }
      return getPlatforms(winOrPlatform).includes(platform);
    };
    setupPlatforms = (win = window) => {
      if (typeof win === "undefined") {
        return [];
      }
      win.Ionic = win.Ionic || {};
      let platforms = win.Ionic.platforms;
      if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
      }
      return platforms;
    };
    detectPlatforms = (win) => {
      const customPlatformMethods = config.get("platform");
      return Object.keys(PLATFORMS_MAP).filter((p) => {
        const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
        return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
      });
    };
    isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
    isIpad = (win) => {
      if (testUserAgent(win, /iPad/i)) {
        return true;
      }
      if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
        return true;
      }
      return false;
    };
    isIphone = (win) => testUserAgent(win, /iPhone/i);
    isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
    isAndroid = (win) => testUserAgent(win, /android|sink/i);
    isAndroidTablet = (win) => {
      return isAndroid(win) && !testUserAgent(win, /mobile/i);
    };
    isPhablet = (win) => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const smallest = Math.min(width, height);
      const largest = Math.max(width, height);
      return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
    };
    isTablet = (win) => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const smallest = Math.min(width, height);
      const largest = Math.max(width, height);
      return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
    };
    isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
    isDesktop = (win) => !isMobile(win);
    isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
    isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
    isCapacitorNative = (win) => {
      const capacitor = win["Capacitor"];
      return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
    };
    isElectron = (win) => testUserAgent(win, /electron/i);
    isPWA = (win) => {
      var _a;
      return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
    };
    testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
    matchMedia = (win, query) => {
      var _a;
      return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
    };
    PLATFORMS_MAP = {
      ipad: isIpad,
      iphone: isIphone,
      ios: isIOS,
      android: isAndroid,
      phablet: isPhablet,
      tablet: isTablet,
      cordova: isCordova,
      capacitor: isCapacitorNative,
      electron: isElectron,
      pwa: isPWA,
      mobile: isMobile,
      mobileweb: isMobileWeb,
      desktop: isDesktop,
      hybrid: isHybrid
    };
    getIonMode = (ref) => {
      return ref && getMode(ref) || defaultMode;
    };
  }
});

// node_modules/@ionic/core/components/config.js
var sanitizeDOMString, sanitizeElement, getElementChildren, isSanitizerEnabled, allowedAttributes, blockedTags, IonicSafeString, ENABLE_HTML_CONTENT_DEFAULT;
var init_config = __esm({
  "node_modules/@ionic/core/components/config.js"() {
    "use strict";
    init_index4();
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
      const config2 = (_a = win === null || win === void 0 ? void 0 : win.Ionic) === null || _a === void 0 ? void 0 : _a.config;
      if (config2) {
        if (config2.get) {
          return config2.get("sanitizerEnabled", true);
        } else {
          return config2.sanitizerEnabled === true || config2.sanitizerEnabled === void 0;
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
    ENABLE_HTML_CONTENT_DEFAULT = false;
  }
});

// node_modules/@ionic/core/components/theme.js
var hostContext, createColorClasses, getClassList, getClassMap, SCHEME, openURL;
var init_theme = __esm({
  "node_modules/@ionic/core/components/theme.js"() {
    "use strict";
    hostContext = (selector, el) => {
      return el.closest(selector) !== null;
    };
    createColorClasses = (color, cssClassMap) => {
      return typeof color === "string" && color.length > 0 ? Object.assign({ "ion-color": true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
    };
    getClassList = (classes) => {
      if (classes !== void 0) {
        const array = Array.isArray(classes) ? classes : classes.split(" ");
        return array.filter((c) => c != null).map((c) => c.trim()).filter((c) => c !== "");
      }
      return [];
    };
    getClassMap = (classes) => {
      const map2 = {};
      getClassList(classes).forEach((c) => map2[c] = true);
      return map2;
    };
    SCHEME = /^[a-z][a-z0-9+\-.]*:/;
    openURL = (url, ev, direction, animation) => __async(null, null, function* () {
      if (url != null && url[0] !== "#" && !SCHEME.test(url)) {
        const router = document.querySelector("ion-router");
        if (router) {
          if (ev != null) {
            ev.preventDefault();
          }
          return router.push(url, direction, animation);
        }
      }
      return false;
    });
  }
});

// node_modules/@ionic/core/components/index5.js
var baseAnimation, menuOverlayAnimation, menuPushAnimation, menuRevealAnimation, createMenuController, menuController;
var init_index5 = __esm({
  "node_modules/@ionic/core/components/index5.js"() {
    "use strict";
    init_index9();
    init_hardware_back_button();
    init_index4();
    init_helpers();
    init_ionic_global();
    init_animation();
    baseAnimation = (isIos) => {
      return createAnimation().duration(isIos ? 400 : 300);
    };
    menuOverlayAnimation = (menu) => {
      let closedX;
      let openedX;
      const width = menu.width + 8;
      const menuAnimation = createAnimation();
      const backdropAnimation = createAnimation();
      if (menu.isEndSide) {
        closedX = width + "px";
        openedX = "0px";
      } else {
        closedX = -width + "px";
        openedX = "0px";
      }
      menuAnimation.addElement(menu.menuInnerEl).fromTo("transform", `translateX(${closedX})`, `translateX(${openedX})`);
      const mode = getIonMode(menu);
      const isIos = mode === "ios";
      const opacity = isIos ? 0.2 : 0.25;
      backdropAnimation.addElement(menu.backdropEl).fromTo("opacity", 0.01, opacity);
      return baseAnimation(isIos).addAnimation([menuAnimation, backdropAnimation]);
    };
    menuPushAnimation = (menu) => {
      let contentOpenedX;
      let menuClosedX;
      const mode = getIonMode(menu);
      const width = menu.width;
      if (menu.isEndSide) {
        contentOpenedX = -width + "px";
        menuClosedX = width + "px";
      } else {
        contentOpenedX = width + "px";
        menuClosedX = -width + "px";
      }
      const menuAnimation = createAnimation().addElement(menu.menuInnerEl).fromTo("transform", `translateX(${menuClosedX})`, "translateX(0px)");
      const contentAnimation = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${contentOpenedX})`);
      const backdropAnimation = createAnimation().addElement(menu.backdropEl).fromTo("opacity", 0.01, 0.32);
      return baseAnimation(mode === "ios").addAnimation([menuAnimation, contentAnimation, backdropAnimation]);
    };
    menuRevealAnimation = (menu) => {
      const mode = getIonMode(menu);
      const openedX = menu.width * (menu.isEndSide ? -1 : 1) + "px";
      const contentOpen = createAnimation().addElement(menu.contentEl).fromTo("transform", "translateX(0px)", `translateX(${openedX})`);
      return baseAnimation(mode === "ios").addAnimation(contentOpen);
    };
    createMenuController = () => {
      const menuAnimations = /* @__PURE__ */ new Map();
      const menus = [];
      const open = (menu) => __async(null, null, function* () {
        const menuEl = yield get(menu, true);
        if (menuEl) {
          return menuEl.open();
        }
        return false;
      });
      const close = (menu) => __async(null, null, function* () {
        const menuEl = yield menu !== void 0 ? get(menu, true) : getOpen();
        if (menuEl !== void 0) {
          return menuEl.close();
        }
        return false;
      });
      const toggle = (menu) => __async(null, null, function* () {
        const menuEl = yield get(menu, true);
        if (menuEl) {
          return menuEl.toggle();
        }
        return false;
      });
      const enable = (shouldEnable, menu) => __async(null, null, function* () {
        const menuEl = yield get(menu);
        if (menuEl) {
          menuEl.disabled = !shouldEnable;
        }
        return menuEl;
      });
      const swipeGesture = (shouldEnable, menu) => __async(null, null, function* () {
        const menuEl = yield get(menu);
        if (menuEl) {
          menuEl.swipeGesture = shouldEnable;
        }
        return menuEl;
      });
      const isOpen = (menu) => __async(null, null, function* () {
        if (menu != null) {
          const menuEl = yield get(menu);
          return menuEl !== void 0 && menuEl.isOpen();
        } else {
          const menuEl = yield getOpen();
          return menuEl !== void 0;
        }
      });
      const isEnabled = (menu) => __async(null, null, function* () {
        const menuEl = yield get(menu);
        if (menuEl) {
          return !menuEl.disabled;
        }
        return false;
      });
      const get = (menu, logOnMultipleSideMenus = false) => __async(null, null, function* () {
        yield waitUntilReady();
        if (menu === "start" || menu === "end") {
          const menuRefs = menus.filter((m) => m.side === menu && !m.disabled);
          if (menuRefs.length >= 1) {
            if (menuRefs.length > 1 && logOnMultipleSideMenus) {
              printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, menuRefs.map((m) => m.el));
            }
            return menuRefs[0].el;
          }
          const sideMenuRefs = menus.filter((m) => m.side === menu);
          if (sideMenuRefs.length >= 1) {
            if (sideMenuRefs.length > 1 && logOnMultipleSideMenus) {
              printIonWarning(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`, sideMenuRefs.map((m) => m.el));
            }
            return sideMenuRefs[0].el;
          }
        } else if (menu != null) {
          return find((m) => m.menuId === menu);
        }
        const menuEl = find((m) => !m.disabled);
        if (menuEl) {
          return menuEl;
        }
        return menus.length > 0 ? menus[0].el : void 0;
      });
      const getOpen = () => __async(null, null, function* () {
        yield waitUntilReady();
        return _getOpenSync();
      });
      const getMenus = () => __async(null, null, function* () {
        yield waitUntilReady();
        return getMenusSync();
      });
      const isAnimating = () => __async(null, null, function* () {
        yield waitUntilReady();
        return isAnimatingSync();
      });
      const registerAnimation = (name, animation) => {
        menuAnimations.set(name, animation);
      };
      const _register = (menu) => {
        if (menus.indexOf(menu) < 0) {
          menus.push(menu);
        }
      };
      const _unregister = (menu) => {
        const index = menus.indexOf(menu);
        if (index > -1) {
          menus.splice(index, 1);
        }
      };
      const _setOpen = (menu, shouldOpen, animated, role) => __async(null, null, function* () {
        if (isAnimatingSync()) {
          return false;
        }
        if (shouldOpen) {
          const openedMenu = yield getOpen();
          if (openedMenu && menu.el !== openedMenu) {
            yield openedMenu.setOpen(false, false);
          }
        }
        return menu._setOpen(shouldOpen, animated, role);
      });
      const _createAnimation = (type, menuCmp) => {
        const animationBuilder = menuAnimations.get(type);
        if (!animationBuilder) {
          throw new Error("animation not registered");
        }
        const animation = animationBuilder(menuCmp);
        return animation;
      };
      const _getOpenSync = () => {
        return find((m) => m._isOpen);
      };
      const getMenusSync = () => {
        return menus.map((menu) => menu.el);
      };
      const isAnimatingSync = () => {
        return menus.some((menu) => menu.isAnimating);
      };
      const find = (predicate) => {
        const instance = menus.find(predicate);
        if (instance !== void 0) {
          return instance.el;
        }
        return void 0;
      };
      const waitUntilReady = () => {
        return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu) => new Promise((resolve) => componentOnReady(menu, resolve))));
      };
      registerAnimation("reveal", menuRevealAnimation);
      registerAnimation("push", menuPushAnimation);
      registerAnimation("overlay", menuOverlayAnimation);
      doc === null || doc === void 0 ? void 0 : doc.addEventListener("ionBackButton", (ev) => {
        const openMenu = _getOpenSync();
        if (openMenu) {
          ev.detail.register(MENU_BACK_BUTTON_PRIORITY, () => {
            return openMenu.close();
          });
        }
      });
      return {
        registerAnimation,
        get,
        getMenus,
        getOpen,
        isEnabled,
        swipeGesture,
        isAnimating,
        isOpen,
        enable,
        toggle,
        close,
        open,
        _getOpenSync,
        _createAnimation,
        _register,
        _unregister,
        _setOpen
      };
    };
    menuController = /* @__PURE__ */ createMenuController();
  }
});

// node_modules/@ionic/core/components/framework-delegate.js
var attachComponent, detachComponent, CoreDelegate;
var init_framework_delegate = __esm({
  "node_modules/@ionic/core/components/framework-delegate.js"() {
    "use strict";
    init_helpers();
    attachComponent = (delegate, container, component, cssClasses, componentProps, inline) => __async(null, null, function* () {
      var _a;
      if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
      }
      if (!inline && typeof component !== "string" && !(component instanceof HTMLElement)) {
        throw new Error("framework delegate is missing");
      }
      const el = typeof component === "string" ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
      if (cssClasses) {
        cssClasses.forEach((c) => el.classList.add(c));
      }
      if (componentProps) {
        Object.assign(el, componentProps);
      }
      container.appendChild(el);
      yield new Promise((resolve) => componentOnReady(el, resolve));
      return el;
    });
    detachComponent = (delegate, element) => {
      if (element) {
        if (delegate) {
          const container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }
        element.remove();
      }
      return Promise.resolve();
    };
    CoreDelegate = () => {
      let BaseComponent;
      let Reference;
      const attachViewToDom = (_0, _1, ..._2) => __async(null, [_0, _1, ..._2], function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
        var _a, _b;
        BaseComponent = parentElement;
        let ChildComponent;
        if (userComponent) {
          const el = typeof userComponent === "string" ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
          cssClasses.forEach((c) => el.classList.add(c));
          Object.assign(el, userComponentProps);
          BaseComponent.appendChild(el);
          ChildComponent = el;
          yield new Promise((resolve) => componentOnReady(el, resolve));
        } else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === "ION-MODAL" || BaseComponent.tagName === "ION-POPOVER")) {
          const root = ChildComponent = BaseComponent.children[0];
          if (!root.classList.contains("ion-delegate-host")) {
            const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement("div");
            el.classList.add("ion-delegate-host");
            cssClasses.forEach((c) => el.classList.add(c));
            el.append(...BaseComponent.children);
            BaseComponent.appendChild(el);
            ChildComponent = el;
          }
        }
        const app = document.querySelector("ion-app") || document.body;
        Reference = document.createComment("ionic teleport");
        BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
        app.appendChild(BaseComponent);
        return ChildComponent !== null && ChildComponent !== void 0 ? ChildComponent : BaseComponent;
      });
      const removeViewFromDom = () => {
        if (BaseComponent && Reference) {
          Reference.parentNode.insertBefore(BaseComponent, Reference);
          Reference.remove();
        }
        return Promise.resolve();
      };
      return { attachViewToDom, removeViewFromDom };
    };
  }
});

// node_modules/@ionic/core/components/overlays.js
var focusableQueryString, focusFirstDescendant, focusLastDescendant, focusElementInContext, lastOverlayIndex, lastId, activeAnimations, createController, alertController, actionSheetController, loadingController, modalController, pickerController, popoverController, toastController, prepareOverlay, setOverlayId, createOverlay, isOverlayHidden, focusElementInOverlay, trapKeyboardFocus, connectListeners, dismissOverlay, getOverlays, getPresentedOverlays, getPresentedOverlay, setRootAriaHidden, present, restoreElementFocus, dismiss, getAppRoot, overlayAnimation, eventMethod, onceEvent, isCancel, defaultGate, safeCall, BACKDROP, GESTURE, OVERLAY_GESTURE_PRIORITY, createDelegateController, createTriggerController, FOCUS_TRAP_DISABLE_CLASS;
var init_overlays = __esm({
  "node_modules/@ionic/core/components/overlays.js"() {
    "use strict";
    init_index9();
    init_helpers();
    init_hardware_back_button();
    init_index4();
    init_ionic_global();
    init_framework_delegate();
    init_gesture_controller();
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

// node_modules/@ionic/core/components/index.js
var init_components = __esm({
  "node_modules/@ionic/core/components/index.js"() {
    "use strict";
    init_animation();
    init_index2();
    init_cubic_bezier();
    init_index3();
    init_ionic_global();
    init_helpers();
    init_index5();
    init_overlays();
  }
});

// node_modules/@ionic/angular/fesm2022/ionic-angular-common.mjs
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const { defineCustomElementFn, inputs, methods } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
function componentInputBindingFactory(router) {
  if (router?.componentInputBindingEnabled) {
    return new RoutedComponentInputBinder();
  }
  return null;
}
var DomController, getQueue, MenuController, Platform, readQueryParam, proxyEvent, NavController, getAnimation, DEFAULT_DIRECTION, DEFAULT_ANIMATED, Config, ConfigToken, getConfig, NavParams, IonModalToken, AngularDelegate, AngularFrameworkDelegate, attachView, LIFECYCLES, bindLifecycleEvents, NavParamsToken, getProviders, provideNavParamsInjectable, proxyInputs, proxyMethods, proxyOutputs, MODAL_INPUTS, MODAL_METHODS, IonModal, POPOVER_INPUTS, POPOVER_METHODS, IonPopover, insertView, setRoot, setForward, setBack, getUrl, isTabSwitch, computeStackId, toSegments, destroyView, StackController, cleanupAsync, cleanup, IonRouterOutlet, OutletInjector, INPUT_BINDER, RoutedComponentInputBinder, provideComponentInputBinding, raf, ValueAccessor, setIonicClasses, getClasses, setClasses, startsWith, BACK_BUTTON_INPUTS, IonBackButton, NAV_INPUTS, NAV_METHODS, IonNav, RouterLinkDelegateDirective, RouterLinkWithHrefDelegateDirective, IonTabs, OverlayBaseController;
var init_ionic_angular_common = __esm({
  "node_modules/@ionic/angular/fesm2022/ionic-angular-common.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_router();
    init_router();
    init_common();
    init_common();
    init_components();
    init_esm();
    init_tslib_es6();
    init_operators();
    init_forms();
    DomController = class _DomController {
      /**
       * Schedules a task to run during the READ phase of the next frame.
       * This task should only read the DOM, but never modify it.
       */
      read(cb) {
        getQueue().read(cb);
      }
      /**
       * Schedules a task to run during the WRITE phase of the next frame.
       * This task should write the DOM, but never READ it.
       */
      write(cb) {
        getQueue().write(cb);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _DomController, deps: [], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _DomController, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: DomController, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    getQueue = () => {
      const win = typeof window !== "undefined" ? window : null;
      if (win != null) {
        const Ionic = win.Ionic;
        if (Ionic?.queue) {
          return Ionic.queue;
        }
        return {
          read: (cb) => win.requestAnimationFrame(cb),
          write: (cb) => win.requestAnimationFrame(cb)
        };
      }
      return {
        read: (cb) => cb(),
        write: (cb) => cb()
      };
    };
    MenuController = class {
      menuController;
      constructor(menuController2) {
        this.menuController = menuController2;
      }
      /**
       * Programmatically open the Menu.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return returns a promise when the menu is fully opened
       */
      open(menuId) {
        return this.menuController.open(menuId);
      }
      /**
       * Programmatically close the Menu. If no `menuId` is given as the first
       * argument then it'll close any menu which is open. If a `menuId`
       * is given then it'll close that exact menu.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return returns a promise when the menu is fully closed
       */
      close(menuId) {
        return this.menuController.close(menuId);
      }
      /**
       * Toggle the menu. If it's closed, it will open, and if opened, it
       * will close.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return returns a promise when the menu has been toggled
       */
      toggle(menuId) {
        return this.menuController.toggle(menuId);
      }
      /**
       * Used to enable or disable a menu. For example, there could be multiple
       * left menus, but only one of them should be able to be opened at the same
       * time. If there are multiple menus on the same side, then enabling one menu
       * will also automatically disable all the others that are on the same side.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return Returns the instance of the menu, which is useful for chaining.
       */
      enable(shouldEnable, menuId) {
        return this.menuController.enable(shouldEnable, menuId);
      }
      /**
       * Used to enable or disable the ability to swipe open the menu.
       * @param shouldEnable  True if it should be swipe-able, false if not.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return Returns the instance of the menu, which is useful for chaining.
       */
      swipeGesture(shouldEnable, menuId) {
        return this.menuController.swipeGesture(shouldEnable, menuId);
      }
      /**
       * @param [menuId] Optionally get the menu by its id, or side.
       * @return Returns true if the specified menu is currently open, otherwise false.
       * If the menuId is not specified, it returns true if ANY menu is currenly open.
       */
      isOpen(menuId) {
        return this.menuController.isOpen(menuId);
      }
      /**
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return Returns true if the menu is currently enabled, otherwise false.
       */
      isEnabled(menuId) {
        return this.menuController.isEnabled(menuId);
      }
      /**
       * Used to get a menu instance. If a `menuId` is not provided then it'll
       * return the first menu found. If a `menuId` is `left` or `right`, then
       * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
       * provided, then it'll try to find the menu using the menu's `id`
       * property. If a menu is not found then it'll return `null`.
       * @param [menuId]  Optionally get the menu by its id, or side.
       * @return Returns the instance of the menu if found, otherwise `null`.
       */
      get(menuId) {
        return this.menuController.get(menuId);
      }
      /**
       * @return Returns the instance of the menu already opened, otherwise `null`.
       */
      getOpen() {
        return this.menuController.getOpen();
      }
      /**
       * @return Returns an array of all menu instances.
       */
      getMenus() {
        return this.menuController.getMenus();
      }
      registerAnimation(name, animation) {
        return this.menuController.registerAnimation(name, animation);
      }
      isAnimating() {
        return this.menuController.isAnimating();
      }
      _getOpenSync() {
        return this.menuController._getOpenSync();
      }
      _createAnimation(type, menuCmp) {
        return this.menuController._createAnimation(type, menuCmp);
      }
      _register(menu) {
        return this.menuController._register(menu);
      }
      _unregister(menu) {
        return this.menuController._unregister(menu);
      }
      _setOpen(menu, shouldOpen, animated) {
        return this.menuController._setOpen(menu, shouldOpen, animated);
      }
    };
    Platform = class _Platform {
      doc;
      _readyPromise;
      win;
      /**
       * @hidden
       */
      backButton = new Subject();
      /**
       * The keyboardDidShow event emits when the
       * on-screen keyboard is presented.
       */
      keyboardDidShow = new Subject();
      /**
       * The keyboardDidHide event emits when the
       * on-screen keyboard is hidden.
       */
      keyboardDidHide = new Subject();
      /**
       * The pause event emits when the native platform puts the application
       * into the background, typically when the user switches to a different
       * application. This event would emit when a Cordova app is put into
       * the background, however, it would not fire on a standard web browser.
       */
      pause = new Subject();
      /**
       * The resume event emits when the native platform pulls the application
       * out from the background. This event would emit when a Cordova app comes
       * out from the background, however, it would not fire on a standard web browser.
       */
      resume = new Subject();
      /**
       * The resize event emits when the browser window has changed dimensions. This
       * could be from a browser window being physically resized, or from a device
       * changing orientation.
       */
      resize = new Subject();
      constructor(doc2, zone) {
        this.doc = doc2;
        zone.run(() => {
          this.win = doc2.defaultView;
          this.backButton.subscribeWithPriority = function(priority, callback) {
            return this.subscribe((ev) => {
              return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
            });
          };
          proxyEvent(this.pause, doc2, "pause", zone);
          proxyEvent(this.resume, doc2, "resume", zone);
          proxyEvent(this.backButton, doc2, "ionBackButton", zone);
          proxyEvent(this.resize, this.win, "resize", zone);
          proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
          proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
          let readyResolve;
          this._readyPromise = new Promise((res) => {
            readyResolve = res;
          });
          if (this.win?.["cordova"]) {
            doc2.addEventListener("deviceready", () => {
              readyResolve("cordova");
            }, { once: true });
          } else {
            readyResolve("dom");
          }
        });
      }
      /**
       * @returns returns true/false based on platform.
       * @description
       * Depending on the platform the user is on, `is(platformName)` will
       * return `true` or `false`. Note that the same app can return `true`
       * for more than one platform name. For example, an app running from
       * an iPad would return `true` for the platform names: `mobile`,
       * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
       * from Cordova then `cordova` would be true, and if it was running
       * from a web browser on the iPad then `mobileweb` would be `true`.
       *
       * ```
       * import { Platform } from 'ionic-angular';
       *
       * @Component({...})
       * export MyPage {
       *   constructor(public platform: Platform) {
       *     if (this.platform.is('ios')) {
       *       // This will only print when on iOS
       *       console.log('I am an iOS device!');
       *     }
       *   }
       * }
       * ```
       *
       * | Platform Name   | Description                        |
       * |-----------------|------------------------------------|
       * | android         | on a device running Android.       |
       * | capacitor       | on a device running Capacitor.     |
       * | cordova         | on a device running Cordova.       |
       * | ios             | on a device running iOS.           |
       * | ipad            | on an iPad device.                 |
       * | iphone          | on an iPhone device.               |
       * | phablet         | on a phablet device.               |
       * | tablet          | on a tablet device.                |
       * | electron        | in Electron on a desktop device.   |
       * | pwa             | as a PWA app.                      |
       * | mobile          | on a mobile device.                |
       * | mobileweb       | on a mobile device in a browser.   |
       * | desktop         | on a desktop device.               |
       * | hybrid          | is a cordova or capacitor app.     |
       *
       */
      is(platformName) {
        return isPlatform(this.win, platformName);
      }
      /**
       * @returns the array of platforms
       * @description
       * Depending on what device you are on, `platforms` can return multiple values.
       * Each possible value is a hierarchy of platforms. For example, on an iPhone,
       * it would return `mobile`, `ios`, and `iphone`.
       *
       * ```
       * import { Platform } from 'ionic-angular';
       *
       * @Component({...})
       * export MyPage {
       *   constructor(public platform: Platform) {
       *     // This will print an array of the current platforms
       *     console.log(this.platform.platforms());
       *   }
       * }
       * ```
       */
      platforms() {
        return getPlatforms(this.win);
      }
      /**
       * Returns a promise when the platform is ready and native functionality
       * can be called. If the app is running from within a web browser, then
       * the promise will resolve when the DOM is ready. When the app is running
       * from an application engine such as Cordova, then the promise will
       * resolve when Cordova triggers the `deviceready` event.
       *
       * The resolved value is the `readySource`, which states which platform
       * ready was used. For example, when Cordova is ready, the resolved ready
       * source is `cordova`. The default ready source value will be `dom`. The
       * `readySource` is useful if different logic should run depending on the
       * platform the app is running from. For example, only Cordova can execute
       * the status bar plugin, so the web should not run status bar plugin logic.
       *
       * ```
       * import { Component } from '@angular/core';
       * import { Platform } from 'ionic-angular';
       *
       * @Component({...})
       * export MyApp {
       *   constructor(public platform: Platform) {
       *     this.platform.ready().then((readySource) => {
       *       console.log('Platform ready from', readySource);
       *       // Platform now ready, execute any required native code
       *     });
       *   }
       * }
       * ```
       */
      ready() {
        return this._readyPromise;
      }
      /**
       * Returns if this app is using right-to-left language direction or not.
       * We recommend the app's `index.html` file already has the correct `dir`
       * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
       * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
       */
      get isRTL() {
        return this.doc.dir === "rtl";
      }
      /**
       * Get the query string parameter
       */
      getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
      }
      /**
       * Returns `true` if the app is in landscape mode.
       */
      isLandscape() {
        return !this.isPortrait();
      }
      /**
       * Returns `true` if the app is in portrait mode.
       */
      isPortrait() {
        return this.win.matchMedia?.("(orientation: portrait)").matches;
      }
      testUserAgent(expression) {
        const nav = this.win.navigator;
        return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
      }
      /**
       * Get the current url.
       */
      url() {
        return this.win.location.href;
      }
      /**
       * Gets the width of the platform's viewport using `window.innerWidth`.
       */
      width() {
        return this.win.innerWidth;
      }
      /**
       * Gets the height of the platform's viewport using `window.innerHeight`.
       */
      height() {
        return this.win.innerHeight;
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _Platform, deps: [{ token: DOCUMENT }, { token: NgZone }], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }] }, { type: NgZone }];
    } });
    readQueryParam = (url, key) => {
      key = key.replace(/[[\]\\]/g, "\\$&");
      const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
      const results = regex.exec(url);
      return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
    };
    proxyEvent = (emitter, el, eventName, zone) => {
      if (el) {
        el.addEventListener(eventName, (ev) => {
          zone.run(() => {
            const value = ev != null ? ev.detail : void 0;
            emitter.next(value);
          });
        });
      }
    };
    NavController = class _NavController {
      location;
      serializer;
      router;
      topOutlet;
      direction = DEFAULT_DIRECTION;
      animated = DEFAULT_ANIMATED;
      animationBuilder;
      guessDirection = "forward";
      guessAnimation;
      lastNavId = -1;
      constructor(platform, location, serializer, router) {
        this.location = location;
        this.serializer = serializer;
        this.router = router;
        if (router) {
          router.events.subscribe((ev) => {
            if (ev instanceof NavigationStart) {
              const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
              this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
              this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
            }
          });
        }
        platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
          this.pop();
          processNextHandler();
        });
      }
      /**
       * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
       * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
       *
       * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
       * and that it will show a "forward" animation by default.
       *
       * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
       *
       * ```html
       * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
       * ```
       */
      navigateForward(url, options = {}) {
        this.setDirection("forward", options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
      }
      /**
       * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
       * it's equivalent to calling:
       *
       * ```ts
       * this.navController.setDirection('back');
       * this.router.navigateByUrl(path);
       * ```
       *
       * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
       * and that it will show a "back" animation by default.
       *
       * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
       *
       * ```html
       * <a routerLink="/path/to/page" routerDirection="back">Link</a>
       * ```
       */
      navigateBack(url, options = {}) {
        this.setDirection("back", options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
      }
      /**
       * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
       * it's equivalent to calling:
       *
       * ```ts
       * this.navController.setDirection('root');
       * this.router.navigateByUrl(path);
       * ```
       *
       * Going **root** means that all existing pages in the stack will be removed,
       * and the navigated page will become the single page in the stack.
       *
       * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
       *
       * ```html
       * <a routerLink="/path/to/page" routerDirection="root">Link</a>
       * ```
       */
      navigateRoot(url, options = {}) {
        this.setDirection("root", options.animated, options.animationDirection, options.animation);
        return this.navigate(url, options);
      }
      /**
       * Same as [Location](https://angular.io/api/common/Location)'s back() method.
       * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
       * by default.
       */
      back(options = { animated: true, animationDirection: "back" }) {
        this.setDirection("back", options.animated, options.animationDirection, options.animation);
        return this.location.back();
      }
      /**
       * This methods goes back in the context of Ionic's stack navigation.
       *
       * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
       * This is the recommended way to go back when you are using `ion-router-outlet`.
       *
       * Resolves to `true` if it was able to pop.
       */
      pop() {
        return __async(this, null, function* () {
          let outlet = this.topOutlet;
          while (outlet) {
            if (yield outlet.pop()) {
              return true;
            } else {
              outlet = outlet.parentOutlet;
            }
          }
          return false;
        });
      }
      /**
       * This methods specifies the direction of the next navigation performed by the Angular router.
       *
       * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
       *
       * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
       */
      setDirection(direction, animated, animationDirection, animationBuilder) {
        this.direction = direction;
        this.animated = getAnimation(direction, animated, animationDirection);
        this.animationBuilder = animationBuilder;
      }
      /**
       * @internal
       */
      setTopOutlet(outlet) {
        this.topOutlet = outlet;
      }
      /**
       * @internal
       */
      consumeTransition() {
        let direction = "root";
        let animation;
        const animationBuilder = this.animationBuilder;
        if (this.direction === "auto") {
          direction = this.guessDirection;
          animation = this.guessAnimation;
        } else {
          animation = this.animated;
          direction = this.direction;
        }
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        this.animationBuilder = void 0;
        return {
          direction,
          animation,
          animationBuilder
        };
      }
      navigate(url, options) {
        if (Array.isArray(url)) {
          return this.router.navigate(url, options);
        } else {
          const urlTree = this.serializer.parse(url.toString());
          if (options.queryParams !== void 0) {
            urlTree.queryParams = __spreadValues({}, options.queryParams);
          }
          if (options.fragment !== void 0) {
            urlTree.fragment = options.fragment;
          }
          return this.router.navigateByUrl(urlTree, options);
        }
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _NavController, deps: [{ token: Platform }, { token: Location }, { token: UrlSerializer }, { token: Router, optional: true }], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _NavController, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: NavController, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: function() {
      return [{ type: Platform }, { type: Location }, { type: UrlSerializer }, { type: Router, decorators: [{
        type: Optional
      }] }];
    } });
    getAnimation = (direction, animated, animationDirection) => {
      if (animated === false) {
        return void 0;
      }
      if (animationDirection !== void 0) {
        return animationDirection;
      }
      if (direction === "forward" || direction === "back") {
        return direction;
      } else if (direction === "root" && animated === true) {
        return "forward";
      }
      return void 0;
    };
    DEFAULT_DIRECTION = "auto";
    DEFAULT_ANIMATED = void 0;
    Config = class _Config {
      get(key, fallback) {
        const c = getConfig();
        if (c) {
          return c.get(key, fallback);
        }
        return null;
      }
      getBoolean(key, fallback) {
        const c = getConfig();
        if (c) {
          return c.getBoolean(key, fallback);
        }
        return false;
      }
      getNumber(key, fallback) {
        const c = getConfig();
        if (c) {
          return c.getNumber(key, fallback);
        }
        return 0;
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _Config, deps: [], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _Config, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: Config, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    ConfigToken = new InjectionToken("USERCONFIG");
    getConfig = () => {
      if (typeof window !== "undefined") {
        const Ionic = window.Ionic;
        if (Ionic?.config) {
          return Ionic.config;
        }
      }
      return null;
    };
    NavParams = class {
      data;
      constructor(data = {}) {
        this.data = data;
        console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
      }
      /**
       * Get the value of a nav-parameter for the current view
       *
       * ```ts
       * import { NavParams } from 'ionic-angular';
       *
       * export class MyClass{
       *  constructor(public navParams: NavParams){
       *    // userParams is an object we have in our nav-parameters
       *    this.navParams.get('userParams');
       *  }
       * }
       * ```
       *
       * @param param Which param you want to look up
       */
      get(param) {
        return this.data[param];
      }
    };
    IonModalToken = new InjectionToken("IonModalToken");
    AngularDelegate = class _AngularDelegate {
      zone = inject(NgZone);
      applicationRef = inject(ApplicationRef);
      config = inject(ConfigToken);
      create(environmentInjector, injector, elementReferenceKey) {
        return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _AngularDelegate, deps: [], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _AngularDelegate });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: AngularDelegate, decorators: [{
      type: Injectable
    }] });
    AngularFrameworkDelegate = class {
      environmentInjector;
      injector;
      applicationRef;
      zone;
      elementReferenceKey;
      enableSignalsSupport;
      elRefMap = /* @__PURE__ */ new WeakMap();
      elEventsMap = /* @__PURE__ */ new WeakMap();
      constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport) {
        this.environmentInjector = environmentInjector;
        this.injector = injector;
        this.applicationRef = applicationRef;
        this.zone = zone;
        this.elementReferenceKey = elementReferenceKey;
        this.enableSignalsSupport = enableSignalsSupport;
      }
      attachViewToDom(container, component, params, cssClasses) {
        return this.zone.run(() => {
          return new Promise((resolve) => {
            const componentProps = __spreadValues({}, params);
            if (this.elementReferenceKey !== void 0) {
              componentProps[this.elementReferenceKey] = container;
            }
            const el = attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport);
            resolve(el);
          });
        });
      }
      removeViewFromDom(_container, component) {
        return this.zone.run(() => {
          return new Promise((resolve) => {
            const componentRef = this.elRefMap.get(component);
            if (componentRef) {
              componentRef.destroy();
              this.elRefMap.delete(component);
              const unbindEvents = this.elEventsMap.get(component);
              if (unbindEvents) {
                unbindEvents();
                this.elEventsMap.delete(component);
              }
            }
            resolve();
          });
        });
      }
    };
    attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport) => {
      const providers = getProviders(params);
      if (container.tagName.toLowerCase() === "ion-modal") {
        providers.push({
          provide: IonModalToken,
          useValue: container
        });
      }
      const childInjector = Injector.create({
        providers,
        parent: injector
      });
      const componentRef = createComponent(component, {
        environmentInjector,
        elementInjector: childInjector
      });
      const instance = componentRef.instance;
      const hostElement = componentRef.location.nativeElement;
      if (params) {
        if (elementReferenceKey && instance[elementReferenceKey] !== void 0) {
          console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
        }
        if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
          const _a = params, { modal, popover } = _a, otherParams = __objRest(_a, ["modal", "popover"]);
          for (const key in otherParams) {
            componentRef.setInput(key, otherParams[key]);
          }
          if (modal !== void 0) {
            Object.assign(instance, { modal });
          }
          if (popover !== void 0) {
            Object.assign(instance, { popover });
          }
        } else {
          Object.assign(instance, params);
        }
      }
      if (cssClasses) {
        for (const cssClass of cssClasses) {
          hostElement.classList.add(cssClass);
        }
      }
      const unbindEvents = bindLifecycleEvents(zone, instance, hostElement);
      container.appendChild(hostElement);
      applicationRef.attachView(componentRef.hostView);
      elRefMap.set(hostElement, componentRef);
      elEventsMap.set(hostElement, unbindEvents);
      return hostElement;
    };
    LIFECYCLES = [
      LIFECYCLE_WILL_ENTER,
      LIFECYCLE_DID_ENTER,
      LIFECYCLE_WILL_LEAVE,
      LIFECYCLE_DID_LEAVE,
      LIFECYCLE_WILL_UNLOAD
    ];
    bindLifecycleEvents = (zone, instance, element) => {
      return zone.run(() => {
        const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
          const handler = (ev) => instance[eventName](ev.detail);
          element.addEventListener(eventName, handler);
          return () => element.removeEventListener(eventName, handler);
        });
        return () => unregisters.forEach((fn) => fn());
      });
    };
    NavParamsToken = new InjectionToken("NavParamsToken");
    getProviders = (params) => {
      return [
        {
          provide: NavParamsToken,
          useValue: params
        },
        {
          provide: NavParams,
          useFactory: provideNavParamsInjectable,
          deps: [NavParamsToken]
        }
      ];
    };
    provideNavParamsInjectable = (params) => {
      return new NavParams(params);
    };
    proxyInputs = (Cmp, inputs) => {
      const Prototype = Cmp.prototype;
      inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
          get() {
            return this.el[item];
          },
          set(val) {
            this.z.runOutsideAngular(() => this.el[item] = val);
          }
        });
      });
    };
    proxyMethods = (Cmp, methods) => {
      const Prototype = Cmp.prototype;
      methods.forEach((methodName) => {
        Prototype[methodName] = function() {
          const args = arguments;
          return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
      });
    };
    proxyOutputs = (instance, el, events) => {
      events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
    };
    MODAL_INPUTS = [
      "animated",
      "keepContentsMounted",
      "backdropBreakpoint",
      "backdropDismiss",
      "breakpoints",
      "canDismiss",
      "cssClass",
      "enterAnimation",
      "expandToScroll",
      "event",
      "focusTrap",
      "handle",
      "handleBehavior",
      "initialBreakpoint",
      "isOpen",
      "keyboardClose",
      "leaveAnimation",
      "mode",
      "presentingElement",
      "showBackdrop",
      "translucent",
      "trigger"
    ];
    MODAL_METHODS = [
      "present",
      "dismiss",
      "onDidDismiss",
      "onWillDismiss",
      "setCurrentBreakpoint",
      "getCurrentBreakpoint"
    ];
    IonModal = class IonModal2 {
      z;
      // TODO(FW-2827): type
      template;
      isCmpOpen = false;
      el;
      constructor(c, r, z) {
        this.z = z;
        this.el = r.nativeElement;
        this.el.addEventListener("ionMount", () => {
          this.isCmpOpen = true;
          c.detectChanges();
        });
        this.el.addEventListener("didDismiss", () => {
          this.isCmpOpen = false;
          c.detectChanges();
        });
        proxyOutputs(this, this.el, [
          "ionModalDidPresent",
          "ionModalWillPresent",
          "ionModalWillDismiss",
          "ionModalDidDismiss",
          "ionBreakpointDidChange",
          "didPresent",
          "willPresent",
          "willDismiss",
          "didDismiss"
        ]);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonModal2, deps: [{ token: ChangeDetectorRef }, { token: ElementRef }, { token: NgZone }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: IonModal2, selector: "ion-modal", inputs: { animated: "animated", keepContentsMounted: "keepContentsMounted", backdropBreakpoint: "backdropBreakpoint", backdropDismiss: "backdropDismiss", breakpoints: "breakpoints", canDismiss: "canDismiss", cssClass: "cssClass", enterAnimation: "enterAnimation", expandToScroll: "expandToScroll", event: "event", focusTrap: "focusTrap", handle: "handle", handleBehavior: "handleBehavior", initialBreakpoint: "initialBreakpoint", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", presentingElement: "presentingElement", showBackdrop: "showBackdrop", translucent: "translucent", trigger: "trigger" }, queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: core_exports });
    };
    IonModal = __decorate([
      ProxyCmp({
        inputs: MODAL_INPUTS,
        methods: MODAL_METHODS
      })
      /**
       * @Component extends from @Directive
       * so by defining the inputs here we
       * do not need to re-define them for the
       * lazy loaded popover.
       */
    ], IonModal);
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonModal, decorators: [{
      type: Directive,
      args: [{
        selector: "ion-modal",
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: MODAL_INPUTS
      }]
    }], ctorParameters: function() {
      return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }];
    }, propDecorators: { template: [{
      type: ContentChild,
      args: [TemplateRef, { static: false }]
    }] } });
    POPOVER_INPUTS = [
      "alignment",
      "animated",
      "arrow",
      "keepContentsMounted",
      "backdropDismiss",
      "cssClass",
      "dismissOnSelect",
      "enterAnimation",
      "event",
      "focusTrap",
      "isOpen",
      "keyboardClose",
      "leaveAnimation",
      "mode",
      "showBackdrop",
      "translucent",
      "trigger",
      "triggerAction",
      "reference",
      "size",
      "side"
    ];
    POPOVER_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
    IonPopover = class IonPopover2 {
      z;
      // TODO(FW-2827): type
      template;
      isCmpOpen = false;
      el;
      constructor(c, r, z) {
        this.z = z;
        this.el = r.nativeElement;
        this.el.addEventListener("ionMount", () => {
          this.isCmpOpen = true;
          c.detectChanges();
        });
        this.el.addEventListener("didDismiss", () => {
          this.isCmpOpen = false;
          c.detectChanges();
        });
        proxyOutputs(this, this.el, [
          "ionPopoverDidPresent",
          "ionPopoverWillPresent",
          "ionPopoverWillDismiss",
          "ionPopoverDidDismiss",
          "didPresent",
          "willPresent",
          "willDismiss",
          "didDismiss"
        ]);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonPopover2, deps: [{ token: ChangeDetectorRef }, { token: ElementRef }, { token: NgZone }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: IonPopover2, selector: "ion-popover", inputs: { alignment: "alignment", animated: "animated", arrow: "arrow", keepContentsMounted: "keepContentsMounted", backdropDismiss: "backdropDismiss", cssClass: "cssClass", dismissOnSelect: "dismissOnSelect", enterAnimation: "enterAnimation", event: "event", focusTrap: "focusTrap", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", showBackdrop: "showBackdrop", translucent: "translucent", trigger: "trigger", triggerAction: "triggerAction", reference: "reference", size: "size", side: "side" }, queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }], ngImport: core_exports });
    };
    IonPopover = __decorate([
      ProxyCmp({
        inputs: POPOVER_INPUTS,
        methods: POPOVER_METHODS
      })
      /**
       * @Component extends from @Directive
       * so by defining the inputs here we
       * do not need to re-define them for the
       * lazy loaded popover.
       */
    ], IonPopover);
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonPopover, decorators: [{
      type: Directive,
      args: [{
        selector: "ion-popover",
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: POPOVER_INPUTS
      }]
    }], ctorParameters: function() {
      return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: NgZone }];
    }, propDecorators: { template: [{
      type: ContentChild,
      args: [TemplateRef, { static: false }]
    }] } });
    insertView = (views, view, direction) => {
      if (direction === "root") {
        return setRoot(views, view);
      } else if (direction === "forward") {
        return setForward(views, view);
      } else {
        return setBack(views, view);
      }
    };
    setRoot = (views, view) => {
      views = views.filter((v) => v.stackId !== view.stackId);
      views.push(view);
      return views;
    };
    setForward = (views, view) => {
      const index = views.indexOf(view);
      if (index >= 0) {
        views = views.filter((v) => v.stackId !== view.stackId || v.id <= view.id);
      } else {
        views.push(view);
      }
      return views;
    };
    setBack = (views, view) => {
      const index = views.indexOf(view);
      if (index >= 0) {
        return views.filter((v) => v.stackId !== view.stackId || v.id <= view.id);
      } else {
        return setRoot(views, view);
      }
    };
    getUrl = (router, activatedRoute) => {
      const urlTree = router.createUrlTree(["."], { relativeTo: activatedRoute });
      return router.serializeUrl(urlTree);
    };
    isTabSwitch = (enteringView, leavingView) => {
      if (!leavingView) {
        return true;
      }
      return enteringView.stackId !== leavingView.stackId;
    };
    computeStackId = (prefixUrl, url) => {
      if (!prefixUrl) {
        return void 0;
      }
      const segments = toSegments(url);
      for (let i = 0; i < segments.length; i++) {
        if (i >= prefixUrl.length) {
          return segments[i];
        }
        if (segments[i] !== prefixUrl[i]) {
          return void 0;
        }
      }
      return void 0;
    };
    toSegments = (path) => {
      return path.split("/").map((s) => s.trim()).filter((s) => s !== "");
    };
    destroyView = (view) => {
      if (view) {
        view.ref.destroy();
        view.unlistenEvents();
      }
    };
    StackController = class {
      containerEl;
      router;
      navCtrl;
      zone;
      location;
      views = [];
      runningTask;
      skipTransition = false;
      tabsPrefix;
      activeView;
      nextId = 0;
      constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
        this.containerEl = containerEl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.location = location;
        this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
      }
      createView(ref, activatedRoute) {
        const url = getUrl(this.router, activatedRoute);
        const element = ref?.location?.nativeElement;
        const unlistenEvents = bindLifecycleEvents(this.zone, ref.instance, element);
        return {
          id: this.nextId++,
          stackId: computeStackId(this.tabsPrefix, url),
          unlistenEvents,
          element,
          ref,
          url
        };
      }
      getExistingView(activatedRoute) {
        const activatedUrlKey = getUrl(this.router, activatedRoute);
        const view = this.views.find((vw) => vw.url === activatedUrlKey);
        if (view) {
          view.ref.changeDetectorRef.reattach();
        }
        return view;
      }
      setActive(enteringView) {
        const consumeResult = this.navCtrl.consumeTransition();
        let { direction, animation, animationBuilder } = consumeResult;
        const leavingView = this.activeView;
        const tabSwitch = isTabSwitch(enteringView, leavingView);
        if (tabSwitch) {
          direction = "back";
          animation = void 0;
        }
        const viewsSnapshot = this.views.slice();
        let currentNavigation;
        const router = this.router;
        if (router.getCurrentNavigation) {
          currentNavigation = router.getCurrentNavigation();
        } else if (router.navigations?.value) {
          currentNavigation = router.navigations.value;
        }
        if (currentNavigation?.extras?.replaceUrl) {
          if (this.views.length > 0) {
            this.views.splice(-1, 1);
          }
        }
        const reused = this.views.includes(enteringView);
        const views = this.insertView(enteringView, direction);
        if (!reused) {
          enteringView.ref.changeDetectorRef.detectChanges();
        }
        const customAnimation = enteringView.animationBuilder;
        if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) {
          animationBuilder = customAnimation;
        }
        if (leavingView) {
          leavingView.animationBuilder = animationBuilder;
        }
        return this.zone.runOutsideAngular(() => {
          return this.wait(() => {
            if (leavingView) {
              leavingView.ref.changeDetectorRef.detach();
            }
            enteringView.ref.changeDetectorRef.reattach();
            return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
              enteringView,
              direction,
              animation,
              tabSwitch
            }));
          });
        });
      }
      canGoBack(deep, stackId = this.getActiveStackId()) {
        return this.getStack(stackId).length > deep;
      }
      pop(deep, stackId = this.getActiveStackId()) {
        return this.zone.run(() => {
          const views = this.getStack(stackId);
          if (views.length <= deep) {
            return Promise.resolve(false);
          }
          const view = views[views.length - deep - 1];
          let url = view.url;
          const viewSavedData = view.savedData;
          if (viewSavedData) {
            const primaryOutlet = viewSavedData.get("primary");
            if (primaryOutlet?.route?._routerState?.snapshot.url) {
              url = primaryOutlet.route._routerState.snapshot.url;
            }
          }
          const { animationBuilder } = this.navCtrl.consumeTransition();
          return this.navCtrl.navigateBack(url, __spreadProps(__spreadValues({}, view.savedExtras), { animation: animationBuilder })).then(() => true);
        });
      }
      startBackTransition() {
        const leavingView = this.activeView;
        if (leavingView) {
          const views = this.getStack(leavingView.stackId);
          const enteringView = views[views.length - 2];
          const customAnimation = enteringView.animationBuilder;
          return this.wait(() => {
            return this.transition(
              enteringView,
              // entering view
              leavingView,
              // leaving view
              "back",
              this.canGoBack(2),
              true,
              customAnimation
            );
          });
        }
        return Promise.resolve();
      }
      endBackTransition(shouldComplete) {
        if (shouldComplete) {
          this.skipTransition = true;
          this.pop(1);
        } else if (this.activeView) {
          cleanup(this.activeView, this.views, this.views, this.location, this.zone);
        }
      }
      getLastUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : void 0;
      }
      /**
       * @internal
       */
      getRootUrl(stackId) {
        const views = this.getStack(stackId);
        return views.length > 0 ? views[0] : void 0;
      }
      getActiveStackId() {
        return this.activeView ? this.activeView.stackId : void 0;
      }
      /**
       * @internal
       */
      getActiveView() {
        return this.activeView;
      }
      hasRunningTask() {
        return this.runningTask !== void 0;
      }
      destroy() {
        this.containerEl = void 0;
        this.views.forEach(destroyView);
        this.activeView = void 0;
        this.views = [];
      }
      getStack(stackId) {
        return this.views.filter((v) => v.stackId === stackId);
      }
      insertView(enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
        return this.views.slice();
      }
      transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
        if (this.skipTransition) {
          this.skipTransition = false;
          return Promise.resolve(false);
        }
        if (leavingView === enteringView) {
          return Promise.resolve(false);
        }
        const enteringEl = enteringView ? enteringView.element : void 0;
        const leavingEl = leavingView ? leavingView.element : void 0;
        const containerEl = this.containerEl;
        if (enteringEl && enteringEl !== leavingEl) {
          enteringEl.classList.add("ion-page");
          enteringEl.classList.add("ion-page-invisible");
          if (containerEl.commit) {
            return containerEl.commit(enteringEl, leavingEl, {
              duration: direction === void 0 ? 0 : void 0,
              direction,
              showGoBack,
              progressAnimation,
              animationBuilder
            });
          }
        }
        return Promise.resolve(false);
      }
      wait(task) {
        return __async(this, null, function* () {
          if (this.runningTask !== void 0) {
            yield this.runningTask;
            this.runningTask = void 0;
          }
          const promise = this.runningTask = task();
          promise.finally(() => this.runningTask = void 0);
          return promise;
        });
      }
    };
    cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
      if (typeof requestAnimationFrame === "function") {
        return new Promise((resolve) => {
          requestAnimationFrame(() => {
            cleanup(activeRoute, views, viewsSnapshot, location, zone);
            resolve();
          });
        });
      }
      return Promise.resolve();
    };
    cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
      zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
      views.forEach((view) => {
        const locationWithoutParams = location.path().split("?")[0];
        const locationWithoutFragment = locationWithoutParams.split("#")[0];
        if (view !== activeRoute && view.url !== locationWithoutFragment) {
          const element = view.element;
          element.setAttribute("aria-hidden", "true");
          element.classList.add("ion-page-hidden");
          view.ref.changeDetectorRef.detach();
        }
      });
    };
    IonRouterOutlet = class _IonRouterOutlet {
      parentOutlet;
      nativeEl;
      activatedView = null;
      tabsPrefix;
      _swipeGesture;
      stackCtrl;
      // Maintain map of activated route proxies for each component instance
      proxyMap = /* @__PURE__ */ new WeakMap();
      // Keep the latest activated route in a subject for the proxy routes to switch map to
      currentActivatedRoute$ = new BehaviorSubject(null);
      activated = null;
      /** @internal */
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      /**
       * The name of the outlet
       */
      name = PRIMARY_OUTLET;
      /** @internal */
      stackWillChange = new EventEmitter();
      /** @internal */
      stackDidChange = new EventEmitter();
      // eslint-disable-next-line @angular-eslint/no-output-rename
      activateEvents = new EventEmitter();
      // eslint-disable-next-line @angular-eslint/no-output-rename
      deactivateEvents = new EventEmitter();
      parentContexts = inject(ChildrenOutletContexts);
      location = inject(ViewContainerRef);
      environmentInjector = inject(EnvironmentInjector);
      inputBinder = inject(INPUT_BINDER, { optional: true });
      /** @nodoc */
      supportsBindingToComponentInputs = true;
      // Ionic providers
      config = inject(Config);
      navCtrl = inject(NavController);
      set animation(animation) {
        this.nativeEl.animation = animation;
      }
      set animated(animated) {
        this.nativeEl.animated = animated;
      }
      set swipeGesture(swipe) {
        this._swipeGesture = swipe;
        this.nativeEl.swipeHandler = swipe ? {
          canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
          onStart: () => this.stackCtrl.startBackTransition(),
          onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
        } : void 0;
      }
      constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
        this.parentOutlet = parentOutlet;
        this.nativeEl = elementRef.nativeElement;
        this.name = name || PRIMARY_OUTLET;
        this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
        this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
        this.parentContexts.onChildOutletCreated(this.name, this);
      }
      ngOnDestroy() {
        this.stackCtrl.destroy();
        this.inputBinder?.unsubscribeFromRouteData(this);
      }
      getContext() {
        return this.parentContexts.getContext(this.name);
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      // Note: Ionic deviates from the Angular Router implementation here
      initializeOutletWithName() {
        if (!this.activated) {
          const context = this.getContext();
          if (context?.route) {
            this.activateWith(context.route, context.injector);
          }
        }
        new Promise((resolve) => componentOnReady(this.nativeEl, resolve)).then(() => {
          if (this._swipeGesture === void 0) {
            this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
          }
        });
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) {
          throw new Error("Outlet is not activated");
        }
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) {
          throw new Error("Outlet is not activated");
        }
        return this._activatedRoute;
      }
      get activatedRouteData() {
        if (this._activatedRoute) {
          return this._activatedRoute.snapshot.data;
        }
        return {};
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to detach the subtree
       */
      detach() {
        throw new Error("incompatible reuse strategy");
      }
      /**
       * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      attach(_ref, _activatedRoute) {
        throw new Error("incompatible reuse strategy");
      }
      deactivate() {
        if (this.activated) {
          if (this.activatedView) {
            const context = this.getContext();
            this.activatedView.savedData = new Map(context.children["contexts"]);
            const primaryOutlet = this.activatedView.savedData.get("primary");
            if (primaryOutlet && context.route) {
              primaryOutlet.route = __spreadValues({}, context.route);
            }
            this.activatedView.savedExtras = {};
            if (context.route) {
              const contextSnapshot = context.route.snapshot;
              this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
              this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
            }
          }
          const c = this.component;
          this.activatedView = null;
          this.activated = null;
          this._activatedRoute = null;
          this.deactivateEvents.emit(c);
        }
      }
      activateWith(activatedRoute, environmentInjector) {
        if (this.isActivated) {
          throw new Error("Cannot activate an already activated outlet");
        }
        this._activatedRoute = activatedRoute;
        let cmpRef;
        let enteringView = this.stackCtrl.getExistingView(activatedRoute);
        if (enteringView) {
          cmpRef = this.activated = enteringView.ref;
          const saved = enteringView.savedData;
          if (saved) {
            const context = this.getContext();
            context.children["contexts"] = saved;
          }
          this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
        } else {
          const snapshot = activatedRoute._futureSnapshot;
          const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
          const component$ = new BehaviorSubject(null);
          const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
          const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
          const component = snapshot.routeConfig.component ?? snapshot.component;
          cmpRef = this.activated = this.outletContent.createComponent(component, {
            index: this.outletContent.length,
            injector,
            environmentInjector: environmentInjector ?? this.environmentInjector
          });
          component$.next(cmpRef.instance);
          enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
          this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
          this.currentActivatedRoute$.next({ component: cmpRef.instance, activatedRoute });
        }
        this.inputBinder?.bindActivatedRouteToOutletComponent(this);
        this.activatedView = enteringView;
        this.navCtrl.setTopOutlet(this);
        const leavingView = this.stackCtrl.getActiveView();
        this.stackWillChange.emit({
          enteringView,
          tabSwitch: isTabSwitch(enteringView, leavingView)
        });
        this.stackCtrl.setActive(enteringView).then((data) => {
          this.activateEvents.emit(cmpRef.instance);
          this.stackDidChange.emit(data);
        });
      }
      /**
       * Returns `true` if there are pages in the stack to go back.
       */
      canGoBack(deep = 1, stackId) {
        return this.stackCtrl.canGoBack(deep, stackId);
      }
      /**
       * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
       */
      pop(deep = 1, stackId) {
        return this.stackCtrl.pop(deep, stackId);
      }
      /**
       * Returns the URL of the active page of each stack.
       */
      getLastUrl(stackId) {
        const active = this.stackCtrl.getLastUrl(stackId);
        return active ? active.url : void 0;
      }
      /**
       * Returns the RouteView of the active page of each stack.
       * @internal
       */
      getLastRouteView(stackId) {
        return this.stackCtrl.getLastUrl(stackId);
      }
      /**
       * Returns the root view in the tab stack.
       * @internal
       */
      getRootView(stackId) {
        return this.stackCtrl.getRootUrl(stackId);
      }
      /**
       * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
       */
      getActiveStackId() {
        return this.stackCtrl.getActiveStackId();
      }
      /**
       * Since the activated route can change over the life time of a component in an ion router outlet, we create
       * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
       */
      createActivatedRouteProxy(component$, activatedRoute) {
        const proxy = new ActivatedRoute();
        proxy._futureSnapshot = activatedRoute._futureSnapshot;
        proxy._routerState = activatedRoute._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        proxy._paramMap = this.proxyObservable(component$, "paramMap");
        proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
        proxy.url = this.proxyObservable(component$, "url");
        proxy.params = this.proxyObservable(component$, "params");
        proxy.queryParams = this.proxyObservable(component$, "queryParams");
        proxy.fragment = this.proxyObservable(component$, "fragment");
        proxy.data = this.proxyObservable(component$, "data");
        return proxy;
      }
      /**
       * Create a wrapped observable that will switch to the latest activated route matched by the given component
       */
      proxyObservable(component$, path) {
        return component$.pipe(
          // First wait until the component instance is pushed
          filter((component) => !!component),
          switchMap((component) => this.currentActivatedRoute$.pipe(filter((current) => current !== null && current.component === component), switchMap((current) => current && current.activatedRoute[path]), distinctUntilChanged()))
        );
      }
      /**
       * Updates the activated route proxy for the given component to the new incoming router state
       */
      updateActivatedRouteProxy(component, activatedRoute) {
        const proxy = this.proxyMap.get(component);
        if (!proxy) {
          throw new Error(`Could not find activated route proxy for view`);
        }
        proxy._futureSnapshot = activatedRoute._futureSnapshot;
        proxy._routerState = activatedRoute._routerState;
        proxy.snapshot = activatedRoute.snapshot;
        proxy.outlet = activatedRoute.outlet;
        proxy.component = activatedRoute.component;
        this.currentActivatedRoute$.next({ component, activatedRoute });
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _IonRouterOutlet, deps: [{ token: "name", attribute: true }, { token: "tabs", attribute: true, optional: true }, { token: Location }, { token: ElementRef }, { token: Router }, { token: NgZone }, { token: ActivatedRoute }, { token: _IonRouterOutlet, optional: true, skipSelf: true }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: _IonRouterOutlet, selector: "ion-router-outlet", inputs: { animated: "animated", animation: "animation", mode: "mode", swipeGesture: "swipeGesture", name: "name" }, outputs: { stackWillChange: "stackWillChange", stackDidChange: "stackDidChange", activateEvents: "activate", deactivateEvents: "deactivate" }, exportAs: ["outlet"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonRouterOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "ion-router-outlet",
        exportAs: "outlet",
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: ["animated", "animation", "mode", "swipeGesture"]
      }]
    }], ctorParameters: function() {
      return [{ type: void 0, decorators: [{
        type: Attribute,
        args: ["name"]
      }] }, { type: void 0, decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }] }, { type: Location }, { type: ElementRef }, { type: Router }, { type: NgZone }, { type: ActivatedRoute }, { type: IonRouterOutlet, decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }] }];
    }, propDecorators: { name: [{
      type: Input
    }], stackWillChange: [{
      type: Output
    }], stackDidChange: [{
      type: Output
    }], activateEvents: [{
      type: Output,
      args: ["activate"]
    }], deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }] } });
    OutletInjector = class {
      route;
      childContexts;
      parent;
      constructor(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
      }
      get(token, notFoundValue) {
        if (token === ActivatedRoute) {
          return this.route;
        }
        if (token === ChildrenOutletContexts) {
          return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
      }
    };
    INPUT_BINDER = new InjectionToken("");
    RoutedComponentInputBinder = class _RoutedComponentInputBinder {
      outletDataSubscriptions = /* @__PURE__ */ new Map();
      bindActivatedRouteToOutletComponent(outlet) {
        this.unsubscribeFromRouteData(outlet);
        this.subscribeToRouteData(outlet);
      }
      unsubscribeFromRouteData(outlet) {
        this.outletDataSubscriptions.get(outlet)?.unsubscribe();
        this.outletDataSubscriptions.delete(outlet);
      }
      subscribeToRouteData(outlet) {
        const { activatedRoute } = outlet;
        const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
          data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
          if (index === 0) {
            return of(data);
          }
          return Promise.resolve(data);
        })).subscribe((data) => {
          if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          const mirror = reflectComponentType(activatedRoute.component);
          if (!mirror) {
            this.unsubscribeFromRouteData(outlet);
            return;
          }
          for (const { templateName } of mirror.inputs) {
            outlet.activatedComponentRef.setInput(templateName, data[templateName]);
          }
        });
        this.outletDataSubscriptions.set(outlet, dataSubscription);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _RoutedComponentInputBinder, deps: [], target: FactoryTarget.Injectable });
      /** @nocollapse */
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _RoutedComponentInputBinder });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: RoutedComponentInputBinder, decorators: [{
      type: Injectable
    }] });
    provideComponentInputBinding = () => {
      return {
        provide: INPUT_BINDER,
        useFactory: componentInputBindingFactory,
        deps: [Router]
      };
    };
    raf = (h) => {
      if (typeof __zone_symbol__requestAnimationFrame === "function") {
        return __zone_symbol__requestAnimationFrame(h);
      }
      if (typeof requestAnimationFrame === "function") {
        return requestAnimationFrame(h);
      }
      return setTimeout(h);
    };
    ValueAccessor = class _ValueAccessor {
      injector;
      elementRef;
      onChange = () => {
      };
      onTouched = () => {
      };
      lastValue;
      statusChanges;
      constructor(injector, elementRef) {
        this.injector = injector;
        this.elementRef = elementRef;
      }
      writeValue(value) {
        this.elementRef.nativeElement.value = this.lastValue = value;
        setIonicClasses(this.elementRef);
      }
      /**
       * Notifies the ControlValueAccessor of a change in the value of the control.
       *
       * This is called by each of the ValueAccessor directives when we want to update
       * the status and validity of the form control. For example with text components this
       * is called when the ionInput event is fired. For select components this is called
       * when the ionChange event is fired.
       *
       * This also updates the Ionic form status classes on the element.
       *
       * @param el The component element.
       * @param value The new value of the control.
       */
      handleValueChange(el, value) {
        if (el === this.elementRef.nativeElement) {
          if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
          }
          setIonicClasses(this.elementRef);
        }
      }
      _handleBlurEvent(el) {
        if (el === this.elementRef.nativeElement) {
          this.onTouched();
          setIonicClasses(this.elementRef);
        } else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) {
          this.onTouched();
        }
      }
      registerOnChange(fn) {
        this.onChange = fn;
      }
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      setDisabledState(isDisabled) {
        this.elementRef.nativeElement.disabled = isDisabled;
      }
      ngOnDestroy() {
        if (this.statusChanges) {
          this.statusChanges.unsubscribe();
        }
      }
      ngAfterViewInit() {
        let ngControl;
        try {
          ngControl = this.injector.get(NgControl);
        } catch {
        }
        if (!ngControl) {
          return;
        }
        if (ngControl.statusChanges) {
          this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
        }
        const formControl = ngControl.control;
        if (formControl) {
          const methodsToPatch = ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"];
          methodsToPatch.forEach((method) => {
            if (typeof formControl[method] !== "undefined") {
              const oldFn = formControl[method].bind(formControl);
              formControl[method] = (...params) => {
                oldFn(...params);
                setIonicClasses(this.elementRef);
              };
            }
          });
        }
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _ValueAccessor, deps: [{ token: Injector }, { token: ElementRef }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: _ValueAccessor, host: { listeners: { "ionBlur": "_handleBlurEvent($event.target)" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: ValueAccessor, decorators: [{
      type: Directive
    }], ctorParameters: function() {
      return [{ type: Injector }, { type: ElementRef }];
    }, propDecorators: { _handleBlurEvent: [{
      type: HostListener,
      args: ["ionBlur", ["$event.target"]]
    }] } });
    setIonicClasses = (element) => {
      raf(() => {
        const input = element.nativeElement;
        const hasValue = input.value != null && input.value.toString().length > 0;
        const classes = getClasses(input);
        setClasses(input, classes);
        const item = input.closest("ion-item");
        if (item) {
          if (hasValue) {
            setClasses(item, [...classes, "item-has-value"]);
          } else {
            setClasses(item, classes);
          }
        }
      });
    };
    getClasses = (element) => {
      const classList = element.classList;
      const classes = [];
      for (let i = 0; i < classList.length; i++) {
        const item = classList.item(i);
        if (item !== null && startsWith(item, "ng-")) {
          classes.push(`ion-${item.substring(3)}`);
        }
      }
      return classes;
    };
    setClasses = (element, classes) => {
      const classList = element.classList;
      classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
      classList.add(...classes);
    };
    startsWith = (input, search) => {
      return input.substring(0, search.length) === search;
    };
    BACK_BUTTON_INPUTS = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"];
    IonBackButton = class IonBackButton2 {
      routerOutlet;
      navCtrl;
      config;
      r;
      z;
      el;
      constructor(routerOutlet, navCtrl, config2, r, z, c) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.config = config2;
        this.r = r;
        this.z = z;
        c.detach();
        this.el = this.r.nativeElement;
      }
      /**
       * @internal
       */
      onClick(ev) {
        const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
        if (this.routerOutlet?.canGoBack()) {
          this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
          this.routerOutlet.pop();
          ev.preventDefault();
        } else if (defaultHref != null) {
          this.navCtrl.navigateBack(defaultHref, { animation: this.routerAnimation });
          ev.preventDefault();
        }
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonBackButton2, deps: [{ token: IonRouterOutlet, optional: true }, { token: NavController }, { token: Config }, { token: ElementRef }, { token: NgZone }, { token: ChangeDetectorRef }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: IonBackButton2, inputs: { color: "color", defaultHref: "defaultHref", disabled: "disabled", icon: "icon", mode: "mode", routerAnimation: "routerAnimation", text: "text", type: "type" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: core_exports });
    };
    IonBackButton = __decorate([
      ProxyCmp({
        inputs: BACK_BUTTON_INPUTS
      })
    ], IonBackButton);
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonBackButton, decorators: [{
      type: Directive,
      args: [{
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: BACK_BUTTON_INPUTS
      }]
    }], ctorParameters: function() {
      return [{ type: IonRouterOutlet, decorators: [{
        type: Optional
      }] }, { type: NavController }, { type: Config }, { type: ElementRef }, { type: NgZone }, { type: ChangeDetectorRef }];
    }, propDecorators: { onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }] } });
    NAV_INPUTS = ["animated", "animation", "root", "rootParams", "swipeGesture"];
    NAV_METHODS = [
      "push",
      "insert",
      "insertPages",
      "pop",
      "popTo",
      "popToRoot",
      "removeIndex",
      "setRoot",
      "setPages",
      "getActive",
      "getByIndex",
      "canGoBack",
      "getPrevious"
    ];
    IonNav = class IonNav2 {
      z;
      el;
      constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
        this.z = z;
        c.detach();
        this.el = ref.nativeElement;
        ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
        proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonNav2, deps: [{ token: ElementRef }, { token: EnvironmentInjector }, { token: Injector }, { token: AngularDelegate }, { token: NgZone }, { token: ChangeDetectorRef }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: IonNav2, inputs: { animated: "animated", animation: "animation", root: "root", rootParams: "rootParams", swipeGesture: "swipeGesture" }, ngImport: core_exports });
    };
    IonNav = __decorate([
      ProxyCmp({
        inputs: NAV_INPUTS,
        methods: NAV_METHODS
      })
    ], IonNav);
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonNav, decorators: [{
      type: Directive,
      args: [{
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: NAV_INPUTS
      }]
    }], ctorParameters: function() {
      return [{ type: ElementRef }, { type: EnvironmentInjector }, { type: Injector }, { type: AngularDelegate }, { type: NgZone }, { type: ChangeDetectorRef }];
    } });
    RouterLinkDelegateDirective = class _RouterLinkDelegateDirective {
      locationStrategy;
      navCtrl;
      elementRef;
      router;
      routerLink;
      routerDirection = "forward";
      routerAnimation;
      constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
        this.locationStrategy = locationStrategy;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
      }
      ngOnInit() {
        this.updateTargetUrlAndHref();
        this.updateTabindex();
      }
      ngOnChanges() {
        this.updateTargetUrlAndHref();
      }
      /**
       * The `tabindex` is set to `0` by default on the host element when
       * the `routerLink` directive is used. This causes issues with Ionic
       * components that wrap an `a` or `button` element, such as `ion-item`.
       * See issue https://github.com/angular/angular/issues/28345
       *
       * This method removes the `tabindex` attribute from the host element
       * to allow the Ionic component to manage the focus state correctly.
       */
      updateTabindex() {
        const ionicComponents = [
          "ION-BACK-BUTTON",
          "ION-BREADCRUMB",
          "ION-BUTTON",
          "ION-CARD",
          "ION-FAB-BUTTON",
          "ION-ITEM",
          "ION-ITEM-OPTION",
          "ION-MENU-BUTTON",
          "ION-SEGMENT-BUTTON",
          "ION-TAB-BUTTON"
        ];
        const hostElement = this.elementRef.nativeElement;
        if (ionicComponents.includes(hostElement.tagName)) {
          if (hostElement.getAttribute("tabindex") === "0") {
            hostElement.removeAttribute("tabindex");
          }
        }
      }
      updateTargetUrlAndHref() {
        if (this.routerLink?.urlTree) {
          const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
          this.elementRef.nativeElement.href = href;
        }
      }
      /**
       * @internal
       */
      onClick(ev) {
        this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
        ev.preventDefault();
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _RouterLinkDelegateDirective, deps: [{ token: LocationStrategy }, { token: NavController }, { token: ElementRef }, { token: Router }, { token: RouterLink, optional: true }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: _RouterLinkDelegateDirective, selector: ":not(a):not(area)[routerLink]", inputs: { routerDirection: "routerDirection", routerAnimation: "routerAnimation" }, host: { listeners: { "click": "onClick($event)" } }, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: RouterLinkDelegateDirective, decorators: [{
      type: Directive,
      args: [{
        selector: ":not(a):not(area)[routerLink]"
      }]
    }], ctorParameters: function() {
      return [{ type: LocationStrategy }, { type: NavController }, { type: ElementRef }, { type: Router }, { type: RouterLink, decorators: [{
        type: Optional
      }] }];
    }, propDecorators: { routerDirection: [{
      type: Input
    }], routerAnimation: [{
      type: Input
    }], onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }] } });
    RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective {
      locationStrategy;
      navCtrl;
      elementRef;
      router;
      routerLink;
      routerDirection = "forward";
      routerAnimation;
      constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
        this.locationStrategy = locationStrategy;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
      }
      ngOnInit() {
        this.updateTargetUrlAndHref();
      }
      ngOnChanges() {
        this.updateTargetUrlAndHref();
      }
      updateTargetUrlAndHref() {
        if (this.routerLink?.urlTree) {
          const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
          this.elementRef.nativeElement.href = href;
        }
      }
      /**
       * @internal
       */
      onClick() {
        this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _RouterLinkWithHrefDelegateDirective, deps: [{ token: LocationStrategy }, { token: NavController }, { token: ElementRef }, { token: Router }, { token: RouterLink, optional: true }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: _RouterLinkWithHrefDelegateDirective, selector: "a[routerLink],area[routerLink]", inputs: { routerDirection: "routerDirection", routerAnimation: "routerAnimation" }, host: { listeners: { "click": "onClick()" } }, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: RouterLinkWithHrefDelegateDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "a[routerLink],area[routerLink]"
      }]
    }], ctorParameters: function() {
      return [{ type: LocationStrategy }, { type: NavController }, { type: ElementRef }, { type: Router }, { type: RouterLink, decorators: [{
        type: Optional
      }] }];
    }, propDecorators: { routerDirection: [{
      type: Input
    }], routerAnimation: [{
      type: Input
    }], onClick: [{
      type: HostListener,
      args: ["click"]
    }] } });
    IonTabs = class _IonTabs {
      navCtrl;
      tabsInner;
      /**
       * Emitted before the tab view is changed.
       */
      ionTabsWillChange = new EventEmitter();
      /**
       * Emitted after the tab view is changed.
       */
      ionTabsDidChange = new EventEmitter();
      tabBarSlot = "bottom";
      hasTab = false;
      selectedTab;
      leavingTab;
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
      }
      ngAfterViewInit() {
        const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
        if (firstTab) {
          this.hasTab = true;
          this.setActiveTab(firstTab.tab);
          this.tabSwitch();
        }
      }
      ngAfterContentInit() {
        this.detectSlotChanges();
      }
      ngAfterContentChecked() {
        this.detectSlotChanges();
      }
      /**
       * @internal
       */
      onStackWillChange({ enteringView, tabSwitch }) {
        const stackId = enteringView.stackId;
        if (tabSwitch && stackId !== void 0) {
          this.ionTabsWillChange.emit({ tab: stackId });
        }
      }
      /**
       * @internal
       */
      onStackDidChange({ enteringView, tabSwitch }) {
        const stackId = enteringView.stackId;
        if (tabSwitch && stackId !== void 0) {
          if (this.tabBar) {
            this.tabBar.selectedTab = stackId;
          }
          this.ionTabsDidChange.emit({ tab: stackId });
        }
      }
      /**
       * When a tab button is clicked, there are several scenarios:
       * 1. If the selected tab is currently active (the tab button has been clicked
       *    again), then it should go to the root view for that tab.
       *
       *   a. Get the saved root view from the router outlet. If the saved root view
       *      matches the tabRootUrl, set the route view to this view including the
       *      navigation extras.
       *   b. If the saved root view from the router outlet does
       *      not match, navigate to the tabRootUrl. No navigation extras are
       *      included.
       *
       * 2. If the current tab tab is not currently selected, get the last route
       *    view from the router outlet.
       *
       *   a. If the last route view exists, navigate to that view including any
       *      navigation extras
       *   b. If the last route view doesn't exist, then navigate
       *      to the default tabRootUrl
       */
      select(tabOrEvent) {
        const isTabString = typeof tabOrEvent === "string";
        const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
        if (this.hasTab) {
          this.setActiveTab(tab);
          this.tabSwitch();
          return;
        }
        const alreadySelected = this.outlet.getActiveStackId() === tab;
        const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
        if (!isTabString) {
          tabOrEvent.stopPropagation();
        }
        if (alreadySelected) {
          const activeStackId = this.outlet.getActiveStackId();
          const activeView = this.outlet.getLastRouteView(activeStackId);
          if (activeView?.url === tabRootUrl) {
            return;
          }
          const rootView = this.outlet.getRootView(tab);
          const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
          return this.navCtrl.navigateRoot(tabRootUrl, __spreadProps(__spreadValues({}, navigationExtras), {
            animated: true,
            animationDirection: "back"
          }));
        } else {
          const lastRoute = this.outlet.getLastRouteView(tab);
          const url = lastRoute?.url || tabRootUrl;
          const navigationExtras = lastRoute?.savedExtras;
          return this.navCtrl.navigateRoot(url, __spreadProps(__spreadValues({}, navigationExtras), {
            animated: true,
            animationDirection: "back"
          }));
        }
      }
      setActiveTab(tab) {
        const tabs = this.tabs;
        const selectedTab = tabs.find((t) => t.tab === tab);
        if (!selectedTab) {
          console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
          return;
        }
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({ tab });
        selectedTab.el.active = true;
      }
      tabSwitch() {
        const { selectedTab, leavingTab } = this;
        if (this.tabBar && selectedTab) {
          this.tabBar.selectedTab = selectedTab.tab;
        }
        if (leavingTab?.tab !== selectedTab?.tab) {
          if (leavingTab?.el) {
            leavingTab.el.active = false;
          }
        }
        if (selectedTab) {
          this.ionTabsDidChange.emit({ tab: selectedTab.tab });
        }
      }
      getSelected() {
        if (this.hasTab) {
          return this.selectedTab?.tab;
        }
        return this.outlet.getActiveStackId();
      }
      /**
       * Detects changes to the slot attribute of the tab bar.
       *
       * If the slot attribute has changed, then the tab bar
       * should be relocated to the new slot position.
       */
      detectSlotChanges() {
        this.tabBars.forEach((tabBar) => {
          const currentSlot = tabBar.el.getAttribute("slot");
          if (currentSlot !== this.tabBarSlot) {
            this.tabBarSlot = currentSlot;
            this.relocateTabBar();
          }
        });
      }
      /**
       * Relocates the tab bar to the new slot position.
       */
      relocateTabBar() {
        const tabBar = this.tabBar.el;
        if (this.tabBarSlot === "top") {
          this.tabsInner.nativeElement.before(tabBar);
        } else {
          this.tabsInner.nativeElement.after(tabBar);
        }
      }
      /** @nocollapse */
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: _IonTabs, deps: [{ token: NavController }], target: FactoryTarget.Directive });
      /** @nocollapse */
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: _IonTabs, selector: "ion-tabs", outputs: { ionTabsWillChange: "ionTabsWillChange", ionTabsDidChange: "ionTabsDidChange" }, host: { listeners: { "ionTabButtonClick": "select($event)" } }, viewQueries: [{ propertyName: "tabsInner", first: true, predicate: ["tabsInner"], descendants: true, read: ElementRef, static: true }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: core_exports, type: IonTabs, decorators: [{
      type: Directive,
      args: [{
        selector: "ion-tabs"
      }]
    }], ctorParameters: function() {
      return [{ type: NavController }];
    }, propDecorators: { tabsInner: [{
      type: ViewChild,
      args: ["tabsInner", { read: ElementRef, static: true }]
    }], ionTabsWillChange: [{
      type: Output
    }], ionTabsDidChange: [{
      type: Output
    }], select: [{
      type: HostListener,
      args: ["ionTabButtonClick", ["$event"]]
    }] } });
    OverlayBaseController = class {
      ctrl;
      constructor(ctrl) {
        this.ctrl = ctrl;
      }
      /**
       * Creates a new overlay
       */
      create(opts) {
        return this.ctrl.create(opts || {});
      }
      /**
       * When `id` is not provided, it dismisses the top overlay.
       */
      dismiss(data, role, id) {
        return this.ctrl.dismiss(data, role, id);
      }
      /**
       * Returns the top overlay.
       */
      getTop() {
        return this.ctrl.getTop();
      }
    };
  }
});

export {
  getTimeGivenProgression,
  init_cubic_bezier,
  isPlatform,
  getIonMode,
  init_ionic_global,
  sanitizeDOMString,
  ENABLE_HTML_CONTENT_DEFAULT,
  init_config,
  hostContext,
  createColorClasses,
  getClassMap,
  openURL,
  init_theme,
  menuController,
  init_index5,
  attachComponent,
  detachComponent,
  CoreDelegate,
  init_framework_delegate,
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
  init_overlays,
  init_components,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validators,
  MaxValidator,
  MinValidator,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  init_forms,
  MenuController,
  NavController,
  Config,
  ConfigToken,
  AngularDelegate,
  ProxyCmp,
  IonModal,
  IonPopover,
  IonRouterOutlet,
  provideComponentInputBinding,
  raf,
  ValueAccessor,
  setIonicClasses,
  IonBackButton,
  IonNav,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  IonTabs,
  OverlayBaseController,
  init_ionic_angular_common
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v20.3.10
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@ionic/core/components/cubic-bezier.js:
@ionic/core/components/ionic-global.js:
@ionic/core/components/config.js:
@ionic/core/components/theme.js:
@ionic/core/components/index5.js:
@ionic/core/components/framework-delegate.js:
@ionic/core/components/overlays.js:
@ionic/core/components/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-EZQEONKP.js.map
