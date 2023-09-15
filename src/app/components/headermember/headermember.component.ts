import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-headermember',
  templateUrl: './headermember.component.html',
  styleUrls: ['./headermember.component.css']
})
export class HeadermemberComponent implements OnInit{
  pseudo:string | undefined = "";
  
  constructor(private memberService: MemberService){}

  ngOnInit():void {
    const objet = this.memberService.getMember().subscribe((res) =>{
      console.log(res.username);
      this.pseudo = res.username;
      // const member = res
    })
    
  }

}
