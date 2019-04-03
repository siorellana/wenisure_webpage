import { Injectable } from '@angular/core';
import { ResidenteInterface } from '../models/residente';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ResidenteService {
  residenteCollection: AngularFirestoreCollection<ResidenteInterface>;
  residenteDoc: AngularFirestoreDocument<ResidenteInterface>;
  residentes: Observable<ResidenteInterface[]>;
  residente: Observable<ResidenteInterface>;
  constructor(
    private afs: AngularFirestore) {
      this.residenteCollection = this.afs.collection('residentes', ref => ref);
    }

  addResidente(residente: ResidenteInterface)  {
    this.residenteCollection.add(residente);
    return residente.Id;
  }

  getAllResidentes(): Observable<ResidenteInterface[]> {
    this.residentes = this.residenteCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ResidenteInterface;
        data.Id = action.payload.doc.id;
        return data;
      });
    });
    return this.residentes;
  }

  getResidente(idResidente: string)  {
    this.residenteDoc = this.afs.doc<ResidenteInterface>(`residentes/${idResidente}`);
    this.residente = this.residenteDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ResidenteInterface;
        data.Id = action.payload.id;
        return data;
      }
      });
    return this.residente;
  }

  updResidente(residente: ResidenteInterface)  {
    this.residenteDoc = this.afs.doc<ResidenteInterface>(`residentes/${residente.Id}`);
    this.residenteDoc.update(residente);
  }


  delResidente(residente: ResidenteInterface)  {
    this.residenteDoc = this.afs.doc<ResidenteInterface>(`residentes/${residente.Id}`);
    this.residenteDoc.delete();
  }

  }


