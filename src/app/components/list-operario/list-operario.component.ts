import { Component, OnInit } from '@angular/core';
import { OperarioI } from '../../models/operario.interfase';
import { OperarioService } from 'src/app/services/operario.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-operario',
  templateUrl: './list-operario.component.html',
  styleUrls: ['./list-operario.component.css'],
})
export class ListOperarioComponent implements OnInit {
  operarios: OperarioI[];
  operario: OperarioI;


  constructor(private operarioService: OperarioService) {}

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

}
