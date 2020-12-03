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

  exibirBotaoMeuGrupo: boolean = false;
  exibirBotaoChat: boolean = false;
  conviteDisponivel: boolean = false;

  ngOnInit(): void {
    var turista = userInfos.turistas.filter(t => t.id == userInfos.usuarioAtivo)[0];

    if (turista.meuGrupo) {
      this.grupo = turista.meuGrupo;
      this.defineVisaoBotoes(turista);
    }
  }

  defineVisaoBotoes(turista) {
    this.exibirBotaoChat = turista.meuGrupo?.conviteAceito;
    this.exibirBotaoMeuGrupo = turista.meuGrupo?.conviteAceito;
    this.conviteDisponivel = turista.meuGrupo;
  }

  deslogar(): void {
    userInfos.logado = false;
  }

  aceitaConviteGrupo(grupo) {
    userInfos.turistas.forEach(t => {
      if (t.id == userInfos.usuarioAtivo) {
        t.meuGrupo.conviteAceito = true;
        this.defineVisaoBotoes(t);
      }
    });
  }

  recusaConviteGrupo(grupo) {
    userInfos.turistas.forEach(tM => {
      if (tM.id == userInfos.usuarioAtivo){
        tM.meuGrupo = null;
        this.defineVisaoBotoes(tM);
        
        userInfos.grupos.forEach(g => {
          g.turistas = g.turistas.filter(t => t.id != userInfos.usuarioAtivo);
        });
      }
    });

    this.grupo = null;
  }
}
