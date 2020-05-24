import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOperarioComponent } from './components/list-operario/list-operario.component';
import { CreateOperarioComponent } from './components/create-operario/create-operario.component';
import { UploadOperarioComponent } from './components/upload-operario/upload-operario.component';


const routes: Routes = [
  {
    path: '',
    component: ListOperarioComponent,
  },
  {
    path: 'create',
    component: CreateOperarioComponent,
  },
  {
    path: 'list',
    component: ListOperarioComponent,
  },
  {
    path: 'upload',
    component: UploadOperarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
