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

    this.notificaciones = afs.collection('notificaciones').valueChanges();

   }

   getNotificaciones(){
     return this.notificaciones;
   }
}
