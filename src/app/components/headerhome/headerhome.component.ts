import { Component } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-headerhome',
  templateUrl: './headerhome.component.html',
  styleUrls: ['./headerhome.component.css'],
})
export class HeaderhomeComponent {
  pseudo: string | undefined;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    const objet = this.memberService.getMember().subscribe((res) => {
      console.log('Username:' + res.username);
      this.pseudo = res.username;
      // const member = res
    });
  }
}
