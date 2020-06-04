import { Component, OnInit } from '@angular/core';
import { JornadaI } from 'src/app/models/jornada.interface';
import { JornadaService } from 'src/app/services/jornada.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalJornadaComponent } from '../create-modal-jornada/create-modal-jornada.component';
import { TurnoI } from 'src/app/models/turno.interace';
import { OperarioI } from 'src/app/models/operario.interface';
import { OperarioService } from 'src/app/services/operario.service';
import { TurnoService } from 'src/app/services/turno.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-cuadrante',
  templateUrl: './cuadrante.component.html',
  styleUrls: ['./cuadrante.component.css']
})
export class CuadranteComponent implements OnInit {
  jornadas: JornadaI[];
  jornada: JornadaI;
  operarios: OperarioI [];
  turnos: TurnoI [];

  displayedColumns: string[] = [
    'id',
    'turnoId',
    'operarioId',
    'fecha',
    'btn-delete',
    'btn-upload',
  ];

  jornadaEdit = [];
  idJornadaEdit = 0;

  constructor(
    private jornadaService: JornadaService,
    public dialog: MatDialog,
    public operarioService: OperarioService,
    public turnoService: TurnoService
  ) {}

  ngOnInit(): void {
    this.getJornadas();
    this.getOperarios();
    this.getTurnos();
  }

  getJornadas() {
    this.jornadaService.getJornadas().subscribe((jornadasFrontApi) => {
      this.jornadas = jornadasFrontApi;
    });
  }
  getTurnos() {
    this.turnoService.getTurnos().subscribe((turnosFrontApi) => {
      this.turnos = turnosFrontApi;
    });
  }
  getOperarios() {
    this.operarioService.getOperarios().subscribe((operariosFrontApi) => {
      this.operarios = operariosFrontApi;
    });
  }
  deleteJornada(id: number) {
    this.jornadaService.deleteJornada(id).subscribe(() => {
      this.getJornadas();
    });
  }


  createJornada() {
    const dialogoCreate = this.dialog.open(CreateModalJornadaComponent, {
      data: { nombre: [], role: [], activo: true },
    });

    dialogoCreate.afterClosed().subscribe((jornadaModal) => {
      if (jornadaModal !== undefined) {
        console.log(jornadaModal);
        this.jornadaService.postJornada(jornadaModal).subscribe(() => {
          this.getJornadas();
        });
      }
    });
  }

  actualiza(jornada){
    const dialogoEdit = this.dialog.open(CreateModalJornadaComponent, {
      data: jornada
    });

    dialogoEdit.afterClosed().subscribe((jornadaModal) => {
      if (jornadaModal !== undefined) {
        console.log(jornadaModal);
        const id: number = jornadaModal.id;
        this.jornadaService.editJornada(id, jornadaModal).subscribe(() => {
        });
      }
    });

}

getNombreOperario(id: number): string{
  if (this.operarios){
  return this.operarios.find(operario => operario.id === id).nombre;
  }
}
getNombreTurno(id: number): string{
  if (this.turnos){
  return this.turnos.find(turno => turno.id === id).nombre;
  }
}
}
