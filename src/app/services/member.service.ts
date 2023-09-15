import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient) {}

  getMember() {
    interface Member {
      username: string; 
    }
    return this.http.get<Member>(`http://localhost:8080/api/member/user`);
  }
}
