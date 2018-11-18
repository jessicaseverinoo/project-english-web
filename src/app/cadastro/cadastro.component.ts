import { from } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { Pessoa } from './../Pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  /*constructor(
    public primeiroNome: string,
    public ultimoNome: string,
    public cargo: string,
    public nomeEscola: string,
    public dtNascimento: string,
    public email: string,
    public senha: string,
    public confirmaSenha: string
  ) { }*/

  constructor( ) { }

  formularioCadastro = new FormGroup ({
    primeiroNome: new FormControl(''),
    ultimoNome: new FormControl(''),
    cargo: new FormControl(''),
    nomeEscola: new FormControl(''),
    dtNascimento: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmaSenha: new FormControl('')
  });

  ngOnInit() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formularioCadastro.value);
  }

  updateProfile() {
    this.formularioCadastro.patchValue({
      primeiroNome: 'Jessica',
      ultimoNome: 'Severino',
      cargo: 'Professora',
      escola: 'IFSP Catanduva',
      dtNascimento: '27/04/1993',
      email: 'jessica.severino@aluno.ifsp.edu.br',
      senha: 'admin123',
      confirmaSenha: 'admin123'
    });
  }

}
