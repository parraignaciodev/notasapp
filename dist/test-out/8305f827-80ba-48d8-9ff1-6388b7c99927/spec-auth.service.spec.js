import {
  AuthService,
  init_auth_service
} from "./chunk-QNTI7TWP.js";
import {
  TestBed,
  init_testing
} from "./chunk-GKFQG4U6.js";
import "./chunk-WLDIRXGG.js";

// src/app/services/auth.service.spec.ts
init_testing();
init_auth_service();
describe("AuthService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "removeItem");
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("login() should save session", () => {
    const username = "testuser";
    service.login(username);
    expect(localStorage.setItem).toHaveBeenCalledWith("usuarioActual", "testuser");
    service.usuario$.subscribe((user) => {
      expect(user).toBe("testuser");
    });
  });
  it("logout() should clear session", () => {
    service.login("testuser");
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("usuarioActual");
    service.usuario$.subscribe((user) => {
      expect(user).toBeNull();
    });
  });
});
//# sourceMappingURL=spec-auth.service.spec.js.map
