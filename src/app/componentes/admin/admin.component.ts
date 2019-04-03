import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { AnuncioInterface } from '../../models/anuncio';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  anuncios: AnuncioInterface[];

  constructor(
    private anuncioService: AnuncioService
  ) { }

  ngOnInit() {
    this.AllAnuncios();
  }
  AllAnuncios(){
    this.anuncioService.getAllAnuncios().subscribe(anuncios => this.anuncios = anuncios)
  }

}
