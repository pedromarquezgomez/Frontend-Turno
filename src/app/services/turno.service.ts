import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TurnoI } from '../models/turno.interace';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getTurno(id: number): Observable<TurnoI>{
    return this.http.get<TurnoI>(`${this.baseURL}/turno/${id}`);
  }

  getTurnos(): Observable<TurnoI []>{
    return this.http.get<TurnoI []>(`${this.baseURL}/turno/list`);
  }

  postTurno(turnoCreate): Observable<any>{
    return this.http.post(`${this.baseURL}/turno/create`, turnoCreate);
  }

  deleteTurno(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/turno/${id}`);
  }

  editTurno(id: number, turnoEdit: TurnoI){
   return this.http.put(`${this.baseURL}/turno/update/${id}`, turnoEdit);
  }
}
