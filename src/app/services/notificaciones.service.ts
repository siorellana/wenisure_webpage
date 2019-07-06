import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { NotificacionesInterface } from '../models/notificaciones';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificacionesCollection: AngularFirestoreCollection<NotificacionesInterface>;
  notificaciones: Observable<NotificacionesInterface[]>;
  notificacionesDoc: AngularFirestoreDocument<NotificacionesInterface>;

  constructor(public afs: AngularFirestore) {

    //this.notificaciones = afs.collection('notificaciones').valueChanges();
    this.notificacionesCollection = afs.collection<NotificacionesInterface>('notificaciones');
    this.notificaciones = this.notificacionesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as NotificacionesInterface;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
   }


   getAnuncios() {
     return this.notificaciones;
   }

   addAnuncio( anuncio: NotificacionesInterface) {
    console.log('Holi');
    this.notificacionesCollection.add(anuncio);
  }

  delAnuncio() {

  }

  updAnuncio() {

  }
}
