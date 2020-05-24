import { Component, OnInit } from '@angular/core';
import { OperarioI } from 'src/app/models/operario.interfase';
import { OperarioService } from 'src/app/services/operario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-operario',
  templateUrl: './create-operario.component.html',
  styleUrls: ['./create-operario.component.css']
})
export class CreateOperarioComponent implements OnInit {

  constructor(private operarioService: OperarioService) { }

  createOperarioForm = new FormGroup({
    nombre: new FormControl(''),
    role: new FormControl(''),
    activo: new FormControl(''),
  });

  ngOnInit(): void {
  }

  createOperario() {
    const operarioCreate: OperarioI = this.createOperarioForm.value;
    this.operarioService.postOperario(operarioCreate).subscribe(() => {
      this.onResetForm();
    });
  }
  onResetForm() {
    this.createOperarioForm.reset();
  }

}
