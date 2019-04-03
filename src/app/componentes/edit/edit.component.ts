import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AnuncioService } from '../../services/anuncio.service';
import { AnuncioInterface } from '../../models/anuncio';
import { Observable } from 'rxjs/Observable';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

idAnuncio: string; 
idUsuarioLogado: string;
isOwner: boolean = false;
anuncio: AnuncioInterface = {
  id:'',
  titulo:'',
  descripcion:'',
  contacto:'',
  tags:'',
  fechaPublicacion:'',
  userId:'',
  userNombre:''
}

  constructor(
    private anuncioService: AnuncioService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(  ) {
    this.getDetallesAnuncio();

  }

  getDetallesAnuncio(){
    this.idAnuncio = this.route.snapshot.params['id'];
    this.anuncioService.getAnuncio(this.idAnuncio).subscribe(anuncio => this.anuncio = anuncio);
  }

  onModificarAnuncio({value}:{value: AnuncioInterface}){
    value.id = this.idAnuncio;
    this.anuncioService.updAnuncio(value);
    this.router.navigate(['/details/'+this.idAnuncio]);
  }

}
