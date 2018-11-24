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
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';
import { NiveisQuestoesComponent } from './niveis-questoes/niveis-questoes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ResolverQuestoesComponent } from './resolver-questoes/resolver-questoes.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { CadastroTurmasComponent } from './cadastro-turmas/cadastro-turmas.component';
import { CadastrarQuestoesComponent } from './cadastrar-questoes/cadastrar-questoes.component';
import { VisualizarQuestoesComponent } from './visualizar-questoes/visualizar-questoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SairComponent,
    CadastroComponent,
    MenuComponent,
    ProgressoTurmaComponent,
    PerfilComponent,
    ResolverQuestoesComponent,
    LoginComponent,
    PostsComponent,
    CadastroTurmasComponent,
    NiveisQuestoesComponent,
    CadastrarQuestoesComponent,
    VisualizarQuestoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
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
