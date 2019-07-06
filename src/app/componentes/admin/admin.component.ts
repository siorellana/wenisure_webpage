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

  constructor(
    private notificacionesService: NotificacionesService
  ) { }

  ngOnInit() {
    this.AllNotificaciones();
  }
  AllNotificaciones(){
    this.notificacionesService.getAnuncios().subscribe(notificaciones => this.notificaciones = notificaciones)
  }

}
