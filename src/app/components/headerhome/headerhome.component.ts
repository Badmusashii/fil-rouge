import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-headerhome',
  templateUrl: './headerhome.component.html',
  styleUrls: ['./headerhome.component.css'],
})
export class HeaderhomeComponent {
  pseudo: string | undefined;

  constructor(private memberService: MemberService,private authService: AuthService) {}

  ngOnInit(): void {
    const objet = this.memberService.getMember().subscribe((res) => {
      console.log('Username:' + res.username);
      this.pseudo = res.username;
      // const member = res
    });
  }

  logout(){
    this.authService.logout();
  }
}
