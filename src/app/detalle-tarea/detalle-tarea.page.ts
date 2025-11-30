import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

// Definición de tipos para las claves de color de la nota
type NoteColorKey = 'sun' | 'sky' | 'mint' | 'lavender' | 'peach' | 'gray';


/**
 * Componente para mostrar y gestionar el detalle de una tarea.
 * Permite tomar fotos, obtener ubicación y cambiar el estado de la tarea.
 */
@Component({
    selector: 'app-detalle-tarea',
    standalone: true,
    templateUrl: './detalle-tarea.page.html',
    styleUrls: ['./detalle-tarea.page.scss'],
    imports: [CommonModule, IonicModule]
})
export class DetalleTareaPage implements OnInit {
    // La tarea actual cargada
    tarea: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController
    ) {}

    /**
     * Ciclo de vida de Angular. Carga la tarea al iniciar el componente.
     */
    ngOnInit() {
        this.cargarTarea();
    }

    /**
     * Ciclo de vida de Ionic. Se ejecuta cada vez que la vista va a ser visible,
     * asegurando que los datos se recarguen (ej. al volver de editar).
     */
    ionViewWillEnter() {
        this.cargarTarea();
    }

    /**
     * Obtiene el color de fondo de la nota basado en la clave.
     * @param c Clave de color opcional.
     * @returns Estilo CSS con el color de fondo.
     */

    /**
     * Carga la tarea desde el localStorage utilizando el 'id' de la URL.
     */
    cargarTarea() {
        // Obtiene el ID de los parámetros de la ruta
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // Carga todas las tareas guardadas
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        // Busca la tarea por ID
        this.tarea = tareasGuardadas.find((t: any) => t.id === id);

        // Opcional: Redirigir si la tarea no existe
        if (!this.tarea) {
            this.router.navigate(['/home']);
        }
    }

    /**
     * Guarda la versión actualizada de la tarea en localStorage.
     */
    private guardarTareaActualizada() {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        const index = tareasGuardadas.findIndex((t: any) => t.id === this.tarea.id);
        if (index !== -1) {
            tareasGuardadas[index] = this.tarea;
            localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        }
    }

    /**
     * Usa la cámara para tomar una foto y la guarda en la tarea.
     */
    async tomarFoto() {
        try {
            const image = await Camera.getPhoto({
                quality: 70,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera, 
            });

            if (image && image.dataUrl) {
                // Se usa 'fotoData' para ser consistente con el método borrarFoto
                this.tarea.fotoData = image.dataUrl;
                this.guardarTareaActualizada();

                const toast = await this.toastCtrl.create({
                    message: 'Foto guardada en la tarea',
                    duration: 2000,
                    color: 'success',
                });
                await toast.present();
            }
        } catch (err) {
            console.error('[Camera] Error', err);
            const toast = await this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                color: 'danger',
            });
            await toast.present();
        }
    } // <--- Cierre de tomarFoto()

    /**
     * Elimina la foto asociada a la tarea.
     * Se cambió 'foto' por 'fotoData' para consistencia.
     */
    async borrarFoto() {
        if (!this.tarea) return;

        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        const index = tareasGuardadas.findIndex((t: any) => t.id === this.tarea.id);

        if (index !== -1) {
            // Usamos 'fotoData' para ser consistente con tomarFoto()
            tareasGuardadas[index].fotoData = null;
            localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

            this.tarea.fotoData = null;

            const toast = await this.toastCtrl.create({
                message: 'Foto eliminada correctamente',
                duration: 2000,
                color: 'warning'
            });
            await toast.present();
        } 
    }

    /**
     * Obtiene la ubicación GPS actual y la guarda en la tarea.
     */
    async obtenerUbicacion() {
        try {
            const position = await Geolocation.getCurrentPosition();

            this.tarea.lat = position.coords.latitude;
            this.tarea.lng = position.coords.longitude;
            this.guardarTareaActualizada();

            const toast = await this.toastCtrl.create({
                message: 'Ubicación guardada en la tarea',
                duration: 2000,
                color: 'success',
            });
            await toast.present();
        } catch (err) {
            console.error('[Geo] Error', err);
            const toast = await this.toastCtrl.create({
                message: 'No se pudo obtener la ubicación',
                duration: 2000,
                color: 'danger',
            });
            await toast.present();
        }
    }

    /**
     * Abre Google Maps con las coordenadas guardadas de la tarea.
     */
    verEnMapa() {
        if (!this.tarea?.lat || !this.tarea?.lng) { return; }
        const url = `https://www.google.com/maps?q=${this.tarea.lat},${this.tarea.lng}`;
        window.open(url, '_blank');
    }

    /**
     * Navega de vuelta a la página de inicio.
     */
    volver() {
        this.router.navigate(['/home']);
    }

    /**
     * Cambia el estado de completada de la tarea y lo guarda.
     */
    toggleEstado() {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        const index = tareasGuardadas.findIndex((t: any) => t.id === this.tarea.id);
        
        if (index !== -1) {
            // Actualiza el estado y la fecha de actualización
            tareasGuardadas[index].completada = !tareasGuardadas[index].completada;
            tareasGuardadas[index].updatedAt = new Date().toISOString();
            
            localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
            
            // Actualiza la tarea en el componente
            this.tarea.completada = tareasGuardadas[index].completada;
            this.tarea.updatedAt = tareasGuardadas[index].updatedAt;
        }
    }

    /**
     * Navega a la página de edición de la tarea.
     */
    editar() {
        this.router.navigate(['/editar-tarea', this.tarea.id]);
    }

    /**
     * Muestra una alerta de confirmación antes de eliminar la tarea.
     */
    async eliminar() {
        const alerta = await this.alertCtrl.create({
            header: 'Confirmar eliminación',
            message: '¿Estás seguro de que deseas eliminar esta tarea?',
            buttons: [
                { text: 'Cancelar', role: 'cancel' },
                {
                    text: 'Eliminar',
                    handler: async () => {
                        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
                        const nuevasTareas = tareasGuardadas.filter((t: any) => t.id !== this.tarea.id);
                        localStorage.setItem('tareas', JSON.stringify(nuevasTareas));

                        const toast = await this.toastCtrl.create({
                            message: 'Tarea eliminada correctamente',
                            duration: 2000,
                            color: 'danger'
                        });
                        await toast.present();

                        this.router.navigate(['/home']);
                    }
                }
            ]
        });

        await alerta.present();
    }
}