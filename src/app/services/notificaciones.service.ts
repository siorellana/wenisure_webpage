import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { NotificacionesInterface } from '../models/notificaciones';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConsoleReporter } from 'jasmine';


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificacionesCollection: AngularFirestoreCollection<NotificacionesInterface>;
  notificaciones: Observable<NotificacionesInterface[]>;
  notificacionesDoc: AngularFirestoreDocument<NotificacionesInterface>;

  constructor(public afs: AngularFirestore) {

    this.notificaciones = afs.collection('notificaciones').valueChanges();

   }


   getAnuncios(){
     return this.notificaciones;
   }

   addAnuncio()  {
    console.log('Holi');
  }

  delAnuncio(){

  }

  updAnuncio(){

  }
}
