import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OperarioService } from '../app/services/operario.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListOperarioComponent } from './components/list-operario/list-operario.component';
import { CreateOperarioComponent } from './components/create-operario/create-operario.component';
import { UploadOperarioComponent } from './components/upload-operario/upload-operario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOperarioComponent,
    CreateOperarioComponent,
    UploadOperarioComponent
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
