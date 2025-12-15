// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Ionic Storage
import { IonicStorageModule } from '@ionic/storage-angular';

import { APP_CONFIG } from './app/config/app-config.token';
import { getAppConfig } from './app/config/app-config';

// Iconos Ionicons
import { addIcons } from 'ionicons';
import {
  add,
  trash,
  create,
  checkmark,
  calendarOutline,
  checkmarkCircle,
  arrowUndo,
  cameraOutline,
  trashOutline,
  cameraReverseOutline,
  locationOutline,
  navigateCircleOutline,
  mapOutline,
  alertCircleOutline,
} from 'ionicons/icons';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: APP_CONFIG, useValue: getAppConfig() },
    provideHttpClient(),
    importProvidersFrom(IonicStorageModule.forRoot()),
  ],
}).catch(err => console.error(err));

addIcons({
  add,
  trash,
  create,
  checkmark,
  calendarOutline,
  checkmarkCircle,
  arrowUndo,
  cameraOutline,
  trashOutline,
  cameraReverseOutline,
  locationOutline,
  navigateCircleOutline,
  mapOutline,
  alertCircleOutline,
});
