import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MotosComponent } from './pages/motos/motos.component';
import { DadosComponent } from './pages/dados/dados.component';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento.component';

const routes: Routes = [
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'motos', component: MotosComponent},
  { path: 'dados', component: DadosComponent},
  { path: 'novo-agendamento', component: NovoAgendamentoComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
