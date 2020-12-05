import { Component, OnInit } from '@angular/core';
import { userInfos } from 'src/environments/user-infos';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  userInfos = userInfos;

  ngOnInit(): void {
  }

}
