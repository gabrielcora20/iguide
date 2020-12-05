import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInfos } from './../../../environments/user-infos'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {}
  tipoUsuario: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validaLogin(usuario: any): void {
    var turista = userInfos.turistas.filter(t => t.email == usuario.email && t.senha == usuario.senha)[0];

    if (turista) {
      userInfos.tipoUsuario = false;
      userInfos.logado = true;
      userInfos.homeListener.next(turista);
      userInfos.usuarioAtivo = turista.id;
      this.router.navigate(['/home']);
    }

    var guia = userInfos.guias.filter(g => g.email == usuario.email && g.senha == usuario.senha)[0];

    if (guia) {
      userInfos.tipoUsuario = true;
      userInfos.logado = true;
      userInfos.usuarioAtivo = guia.id;
      this.router.navigate(['/home']);
    }
  }

  confirmaCadastroUsuario(usuario) {

    if (this.tipoUsuario == 'turista') {
      usuario.id = userInfos.maiorIdTurista + 1;
      userInfos.maiorIdTurista = usuario.id;
      userInfos.turistas.push(usuario);
    }
    else{
      usuario.id = userInfos.maiorIdGuia + 1;
      userInfos.maiorIdGuia = usuario.id;
      userInfos.guias.push(usuario);
    }
  }
}
