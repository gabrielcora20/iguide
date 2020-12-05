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
  numeroMensagens: number = 0;

  ngOnInit(): void {

    userInfos.homeListener.subscribe(t => {
      if (turista) {
        this.grupo = turista.meuGrupo;
        this.defineVisaoBotoes(t);
      }
      else {
        this.grupo = null;
        this.defineVisaoBotoes(t);
      }
    });

    var turista = userInfos.turistas.filter(t => t.id == userInfos.usuarioAtivo)[0];

    if (turista.meuGrupo) {
      userInfos.homeListener.next(turista);
    }
  }

  defineVisaoBotoes(turista) {
    this.exibirBotaoChat = turista.meuGrupo?.conviteAceito;
    this.exibirBotaoMeuGrupo = turista.meuGrupo?.conviteAceito;
    this.conviteDisponivel = turista.meuGrupo;
    this.numeroMensagens = userInfos.mensagens.length;
  }

  deslogar(): void {
    userInfos.logado = false;
  }

  aceitaConviteGrupo(grupo) {
    userInfos.turistas.forEach(t => {
      if (t.id == userInfos.usuarioAtivo) {
        t.meuGrupo.conviteAceito = true;
        // this.defineVisaoBotoes(t);
        userInfos.homeListener.next(t);
      }
    });
  }

  recusaConviteGrupo(grupo) {
    userInfos.turistas.forEach(tM => {
      if (tM.id == userInfos.usuarioAtivo) {
        tM.meuGrupo = null;
        userInfos.homeListener.next(tM);

        userInfos.grupos.forEach(g => {
          g.turistas = g.turistas.filter(t => t.id != userInfos.usuarioAtivo);
        });
      }
    });

    this.grupo = null;
  }
}
