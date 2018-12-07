import { FormGroup } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IQuestao } from './../models/iquestao.model';
import { Observable } from 'rxjs';
import { FRASES, PerguntasERespostas } from './resolver-questoes-questoes';
import { Questao } from './resolver-questoes.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


export const QUESTOES: Questao[] = [
  { pergunta: 'I like to learn', resposta: 'Eu gosto de aprender' },
  { pergunta: 'I watch tv', resposta: 'Eu assisto tv' },
  { pergunta: 'How are you?', resposta: 'Como vai você?' },
  { pergunta: 'I eat bread', resposta: 'Eu como pão' }
];

@Component({
  selector: 'app-resolver-questoes',
  templateUrl: './resolver-questoes.component.html',
  styleUrls: ['./resolver-questoes.component.css']
})

export class ResolverQuestoesComponent implements OnInit {
  // public frases: Questao[] = FRASES;
  public resposta = '';
  public rodadaFrase: IQuestao;
  public rodada = 0;

  public progresso = 0;
  public tentativas = 3;

  public tarefas: IQuestao[];

  public formulario: FormGroup;

  questao: Observable<IQuestao[]>;
  questaoCollectionRef: AngularFirestoreCollection<IQuestao>;

  @Output() public encerrarExercicio: EventEmitter<string> = new EventEmitter();

  constructor(private db: AngularFirestore) {
    this.atualizaRodada();
  }

  ngOnInit() {
    this.questaoCollectionRef = this.db.collection('questoes');
    this.questao = this.questaoCollectionRef.valueChanges();
    this.questao.forEach(item => {
      this.tarefas = item;
    });

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.resposta === this.resposta) {

      this.rodada++;

      this.progresso = this.progresso + (100 / this.tarefas.length);

      if (this.rodada === 4) {
        this.encerrarExercicio.emit('vitoria');
      }

      this.atualizaRodada();

    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarExercicio.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    // console.log(this.tarefas);
    // this.rodadaFrase = this.tarefas['0'];

    this.resposta = '';
  }
}
