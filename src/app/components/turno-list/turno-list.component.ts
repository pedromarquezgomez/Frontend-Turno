import { Component, OnInit } from '@angular/core';
import { TurnoI } from 'src/app/models/turno.interace';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalTurnoComponent } from '../create-modal-turno/create-modal-turno.component';
import { TurnoService } from '../../services/turno.service';


@Component({
  selector: 'app-turno-list',
  templateUrl: './turno-list.component.html',
  styleUrls: ['./turno-list.component.css']
})
export class TurnoListComponent implements OnInit {
  turnos: TurnoI[];
  turno: TurnoI;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'entrada',
    'salida',
    'btn-delete'
  ];

  TurnoEdit = null;
  idTurnoEdit = 0;

  constructor(
    private turnoService: TurnoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTurnos();
  }

  getTurnos() {
    this.turnoService.getTurnos().subscribe((turnosFrontApi) => {
      this.turnos = turnosFrontApi;
    });
  }

  deleteTurno(id: number) {
    this.turnoService.deleteTurno(id).subscribe(() => {
      this.getTurnos();
    });
  }


  createTurno() {
    const dialogoCreate = this.dialog.open(CreateModalTurnoComponent, {
      data: { nombre: null, role: null, activo: true },
    });

    dialogoCreate.afterClosed().subscribe((TurnoModal) => {
      if (TurnoModal !== undefined) {
        console.log(TurnoModal);
        this.turnoService.postTurno(TurnoModal).subscribe(() => {
          this.getTurnos();
        });
      }
    });
  }

  actualiza(Turno){
    const dialogoEdit = this.dialog.open(CreateModalTurnoComponent, {
      data: Turno
    });

    dialogoEdit.afterClosed().subscribe((TurnoModal) => {
      if (TurnoModal !== undefined) {
        console.log(TurnoModal);
        const id: number = TurnoModal.id;
        this.turnoService.editTurno(id, TurnoModal).subscribe(() => {
        });
      }
    });

}

}
