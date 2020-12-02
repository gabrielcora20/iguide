import { Component, OnInit } from '@angular/core';
import { userInfos } from 'src/environments/user-infos';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  constructor() { }

  grupos: any = []

  ngOnInit(): void {
    this.grupos = userInfos.grupos.filter(g => g.guiaResponsavel.id == userInfos.usuarioAtivo);
  }

}
