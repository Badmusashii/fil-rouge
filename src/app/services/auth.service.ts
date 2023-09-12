import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: { lastname: string; firstname: string; username: string; email: string; password: string; }){
    return this.http.post(`http://localhost:8080/api/auth/register`,data);
  }
}
