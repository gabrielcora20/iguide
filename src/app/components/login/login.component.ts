import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  validaLogin(): void{
    console.log(this.usuario);
    this.router.navigate(['/home']);
  }

}
