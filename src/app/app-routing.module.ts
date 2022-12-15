import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'persona', component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
