import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
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
import { VisualizarQuestoesComponent } from './visualizar-questoes/visualizar-questoes.component';
import { VisualizarTurmasComponent } from './visualizar-turmas/visualizar-turmas.component';
import { AtribuirExerciciosTurmasComponent } from './atribuir-exercicios-turmas/atribuir-exercicios-turmas.component';
import { PerfilTurmaComponent } from './perfil-turma/perfil-turma.component';
import { ExerciciosRespondidosSucessoComponent } from './exercicios-respondidos-sucesso/exercicios-respondidos-sucesso.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  { path: 'index', component: MenuComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'alunos', component: CadastroComponent },
  { path: 'progresso', component: ProgressoTurmaComponent },
  { path: 'resolver-questoes', component: ResolverQuestoesComponent },
  { path: 'niveis', component: NiveisQuestoesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'cadastro-turmas', component: CadastroTurmasComponent },
  { path: 'cadastrar-questoes', component: CadastrarQuestoesComponent },
  { path: 'visualizar-questoes', component: VisualizarQuestoesComponent },
  { path: 'ver-turmas', component: VisualizarTurmasComponent },
  { path: 'exercicios-turmas', component: AtribuirExerciciosTurmasComponent },
  { path: 'cadastrar-turmas', component: CadastroTurmasComponent },
  { path: 'perfil-turma', component: PerfilTurmaComponent },
  { path: 'resolver-questoes', component: ResolverQuestoesComponent },
  { path: 'sucesso', component: ExerciciosRespondidosSucessoComponent },
  { path: 'cadastro-aluno', component: CadastroAlunosComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
