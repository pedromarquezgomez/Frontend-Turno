import { Component, OnInit } from '@angular/core';
import { JornadaI } from 'src/app/models/jornada.interface';
import { JornadaService } from 'src/app/services/jornada.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalJornadaComponent } from '../create-modal-jornada/create-modal-jornada.component';

@Component({
  selector: 'app-jornada-list',
  templateUrl: './jornada-list.component.html',
  styleUrls: ['./jornada-list.component.css']
})
export class JornadaListComponent implements OnInit {
  jornadas: JornadaI[];
  jornada: JornadaI;
  displayedColumns: string[] = [
    'id',
    'turnoId',
    'operarioId',
    'fecha',
    'btn-delete',
    'btn-upload',
  ];

  jornadaEdit = null;
  idJornadaEdit = 0;

  constructor(
    private jornadaService: JornadaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getJornadas();
  }

  getJornadas() {
    this.jornadaService.getJornadas().subscribe((jornadasFrontApi) => {
      this.jornadas = jornadasFrontApi;
    });
  }

  deleteJornada(id: number) {
    this.jornadaService.deleteJornada(id).subscribe(() => {
      this.getJornadas();
    });
  }


  createJornada() {
    const dialogoCreate = this.dialog.open(CreateModalJornadaComponent, {
      data: { nombre: null, role: null, activo: true },
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

}
