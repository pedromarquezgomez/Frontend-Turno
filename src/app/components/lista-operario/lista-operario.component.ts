import { Component, OnInit } from '@angular/core';
import { ListaOperarioService } from 'src/app/services/lista-operario.service';
import { Operario } from 'src/app/models/operario';

@Component({
  selector: 'app-lista-operario',
  templateUrl: './lista-operario.component.html',
  styleUrls: ['./lista-operario.component.css']
})
export class ListaOperarioComponent implements OnInit {
  operario: Operario;
  constructor(
    private listaOperario: ListaOperarioService
  ) { }

  getOperarios(id: number){
    if (id){
      this.listaOperario.getOperarios(id).subscribe(operarioFrontApi => {
          this.operario = operarioFrontApi;
      });
}
  }

  ngOnInit(): void {
  }

}
