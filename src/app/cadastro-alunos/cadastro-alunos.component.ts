import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { IAlunos } from './../models/ialunos.models';

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent implements OnInit {

  primeiroNome: string;
  ultimoNome: string;
  cargo: string;
  nomeEscola: string;
  dtNascimento: string;
  email: string;
  senha: string;
  confirmaSenha: string;

  private contasAlunos: AngularFirestoreCollection<IAlunos>;
  alunos: Observable<IAlunos[]>;

  alunoCollectionRef: AngularFirestoreCollection<IAlunos>;
  alunos$: Observable<IAlunos[]>;

  constructor(private db: AngularFirestore, private router: Router) {  }

  formularioCadastro = new FormGroup({
    primeiroNome: new FormControl('', Validators.required),
    ultimoNome: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    nomeEscola: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  criarAluno(aluno: IAlunos) {
    this.db.collection('alunos').doc(this.email).set({
    'primeiroNome': this.primeiroNome,
    'ultimoNome': this.ultimoNome,
    'dtNascimento': this.dtNascimento,
    'cargo': this.cargo,
    'nomeEscola': this.nomeEscola,
    'email': this.email,
    'senha': this.senha,
    'confirmaSenha': this.confirmaSenha});
  }

  ngOnInit(): void {
    this.alunoCollectionRef = this.db.collection('alunos');
    this.alunos = this.alunoCollectionRef.valueChanges();
  }

  login() {
    this.router.navigateByUrl('login');
  }

  clear() {
    this.primeiroNome = '';
    this.ultimoNome = '';
    this.cargo = '';
    this.nomeEscola = '';
    this.dtNascimento = '';
    this.email = '';
    this.senha = '';
    this.confirmaSenha = '';
  }

}
