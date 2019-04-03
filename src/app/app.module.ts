import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './services/auth.service';
import { AuthGuard} from './guards/auth.guard';
import { ResidenteService } from './services/residente.service';
import { AnuncioService } from './services/anuncio.service';

import { environment } from '../environments/environment';
import { AboutComponent } from './componentes/about/about.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { NuevoResidenteComponent } from './componentes/nuevo-residente/nuevo-residente.component';
import { EditComponent } from './componentes/edit/edit.component';
import { DetailsComponent} from './componentes/details/details.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NuevoAnuncioComponent } from './componentes/nuevo-anuncio/nuevo-anuncio.component';
import { Privado2Component } from './componentes/privado2/privado2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    AboutComponent,
    AdminComponent,
    NuevoResidenteComponent,
    EditComponent,
    DetailsComponent,
    FooterComponent,
    NuevoAnuncioComponent,
    Privado2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFireModule,
      AngularFirestoreModule,
      HttpClientModule,
      FormsModule,
      FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ResidenteService, AnuncioService],
  bootstrap: [AppComponent],
})
export class AppModule { }
