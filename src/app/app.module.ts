import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/auth.service';
import { SairComponent } from './sair/sair.component';
import { MenuProfessorComponent } from './menu-professor/menu-professor.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { CadastroQuestaoComponent } from './cadastro-questao/cadastro-questao.component';
import { NiveisQuestoesComponent } from './niveis-questoes/niveis-questoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SairComponent,
    MenuProfessorComponent,
    CadastroComponent,
    MenuComponent,
    ProgressoTurmaComponent,
    CadastroTarefaComponent,
    CadastroQuestaoComponent,
    NiveisQuestoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    AngularFireDatabase,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
