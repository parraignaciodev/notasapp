import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';
import { SqliteService } from '../services/sqlite.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', [], {
      usuario$: of('testuser')
    });
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const sqliteSpy = jasmine.createSpyObj('SqliteService', [], {
      isNative: false
    });

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authSpy },
        DatePipe,
        { provide: SqliteService, useValue: sqliteSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
