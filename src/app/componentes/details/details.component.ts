import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnuncioService } from '../../services/anuncio.service';
import { AnuncioInterface } from '../../models/anuncio';
import { Observable } from 'rxjs/Observable';
import { AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
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

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetallesAnuncio();
  }
  onComprobarUserLogin(){
    this.authService.getAuth().subscribe(user =>{
      if(user){
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  /*getDetallesAnuncio(){
    this.idAnuncio = this.route.snapshot.params['id'];
    this.anuncioService.getAnuncio(this.idAnuncio).subscribe(anuncio => this.anuncio = anuncio);
  }*/

  getDetallesAnuncio(){
    this.idAnuncio = this.route.snapshot.params['id'];
    this.anuncioService.getAnuncio(this.idAnuncio).subscribe(anuncio => {
      this.anuncio = anuncio;
    if(this.idUsuarioLogado == this.anuncio.userId){
      this.isOwner = true;
    }
  })
}

  onClickDelete(){
    if(confirm('Estás seguro?')){
      this.anuncioService.delAnuncio(this.anuncio);
      this.router.navigate(['/admin']);
    }
  }
}
