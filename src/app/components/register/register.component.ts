import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService) {
    this.registerForm = new FormGroup({
      pseudo: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConf: new FormControl(''),
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      pseudo: ['Pseudo', [Validators.required]],
      prenom: ['Prénom', [Validators.required]],
      nom: ['Nom', [Validators.required]],
      email: ['Email', [Validators.required, Validators.email]],
      password: ['Password', [Validators.required, Validators.minLength(5)]],
      passwordConf: ['Confirmation', [Validators.required, Validators.minLength(5)]],
    });
  }

  register(){
    if(this.registerForm){
      
      const data = {
        "lastname": this.registerForm.get('nom')?.value,
        "firstname": this.registerForm.get('prenom')?.value,
        "username": this.registerForm.get('pseudo')?.value,
        "email": this.registerForm.get('email')?.value,
        "password": this.registerForm.get('password')?.value
      };
     
      this.authService.register(data).subscribe((response) => {
        console.log('User ajouté!'+response);     
      });
    }else{
      alert("Formulaire invalide");
    }
  }

}
