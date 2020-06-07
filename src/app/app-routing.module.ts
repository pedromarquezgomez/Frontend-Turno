import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperarioListComponent } from './components/operario-list/operario-list.component';
import { TurnoListComponent } from './components/turno-list/turno-list.component';
import { JornadaListComponent } from './components/jornada-list/jornada-list.component';
import { CuadranteComponent } from './components/cuadrante/cuadrante.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
