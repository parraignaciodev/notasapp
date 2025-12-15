import {
  AuthService,
  init_auth_service
} from "./chunk-QNTI7TWP.js";
import {
  Router,
  init_router
} from "./chunk-WNDC6VOT.js";
import "./chunk-FQVLKWB7.js";
import "./chunk-U5XN6XWG.js";
import {
  TestBed,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  inject,
  map,
  of,
  take
} from "./chunk-GKFQG4U6.js";
import "./chunk-WLDIRXGG.js";

// src/app/guards/auth.guard.spec.ts
init_testing();
init_router();

// src/app/guards/auth.guard.ts
init_core();
init_router();
init_auth_service();
init_operators();
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.usuario$.pipe(
    take(1),
    // nos quedamos con el último valor
    map((usuario) => {
      if (usuario) {
        return true;
      } else {
        router.navigate(["/login"]);
        return false;
      }
    })
  );
};

// src/app/guards/auth.guard.spec.ts
init_auth_service();
init_esm();
describe("AuthGuard", () => {
  let authServiceSpy;
  let routerSpy;
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  beforeEach(() => {
    const authSpy = jasmine.createSpyObj("AuthService", [], {
      usuario$: of(null)
      // Default to not logged in
    });
    const rSpy = jasmine.createSpyObj("Router", ["navigate"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: rSpy }
      ]
    });
    authServiceSpy = TestBed.inject(AuthService);
    routerSpy = TestBed.inject(Router);
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
  it("should redirect to /login and return false if not logged in", (done) => {
    const result = executeGuard({}, {});
    if (result instanceof Promise) {
    } else {
      result.subscribe((res) => {
        expect(res).toBeFalse();
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
        done();
      });
    }
  });
  it("should allow access (return true) if logged in", (done) => {
    (Object.getOwnPropertyDescriptor(authServiceSpy, "usuario$")?.get).and.returnValue(of("testuser"));
    const result = executeGuard({}, {});
    result.subscribe((res) => {
      expect(res).toBeTrue();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
      done();
    });
  });
});
//# sourceMappingURL=spec-auth.guard.spec.js.map
