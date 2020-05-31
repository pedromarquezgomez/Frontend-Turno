import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OperarioI } from 'src/app/models/operario.interface';


@Component({
  selector: 'app-create-modal-operario',
  templateUrl: './create-modal-operario.component.html',
  styleUrls: ['./create-modal-operario.component.css']
})
export class CreateModalOperarioComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateModalOperarioComponent>,
    @ Inject(MAT_DIALOG_DATA) public operario: OperarioI) {}

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }
}
