import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditGrupoComponent } from './components/guia/edit-grupo/edit-grupo.component';
import { GrupoComponent } from './components/guia/grupo/grupo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MeuGrupoComponent } from './components/turista/meu-grupo/meu-grupo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'edit-grupo/:id', component: EditGrupoComponent },
  { path: 'meu-grupo', component: MeuGrupoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
