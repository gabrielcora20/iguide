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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validaLogin(usuario: any): void {
    // console.log(this.usuario);
    if (usuario.email && usuario.email.includes('turista'))
      userInfos.tipoUsuario = false;
    else
      userInfos.tipoUsuario = true;

    userInfos.logado = true;

    this.router.navigate(['/home']);
  }
}
