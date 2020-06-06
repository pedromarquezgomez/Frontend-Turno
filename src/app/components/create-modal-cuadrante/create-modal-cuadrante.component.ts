import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JornadaI } from 'src/app/models/jornada.interface';
import { OperarioI } from 'src/app/models/operario.interface';
import { TurnoI } from 'src/app/models/turno.interace';
import { OperarioService } from 'src/app/services/operario.service';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-create-modal-cuadrante',
  templateUrl: './create-modal-cuadrante.component.html',
  styleUrls: ['./create-modal-cuadrante.component.css']
})
export class CreateModalCuadranteComponent implements OnInit {
  constructor(
  public dialogRef: MatDialogRef<CreateModalCuadranteComponent>,
  @ Inject(MAT_DIALOG_DATA) public jornada: JornadaI, @ Inject(MAT_DIALOG_DATA) public operario: OperarioI,
  public operarioService: OperarioService, public turnoService: TurnoService) {}

  operarios: OperarioI[];
  turnos: TurnoI[];


ngOnInit(): void {
  this.turnoService.getTurnos().subscribe((turnosFrontApi) => {
    this.turnos = turnosFrontApi;
  });
  this.operarioService.getOperarios().subscribe((turnosFrontApi) => {
    this.operarios = turnosFrontApi;
  });
}
cancelar() {
  this.dialogRef.close();
}

}
