import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-grupo',
  templateUrl: './meu-grupo.component.html',
  styleUrls: ['./meu-grupo.component.css']
})
export class MeuGrupoComponent implements OnInit {

  constructor() { }

  grupo: any = {
    nome: 'Ibirapuera',
    descricao: 'Passeio ao Parque do Ibirapuera'
  }

  ngOnInit(): void {
  }

}
