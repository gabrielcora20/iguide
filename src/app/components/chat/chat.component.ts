import { Component, OnInit } from '@angular/core';
import { userInfos } from 'src/environments/user-infos';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  tipoUsuario: boolean = userInfos.tipoUsuario
  idUsuario: number = userInfos.usuarioAtivo
  nomeUsuario: any = ''

  conteudoMensagem: any = ''

  mensagens: any = []

  ngOnInit(): void {
    this.mensagens = userInfos.mensagens;

    if (this.tipoUsuario)
      this.nomeUsuario = userInfos.guias.filter(g => g.id == this.idUsuario).map(g => g.nome)[0];
    else
      this.nomeUsuario = userInfos.turistas.filter(g => g.id == this.idUsuario).map(g => g.nome)[0];
  }

  adicionaMensagem(conteudoMensagem) {
    userInfos.mensagens.push({
      "idUsuario": this.idUsuario,
      "tipoUsuario": this.tipoUsuario,
      "usuario": this.nomeUsuario,
      "texto": conteudoMensagem
    });

    this.conteudoMensagem = "";
  }
}
