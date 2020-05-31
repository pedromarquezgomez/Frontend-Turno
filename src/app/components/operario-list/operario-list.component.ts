import { Component, OnInit, ViewChild } from '@angular/core';
import { OperarioI } from '../../models/operario.interface';
import { OperarioService } from 'src/app/services/operario.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalOperarioComponent } from '../create-modal-operario/create-modal-operario.component';

@Component({
  selector: 'app-list-operario',
  templateUrl: './operario-list.component.html',
  styleUrls: ['./operario-list.component.css'],
})
export class OperarioListComponent implements OnInit {
  operarios: OperarioI[];
  operario: OperarioI;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'role',
    'activo',
    'btn-delete',
    'btn-upload',
  ];

  operarioEdit = null;
  idOperarioEdit = 0;

  constructor(
    private operarioService: OperarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getOperarios();
  }

  getOperarios() {
    this.operarioService.getOperarios().subscribe((operariosFrontApi) => {
      this.operarios = operariosFrontApi;
    });
  }

  deleteOperario(id: number) {
    this.operarioService.deleteOperario(id).subscribe(() => {
      this.getOperarios();
    });
  }


  createOperario() {
    const dialogoCreate = this.dialog.open(CreateModalOperarioComponent, {
      data: { nombre: null, role: null, activo: true },
    });

    dialogoCreate.afterClosed().subscribe((operarioModal) => {
      if (operarioModal !== undefined) {
        console.log(operarioModal);
        this.operarioService.postOperario(operarioModal).subscribe(() => {
          this.getOperarios();
        });
      }
    });
  }

  actualiza(operario){
    const dialogoEdit = this.dialog.open(CreateModalOperarioComponent, {
      data: operario
    });

    dialogoEdit.afterClosed().subscribe((operarioModal) => {
      if (operarioModal !== undefined) {
        console.log(operarioModal);
        const id: number = operarioModal.id;
        this.operarioService.editOperario(id, operarioModal).subscribe(() => {
        });
      }
    });

}
}
