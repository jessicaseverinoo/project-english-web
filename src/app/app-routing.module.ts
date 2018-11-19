import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroQuestaoComponent } from './cadastro-tarefa/cadastro-questao/cadastro-questao.component';
import { CadastroTarefaComponent } from './cadastro-tarefa/cadastro-tarefa.component';
import { ResolverQuestoesComponent } from './resolver-questoes/resolver-questoes.component';
import { NiveisQuestoesComponent } from './niveis-questoes/niveis-questoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProgressoTurmaComponent } from './progresso-turma/progresso-turma.component';

export const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'tarefas', component: CadastroTarefaComponent },
  { path: 'turmas', component: CadastroComponent },
  { path: 'alunos', component: CadastroComponent },
  { path: 'progresso', component: ProgressoTurmaComponent },
  { path: 'resolver-questoes', component: ResolverQuestoesComponent },
  { path: 'niveis', component: NiveisQuestoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
