import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OperarioService } from '../app/services/operario.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OperarioListComponent } from './components/operario-list/operario-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CreateModalOperarioComponent } from './components/create-modal-operario/create-modal-operario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TurnoListComponent } from './components/turno-list/turno-list.component';
import { CreateModalTurnoComponent } from './components/create-modal-turno/create-modal-turno.component';
import { TurnoService } from './services/turno.service';
import { JornadaListComponent } from './components/jornada-list/jornada-list.component';
import { CreateModalJornadaComponent } from './components/create-modal-jornada/create-modal-jornada.component';
import { JornadaService } from './services/jornada.service';
import { CuadranteComponent } from './components/cuadrante/cuadrante.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CreateModalCuadranteComponent } from './components/create-modal-cuadrante/create-modal-cuadrante.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginService } from './services/login.service';
import { AuthInterceptoService } from './services/auth-intercepto.service';




@NgModule({
  declarations: [
    AppComponent,
    OperarioListComponent,
    CreateModalOperarioComponent,
    TurnoListComponent,
    CreateModalTurnoComponent,
    JornadaListComponent,
    CreateModalJornadaComponent,
    CuadranteComponent,
    CreateModalCuadranteComponent,
    HomeComponent,
    NavComponent,
    LoginComponent
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
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    CreateModalOperarioComponent,
    CreateModalTurnoComponent,
    CreateModalJornadaComponent
  ],
  providers: [
    OperarioService,
    TurnoService,
    JornadaService,
    LoginService,
    AuthInterceptoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptoService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
