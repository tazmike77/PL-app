import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelecionarFicheirosComponent} from '../app/componentes/selecionar-ficheiros/selecionar-ficheiros.component';



const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: SelecionarFicheirosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
