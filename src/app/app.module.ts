import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { GrupoComponent } from './components/guia/grupo/grupo.component';
import { EditGrupoComponent } from './components/guia/edit-grupo/edit-grupo.component';
import { MeuGrupoComponent } from './components/turista/meu-grupo/meu-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GrupoComponent,
    EditGrupoComponent,
    MeuGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
