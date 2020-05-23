import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperarioI } from '../models/operario.interfase';



@Injectable({
  providedIn: 'root'
})
export class OperarioService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getOperario(id: number): Observable<OperarioI>{
    return this.http.get<OperarioI>(`${this.baseURL}/operario/${id}`);
  }

  getOperarios(): Observable<OperarioI []>{
    return this.http.get<OperarioI []>(`${this.baseURL}/operario/list`);
  }

  postOperario(operarioCreate): Observable<any>{
    console.log(operarioCreate);
    return this.http.post(`${this.baseURL}/operario/create`, operarioCreate);
  }

  deleteOperario(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/operario/${id}`);
  }

  editOperario(id: number, operarioEdit: OperarioI){
    console.log(operarioEdit);
    return this.http.put(`${this.baseURL}/update/${id}`, operarioEdit);
  }

}
