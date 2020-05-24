import { Component, OnInit } from '@angular/core';
import { OperarioI } from 'src/app/models/operario.interfase';
import { OperarioService } from 'src/app/services/operario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-operario',
  templateUrl: './upload-operario.component.html',
  styleUrls: ['./upload-operario.component.css']
})
export class UploadOperarioComponent implements OnInit {
  operarioEdit: OperarioI;
  constructor( private operarioService: OperarioService) { }

  uploadOperarioForm = new FormGroup({
    nombre: new FormControl(''),
    role: new FormControl(''),
    activo: new FormControl(''),
  });

  ngOnInit(): void {
  }
  editOperario(id: number) {
    this.operarioService.getOperario(id).subscribe((operarioFrontApi) => {
      this.operarioEdit = operarioFrontApi;
    });
  }
  createOperario(){}
}
