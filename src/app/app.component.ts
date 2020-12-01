import { Component } from '@angular/core';
import { userInfos } from '../environments/user-infos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iguide';

  grupo: any = {};

  userInfos = userInfos;

  deslogar(): void{
    userInfos.logado = false;
  }
}
