import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { database } from 'firebase';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { IQuestao } from './../models/iquestao.model';

@Component({
  selector: 'app-visualizar-questoes',
  templateUrl: './visualizar-questoes.component.html',
  styleUrls: ['./visualizar-questoes.component.css']
})
export class VisualizarQuestoesComponent implements OnInit {

  nivel: string;
  pergunta: string;
  resposta: string;

  private cadatroQuestoes: AngularFirestoreCollection<IQuestao>;
  questao: Observable<IQuestao[]>;

  questaoCollectionRef: AngularFirestoreCollection<IQuestao>;
  questao$: Observable<IQuestao[]>;

  constructor(private db: AngularFirestore, private router: Router) {  }

  formCadastrarQuestao = new FormGroup({
    nivel: new FormControl('', Validators.required),
    pergunta: new FormControl('', Validators.required),
    resposta: new FormControl('', Validators.required)
  });

  cadastrarQuestao(questao: IQuestao) {
    this.db.collection('questoes').doc(this.pergunta).set({
    'nivel': this.nivel,
    'pergunta': this.pergunta,
    'resposta': this.resposta});
  }

  ngOnInit(): void {
    // this.questao = this.db.collection<Usuario>('questao').valueChanges();
    this.questaoCollectionRef = this.db.collection('questoes');
    this.questao = this.questaoCollectionRef.valueChanges();
  }

}
