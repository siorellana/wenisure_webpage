import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { EditComponent } from './componentes/edit/edit.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { NuevoResidenteComponent } from './componentes/nuevo-residente/nuevo-residente.component';
import { AboutComponent } from './componentes/about/about.component';
import { DetailsComponent} from './componentes/details/details.component';
import { NuevaNotificacionComponent} from './componentes/nuevo-anuncio/nuevo-anuncio.component';
import { Privado2Component } from './componentes/privado2/privado2.component';

const routes: Routes = [
    {path: '', component: HomePageComponent },
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
    {path: 'privado2', component: Privado2Component, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
    {path: 'nuevo', component: NuevoResidenteComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
    {path: 'anuncio', component: NuevaNotificacionComponent,canActivate: [AuthGuard]},
    {path: '**', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
