import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaOperarioComponent } from './components/lista-operario/lista-operario.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOperarioComponent } from './components/create-operario/create-operario.component';
import { OperarioService } from '../app/services/operario.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaOperarioComponent,
    CreateOperarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OperarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
