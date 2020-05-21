import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Operario } from '../models/operario';
import { Observable } from 'rxjs';
import { OperarioI } from '../components/operario.interfase';



@Injectable({
  providedIn: 'root'
})
export class OperarioService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getOperario(id: number): Observable<Operario>{
    return this.http.get<Operario>(`${this.baseURL}/operario/${id}`);
  }

  getOperarios(): Observable<Operario []>{
    return this.http.get<Operario []>(`${this.baseURL}/operario/list`);
  }
  postOperario(operarioCreate): Observable<any>{
    console.log(operarioCreate);
    return this.http.post(`${this.baseURL}/operario/create`, operarioCreate);
  }
  
}
