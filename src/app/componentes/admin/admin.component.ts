import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../services/notificaciones.service';
import { NotificacionesInterface } from '../../models/notificaciones';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  notificaciones: NotificacionesInterface[];
  editState: boolean = false;
  notificacionToEdit: NotificacionesInterface;
  tipoEvento: String;
  colorRed: boolean = false;
  colorGreen: boolean = false;
  notificacion: NotificacionesInterface;

  constructor(
    private notificacionesService: NotificacionesService
  ) { }

  ngOnInit() { 
    this.AllNotificaciones();
    this.colorSpan(); 
  }
  // Llama a todos los registros de l a tabla <notificaciones> a través del método en el servicio.
  AllNotificaciones(){
    this.notificacionesService.getAnuncios().subscribe(notificaciones => this.notificaciones = notificaciones)
  }

  // Es invocado cuando se da click en botón Actualizar.
  onUpdateNotificacion(notificacion: NotificacionesInterface){
  this.notificacionesService.updAnuncio(notificacion);
  this.clearState();
  }

  // Es invocado cuando se da click en el ícono editar.
  editNotificacion(event, notificacion:NotificacionesInterface){
    this.editState = true;
    this.notificacionToEdit = notificacion;
  }

  // Cambia el valor de editState a false y borra el id de la notificacion
  clearState(){
    this.editState = false;
    this.notificacionToEdit = null;
  }

  // Elimina la notificación por el ID
  deleteNotificacion(event, notificacion:NotificacionesInterface){
    this.notificacionesService.delAnuncio(notificacion);
    this.clearState();
  }

  colorSpan(){
    this.tipoEvento = this.notificacion.tipo;
    if (this.tipoEvento == "Informativo") {
      this.colorRed = true;
      this.colorGreen = false;
      console.log("Rojo" + this.tipoEvento);
    }if (this.tipoEvento == "Anuncio") {
      this.colorRed = false;
      this.colorGreen = true;
      console.log("No Rojo" + this.tipoEvento);
    }

  }



}
