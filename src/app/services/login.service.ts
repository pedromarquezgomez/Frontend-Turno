import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from '../models/users.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(user: UserI): Observable<any> {
    return this.http.post(`${this.baseURL}/auth/login`, user);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    localStorage.get('token');
  }

}
