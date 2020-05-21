import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Operario } from '../models/operario';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListaOperarioService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

getOperarios(id: number): Observable<Operario>{
    return this.http.get<Operario>(`${this.baseURL}/operario/${id}`);
  }


}
