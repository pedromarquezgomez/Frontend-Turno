import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JornadaI } from '../models/jornada.interface';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {


  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getJornada(id: number): Observable<JornadaI>{
    return this.http.get<JornadaI>(`${this.baseURL}/jornada/${id}`);
  }

  getJornadas(): Observable<JornadaI []>{
    return this.http.get<JornadaI []>(`${this.baseURL}/jornada/list`);
  }

  postJornada(jornadaCreate): Observable<any>{
    return this.http.post(`${this.baseURL}/jornada/create`, jornadaCreate);
  }

  deleteJornada(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/jornada/${id}`);
  }

  editJornada(id: number, jornadaEdit: JornadaI){
   return this.http.put(`${this.baseURL}/jornada/${id}`, jornadaEdit);
  }
}
