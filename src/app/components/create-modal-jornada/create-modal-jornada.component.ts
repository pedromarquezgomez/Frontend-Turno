import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JornadaI } from 'src/app/models/jornada.interface';

@Component({
  selector: 'app-create-modal-jornada',
  templateUrl: './create-modal-jornada.component.html',
  styleUrls: ['./create-modal-jornada.component.css']
})
export class CreateModalJornadaComponent implements OnInit {
  constructor(
  public dialogRef: MatDialogRef<CreateModalJornadaComponent>,
  @ Inject(MAT_DIALOG_DATA) public jornada: JornadaI) {}

ngOnInit(): void {
}

cancelar() {
  this.dialogRef.close();
}

}
