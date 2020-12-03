import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userInfos } from 'src/environments/user-infos';

@Component({
  selector: 'app-edit-grupo',
  templateUrl: './edit-grupo.component.html',
  styleUrls: ['./edit-grupo.component.css']
})
export class EditGrupoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  adicaoTuristaAtiva: boolean = false;
  grupo: any = {};
  emailTurista: any;
  exibeBotaoEncerrar: boolean = false;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.grupo = userInfos.grupos.filter(g => g.id == params['id'])[0];

      if (!this.grupo)
        this.grupo = {
          turistas: []
        }

      this.grupo.id = userInfos.maiorIdGrupo + 1;

      userInfos.maiorIdGrupo = this.grupo.id;

      this.exibeBotaoEncerrar = !(params['id'] == "novo" || this.grupo.encerrado);
    });
  }

  salvarGrupo(grupo) {
    grupo.guiaResponsavel = userInfos.guias.filter(g => g.id == userInfos.usuarioAtivo)[0];

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == 'novo')
        userInfos.grupos.push(grupo);
    });

    this.router.navigate(['/grupo']);
  }

  adicionarTurista(emailTurista) {
    var turista = userInfos.turistas.filter(t => t.email == emailTurista)[0];

    if(turista.meuGrupo != null || turista.meuGrupo.id)
      return;

    if (turista)
      this.grupo.turistas.push(turista);

    turista.meuGrupo = this.grupo;

    turista.meuGrupo.conviteAceito = false;

    this.emailTurista = null;
  }

  removerTurista(turista) {
    userInfos.turistas.forEach(tM => {
      if (tM.id == turista.id)
        tM.meuGrupo = null;
    });

    this.grupo.turistas = this.grupo.turistas.filter(t => t.id != turista.id);
  }

  escondeAdicaoTurista() {
    this.adicaoTuristaAtiva = false;

    this.emailTurista = null;
  }

  exibeAdicaoTurista() {
    this.adicaoTuristaAtiva = true;

    this.emailTurista = null;
  }

  encerraGrupo(grupo) {
    grupo.encerrado = true;

    grupo.turistas.forEach(t => {
      userInfos.turistas.forEach(tM => {
        if (tM.id == t.id)
          tM.meuGrupo = null;
      });
    });

    userInfos.mensagens = [];

    this.router.navigate(['/grupo']);
  }
}
