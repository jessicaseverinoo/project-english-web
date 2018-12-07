import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { database } from 'firebase';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ITurmas } from './../models/iturmas.model';

@Component({
  selector: 'app-visualizar-turmas',
  templateUrl: './visualizar-turmas.component.html',
  styleUrls: ['./visualizar-turmas.component.css']
})
export class VisualizarTurmasComponent implements OnInit {

  nomeEscola: string;
  ano: string;
  nivelEducacional: string;
  identificadorTurma: string;
  observacoesTurma: string;

  private cadatroTurmas: AngularFirestoreCollection<ITurmas>;
  turma: Observable<ITurmas[]>;

  turmaCollectionRef: AngularFirestoreCollection<ITurmas>;
  turma$: Observable<ITurmas[]>;

  constructor(private db: AngularFirestore, private router: Router) {  }

  formCadastrarTurma = new FormGroup({
    nomeEscola: new FormControl('', Validators.required),
    ano: new FormControl('', Validators.required),
    nivelEducacional: new FormControl('', Validators.required),
    identificadorTurma: new FormControl('', Validators.required),
    observacoesTurma: new FormControl('', Validators.required)
  });

  cadastrarTurma(turma: ITurmas) {
    this.db.collection('turmas').doc(this.identificadorTurma).set({
    'nomeEscola': this.nomeEscola,
    'ano': this.ano,
    'nivelEducacional': this.nivelEducacional,
    'identificadorTurma': this.identificadorTurma,
    'observacoesTurma': this.observacoesTurma});
  }

  ngOnInit(): void {
    // this.turma = this.db.collection<Usuario>('turma').valueChanges();
    this.turmaCollectionRef = this.db.collection('turmas');
    this.turma = this.turmaCollectionRef.valueChanges();
  }

}
