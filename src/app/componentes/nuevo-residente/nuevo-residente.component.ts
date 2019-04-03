import { Component, OnInit } from '@angular/core';
import { ResidenteInterface} from '../../models/residente';
import { AuthService } from '../../services/auth.service';
import { ResidenteService } from '../../services/residente.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-nuevo-residente',
  templateUrl: './nuevo-residente.component.html',
  styleUrls: ['./nuevo-residente.component.scss']
})
export class NuevoResidenteComponent implements OnInit {
  residente: ResidenteInterface = {
    Id: '',
    Nombre: '',
    Departamento: '',
    Telefono: '',
    Mail: '',
    TipoResidente: ''
  }

  constructor(
    private authService: AuthService,
    private residenteService: ResidenteService,
    private router: Router,
    public flashMensaje: FlashMessagesService

  ) { }

  ngOnInit() {
  }
  onGuardarResidente({ value }: {value: ResidenteInterface}) {
    value.FechaRegistro = (new Date()).getTime();
    this.authService.getAuth().subscribe( user => {
      value.AdminRegistro = user.displayName;
    });
    this.residenteService.addResidente(value);
    this.router.navigate(['/']);
  }

}
