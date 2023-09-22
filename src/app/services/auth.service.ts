import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  login(data: { username: string; email: string; password: string }) {
    interface ApiResponse {
      accessToken: string;
    }

    return this.http
      .post<ApiResponse>(`http://localhost:8080/api/auth/login`, data)
      .subscribe((res: ApiResponse) => {
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/home']);
      });
  }

  register(data: {
    lastname: string;
    firstname: string;
    username: string;
    email: string;
    password: string;
  }) {
    return this.http.post(`http://localhost:8080/api/auth/register`, data);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
