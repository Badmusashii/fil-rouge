import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(data :{ username: string; email: string; password: string; }) {
    // console.log("je suis dans auth service, je récup la data", data);
    //return this.http.post(`http://localhost:8080/api/auth/login`, data).subscribe((res)=>{localStorage.setItem('token', res.accessToken)});
    return this.http.post(`http://localhost:8080/api/auth/login`, data);
  }


  register(data: { lastname: string; firstname: string; username: string; email: string; password: string; }){
    return this.http.post(`http://localhost:8080/api/auth/register`,data);
  }
}
