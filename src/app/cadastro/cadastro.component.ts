import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  image: ImageBitmap;
  nome: string;
  sobrenome: string;
  cargo: [
    { id: 1, cargo: 'Professor' },
    { id: 2, cargo: 'Diretor' },
    { id: 2, cargo: 'Coordenador' }
  ];
  dia: number;
  mes: number;
  ano: number;
  email: string;
  senha: string;
  selectedCargo: CadastroComponent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cargo: CadastroComponent): void {
    this.selectedCargo = cargo;
  }

}
