import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OperarioService } from '../app/services/operario.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudOperarioComponent } from './components/crud-operario/crud-operario.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudOperarioComponent
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
