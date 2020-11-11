import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuiaRotaComponent } from './components/guia/guia-rota/guia-rota.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GuiaComponent } from './components/turista/guia/guia.component';
import { RotaComponent } from './components/turista/rota/rota.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rota', component: RotaComponent },
  { path: 'guia', component: GuiaComponent },
  { path: 'rota-guia', component: GuiaRotaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
