import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TurnoI } from 'src/app/models/turno.interace';

@Component({
  selector: 'app-create-modal-turno',
  templateUrl: './create-modal-turno.component.html',
  styleUrls: ['./create-modal-turno.component.css']
})
export class CreateModalTurnoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateModalTurnoComponent>,
    @ Inject(MAT_DIALOG_DATA) public turno: TurnoI) {}

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
