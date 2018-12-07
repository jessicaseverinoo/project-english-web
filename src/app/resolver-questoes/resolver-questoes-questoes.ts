import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IQuestao } from './../models/iquestao.model';
import { OnInit, Output } from '@angular/core';
import { Questao } from './resolver-questoes.model';
import { EventEmitter } from 'protractor';

export const FRASES: Questao[] = [
    { pergunta: 'I like to learn', resposta: 'Eu gosto de aprender' }
];

// namespace App.ResolverQuestoes.Resolver {
export interface PerguntasERespostas {
    nivel: string;
    pergunta: string;
    resposta: string;
}
export class Frases implements OnInit {
    public resposta = '';
    public rodadaFrase: IQuestao;
    public rodada = 0;
    public progresso = 0;
    public tentativas = 3;
    public tarefas: IQuestao[];

    questao: Observable<IQuestao[]>;
    questaoCollectionRef: AngularFirestoreCollection<IQuestao>;

    constructor(private db: AngularFirestore) {
    }
    ngOnInit() {
        this.questaoCollectionRef = this.db.collection('questoes');
        this.questao = this.questaoCollectionRef.valueChanges();

        this.questao.forEach(item => {
            this.tarefas = item;
            console.log(this.tarefas.keys);
        });
    }

    public atualizaRodada(): void {
        this.resposta = '';
    }
}

