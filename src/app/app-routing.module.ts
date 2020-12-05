import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { EditGrupoComponent } from './components/guia/edit-grupo/edit-grupo.component';
import { GrupoComponent } from './components/guia/grupo/grupo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MeuGrupoComponent } from './components/turista/meu-grupo/meu-grupo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'edit-grupo/:id', component: EditGrupoComponent },
  { path: 'meu-grupo', component: MeuGrupoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
