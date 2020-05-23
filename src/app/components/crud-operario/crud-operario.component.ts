import { Component, OnInit } from '@angular/core';
import { OperarioI } from '../../models/operario.interfase';
import { OperarioService } from 'src/app/services/operario.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-crud-operario',
  templateUrl: './crud-operario.component.html',
  styleUrls: ['./crud-operario.component.css'],
})
export class CrudOperarioComponent implements OnInit {
  operarios: OperarioI[];
  operario: OperarioI;
  estadoListar = true;
  estadoFormCreate = false;
  estadoFormEdit = false;
  operarioEdit: OperarioI;

  createOperarioForm = new FormGroup({
    nombre: new FormControl(''),
    role: new FormControl(''),
    activo: new FormControl(''),
  });

  editOperarioForm = new FormGroup({
    nombre: new FormControl(''),
    role: new FormControl(''),
    activo: new FormControl(''),
  });

  constructor(private operarioService: OperarioService) {}

  ngOnInit(): void {
    this.getOperarios();
  }

  cambiaEstado(){
    this.estadoListar = !this.estadoListar;
    this.estadoFormCreate = !this.estadoFormCreate;
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

  onResetForm() {
    this.createOperarioForm.reset();
  }

  createOperario() {
    const operarioCreate: OperarioI = this.createOperarioForm.value;
    this.operarioService.postOperario(operarioCreate).subscribe(() => {
      this.getOperarios();
      this.onResetForm();
      this.cambiaEstado();
    });
  }
  editOperario(id: number) {
    this.operarioService.getOperario(id).subscribe((operarioFrontApi) => {
      this.operarioEdit = operarioFrontApi;
    });
    this.estadoListar = !this.estadoListar;
    this.estadoFormEdit = !this.estadoFormEdit;
  }
}
