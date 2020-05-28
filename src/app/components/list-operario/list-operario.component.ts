import { Component, OnInit, ViewChild } from '@angular/core';
import { OperarioI } from '../../models/operario.interfase';
import { OperarioService } from 'src/app/services/operario.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateModalOperarioComponent } from '../create-modal-operario/create-modal-operario.component';
import { Operario } from 'src/app/models/operario.models';


@Component({
  selector: 'app-list-operario',
  templateUrl: './list-operario.component.html',
  styleUrls: ['./list-operario.component.css'],
})
export class ListOperarioComponent implements OnInit {
  operarios: OperarioI[];
  operario: OperarioI;
  displayedColumns: string[] = ['id', 'nombre', 'role', 'activo', 'btn-delete', 'btn-upload'];


  constructor(private operarioService: OperarioService, public dialog: MatDialog) {}

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

  editOperario(operario: OperarioI){

  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(CreateModalOperarioComponent, {
      data: new Operario('', '', true)
    });

    dialogo1.afterClosed().subscribe(operarioModal => {
      if (operarioModal !== undefined){
        console.log(operarioModal);
      }
    });

}
}
