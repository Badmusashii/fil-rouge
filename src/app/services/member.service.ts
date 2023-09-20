import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  // http: any;

  constructor(private http:HttpClient) { }

  getMember(){
    return this.http.get<Member>(`http://localhost:8080/api/member/user`);
  }

  getMemberForGroup(idGroupe: string){
    return this.http.get<Member[]>(`http://localhost:8080/api/groupe/`+idGroupe);
  }
}

