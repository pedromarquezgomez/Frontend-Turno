import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OperarioService } from '../app/services/operario.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListOperarioComponent } from './components/list-operario/list-operario.component';
import { CreateOperarioComponent } from './components/create-operario/create-operario.component';
import { UploadOperarioComponent } from './components/upload-operario/upload-operario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CreateModalOperarioComponent } from './components/create-modal-operario/create-modal-operario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    ListOperarioComponent,
    CreateOperarioComponent,
    UploadOperarioComponent,
    CreateModalOperarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [OperarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
