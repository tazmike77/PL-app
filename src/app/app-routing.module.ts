import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelecionarFicheirosComponent} from './componentes/selecionar-ficheiros/selecionar-ficheiros.component';
import { EstatisticasComponent } from './componentes/estatisticas/estatisticas.component';
import { TodosOsTestesComponent } from './componentes/todos-os-testes/todos-os-testes.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: SelecionarFicheirosComponent },
  { path: 'estatisticas', component: EstatisticasComponent },
  { path: 'hist-Tests', component: TodosOsTestesComponent },
  { path: 'graficos', component: GraficosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
