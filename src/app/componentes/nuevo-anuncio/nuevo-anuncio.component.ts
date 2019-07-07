import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { NotificacionesService } from '../../services/notificaciones.service';
import { NotificacionesInterface } from '../../models/notificaciones';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styleUrls: ['./nuevo-anuncio.component.scss']
})

export class NuevaNotificacionComponent implements OnInit{
  notificacion: NotificacionesInterface = {
    asunto:'',
    descripcion: '',
    formador: '',
    nivel: '',
    tipo: '',
    fecha: '',
  };

  constructor(
    private authService: AuthService,
    private notificacionService: NotificacionesService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onGuardarNotificacion(myForm: NgForm) {
    if (myForm.valid == true) {
      const fechaNow = Date.now();
      this.notificacion.fecha = fechaNow;
      this.notificacionService.addAnuncio(this.notificacion);
      this.router.navigate(['/admin']);
    }else{

    }

  }

}

  
  

