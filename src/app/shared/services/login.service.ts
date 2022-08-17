import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icredentials } from '../models/credentials';
import { Itoken } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8000/api/login_check'

  constructor(private http: HttpClient) { }

  login(credentials: Icredentials): Observable<Itoken>{
    return this.http.post<Itoken>(this.url, credentials)
  }
}
