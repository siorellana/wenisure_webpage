import { Injectable } from '@angular/core';
import { AnuncioInterface} from '../models/anuncio';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncioCollection: AngularFirestoreCollection<AnuncioInterface>;
  anuncioDoc: AngularFirestoreDocument<AnuncioInterface>;
  anuncios: Observable<AnuncioInterface[]>;
  anuncio: Observable<AnuncioInterface>;
  constructor(
    private afs: AngularFirestore) {
      this.anuncioCollection = this.afs.collection('anuncios', ref => ref);
    }

  addAnuncio(anuncio: AnuncioInterface)  {
    this.anuncioCollection.add(anuncio);
    return anuncio.id;
  }

  getAllAnuncios(): Observable<AnuncioInterface[]> {
    this.anuncios = this.anuncioCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as AnuncioInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.anuncios;
  }

  getAnuncio(idAnuncio: string)  {
    this.anuncioDoc = this.afs.doc<AnuncioInterface>(`anuncios/${idAnuncio}`);
    this.anuncio = this.anuncioDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as AnuncioInterface;
        data.id = action.payload.id;
        return data;
      }
      });
    return this.anuncio;
  }

  updAnuncio(anuncio: AnuncioInterface)  {
    this.anuncioDoc = this.afs.doc<AnuncioInterface>(`anuncios/${anuncio.id}`);
    this.anuncioDoc.update(anuncio);
  }


  delAnuncio(anuncio: AnuncioInterface)  {
    this.anuncioDoc = this.afs.doc<AnuncioInterface>(`anuncios/${anuncio.id}`);
    this.anuncioDoc.delete();
  }

  }