import { Component, OnInit } from '@angular/core';
import { OperarioService } from 'src/app/services/operario.service';
import { Operario } from 'src/app/models/operario';

@Component({
  selector: 'app-lista-operario',
  templateUrl: './lista-operario.component.html',
  styleUrls: ['./lista-operario.component.css']
})
export class ListaOperarioComponent implements OnInit {
  operario: Operario;
  operarios: Operario [];
  constructor(
    private operarioService: OperarioService
  ) { }

  getOperario(id: number){
    if (id){
      this.operarioService.getOperario(id).subscribe(operarioFrontApi => {
          this.operario = operarioFrontApi;
      });
     }
    }
  getOperarios(){
    this.operarioService.getOperarios().subscribe(operariosFrontApi => {
      this.operarios = operariosFrontApi;
      console.log(this.operarios);
    });
  }

  ngOnInit(): void {
  }

}
