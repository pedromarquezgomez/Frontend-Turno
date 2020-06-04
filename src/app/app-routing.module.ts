import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperarioListComponent } from './components/operario-list/operario-list.component';
import { TurnoListComponent } from './components/turno-list/turno-list.component';
import { JornadaListComponent } from './components/jornada-list/jornada-list.component';
import { CuadranteComponent } from './components/cuadrante/cuadrante.component';


const routes: Routes = [
  {
    path: '',
    component: OperarioListComponent,
  },
  {
    path: 'listOperario',
    component: OperarioListComponent,
  },
  {
    path: 'listTurno',
    component: TurnoListComponent,
  },
  {
    path: 'listJornada',
    component: JornadaListComponent,
  },
  {
    path: 'listCuadrante',
    component: CuadranteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
