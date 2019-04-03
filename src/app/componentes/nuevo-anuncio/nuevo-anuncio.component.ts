import { Component, OnInit } from '@angular/core';
import { AnuncioInterface} from '../../models/anuncio';
import { AuthService } from '../../services/auth.service';
import { AnuncioService } from '../../services/anuncio.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-nuevo-anuncio',
  templateUrl: './nuevo-anuncio.component.html',
  styleUrls: ['./nuevo-anuncio.component.scss']
})
export class NuevoAnuncioComponent implements OnInit {
  anuncio: AnuncioInterface = {
  id: '',
  titulo: '',
  descripcion: '',
  contacto: '',
  tags: '',
  fechaPublicacion:'',
  userId:'',
  userNombre:''
  }

  constructor(
    private authService: AuthService,
    private anuncioService: AnuncioService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onGuardarAnuncio({ value }: {value: AnuncioInterface}) {
    value.fechaPublicacion = (new Date()).getTime();
    this.authService.getAuth().subscribe( user => {
      value.userNombre = user.displayName;
    });
    this.anuncioService.addAnuncio(value);
    this.router.navigate(['/']);
  }

}

  
  

