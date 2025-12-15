import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { SqliteService } from './services/sqlite.service';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const sqliteSpy = jasmine.createSpyObj('SqliteService', ['init']);
    sqliteSpy.init.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        { provide: SqliteService, useValue: sqliteSpy }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
