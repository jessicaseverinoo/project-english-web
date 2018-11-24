import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ResolverQuestoesComponent } from './resolver-questoes/resolver-questoes.component';
import { NiveisQuestoesComponent } from './niveis-questoes/niveis-questoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';
import { LoginComponent } from './login/login.component';
import { CadastroTurmasComponent } from './cadastro-turmas/cadastro-turmas.component';
import { CadastrarQuestoesComponent } from './cadastrar-questoes/cadastrar-questoes.component';

export const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'alunos', component: CadastroComponent },
  { path: 'progresso', component: ProgressoTurmaComponent },
  { path: 'resolver-questoes', component: ResolverQuestoesComponent },
  { path: 'niveis', component: NiveisQuestoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'cadastro-turmas', component: CadastroTurmasComponent },
  { path: 'cadastrar-questoes', component: CadastrarQuestoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
