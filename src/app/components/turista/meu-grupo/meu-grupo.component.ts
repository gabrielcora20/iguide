import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInfos } from 'src/environments/user-infos';

@Component({
  selector: 'app-meu-grupo',
  templateUrl: './meu-grupo.component.html',
  styleUrls: ['./meu-grupo.component.css']
})
export class MeuGrupoComponent implements OnInit {

  constructor(private router: Router) { }

  grupo: any = {}

  ngOnInit(): void {
    this.grupo = userInfos.turistas.filter(t => t.id == userInfos.usuarioAtivo)[0].meuGrupo;
  }

  saiDoGrupo(grupo){
    userInfos.grupos.map(g => {
      if(g.id == grupo.id)
        g.turistas = g.turistas.filter(t => t.id != userInfos.usuarioAtivo);
      return g;
    });

    userInfos.turistas.map(t => {
      if(t.id == userInfos.usuarioAtivo)
        t.meuGrupo = null;
      return t;
    });

    this.router.navigate(['/home']);
  }

}
