import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { IAlunos } from './../models/ialunos.models';
import { IQuestao } from './../models/iquestao.model';

@Component({
  selector: 'app-perfil-turma',
  templateUrl: './perfil-turma.component.html',
  styleUrls: ['./perfil-turma.component.css']
})
export class PerfilTurmaComponent implements OnInit {

  primeiroNome: string;
  ultimoNome: string;
  cargo: string;
  nomeEscola: string;
  dtNascimento: string;
  email: string;
  senha: string;
  confirmaSenha: string;

  nivel: string;
  pergunta: string;
  resposta: string;

  private contasAlunos: AngularFirestoreCollection<IAlunos>;
  alunos: Observable<IAlunos[]>;

  alunoCollectionRef: AngularFirestoreCollection<IAlunos>;
  alunos$: Observable<IAlunos[]>;

  private cadatroQuestoes: AngularFirestoreCollection<IQuestao>;
  questao: Observable<IQuestao[]>;

  questaoCollectionRef: AngularFirestoreCollection<IQuestao>;
  questao$: Observable<IQuestao[]>;

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

  formCadastrarQuestao = new FormGroup({
    nivel: new FormControl('', Validators.required),
    pergunta: new FormControl('', Validators.required),
    resposta: new FormControl('', Validators.required)
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

  cadastrarQuestao(questao: IQuestao) {
    this.db.collection('questoes').doc(this.pergunta).set({
    'nivel': this.nivel,
    'pergunta': this.pergunta,
    'resposta': this.resposta});
  }

  ngOnInit(): void {
    this.alunoCollectionRef = this.db.collection('alunos');
    this.alunos = this.alunoCollectionRef.valueChanges();

    // this.questao = this.db.collection<Usuario>('questao').valueChanges();
    this.questaoCollectionRef = this.db.collection('questoes');
    this.questao = this.questaoCollectionRef.valueChanges();
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
