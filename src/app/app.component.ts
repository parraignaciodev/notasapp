import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SqliteService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  constructor(private sqlite: SqliteService) {}

  async ngOnInit() {
    try {
      // Inicializa la BD SQLite al iniciar la app
      await this.sqlite.init();
      console.log('[SQLite] Base de datos inicializada correctamente');
    } catch (err) {
      console.error('[SQLite] Error al inicializar la base de datos', err);
    }
  }
}

