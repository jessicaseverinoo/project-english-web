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
import { TarefasComponent } from './tarefas/tarefas.component';
import { CadastroQuestoesComponent } from './tarefas/cadastro-questoes/cadastro-questoes.component';
import { VerQuestoesComponent } from './tarefas/ver-questoes/ver-questoes.component';
import { NiveisComponent } from './tarefas/niveis/niveis.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ResolverQuestoesComponent } from './resolver-questoes/resolver-questoes.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

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
    NiveisQuestoesComponent,
    TarefasComponent,
    CadastroQuestoesComponent,
    VerQuestoesComponent,
    NiveisComponent,
    PerfilComponent,
    ResolverQuestoesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
