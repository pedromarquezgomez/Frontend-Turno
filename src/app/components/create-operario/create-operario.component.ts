import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OperarioService } from 'src/app/services/operario.service';

@Component({
  selector: 'app-create-operario',
  templateUrl: './create-operario.component.html',
  styleUrls: ['./create-operario.component.css']
})
export class CreateOperarioComponent implements OnInit {

  operarioForm = new FormGroup({
      nombre: new FormControl (''),
      role: new FormControl (''),
      activo: new FormControl (''),

    });

  constructor(private operarioService: OperarioService) { }

  ngOnInit(): void {
  }

  onResetForm(){
    this.operarioForm.reset();
  }

  onSaveForm(){
   // console.log(this.operarioForm.value);
    const operarioCreate = this.operarioForm.value;
    this.operarioService.postOperario(operarioCreate).subscribe();
  }
}
