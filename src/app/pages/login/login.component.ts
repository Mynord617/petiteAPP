import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  constructor(
    private authServices: AuthService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  })
}


onSubmit() {
  this.authServices.login(this.formLogin.value)
    .then(response => {
      console.log(response);
    //  this.router.navigate(['./dasboard'])
    })
    .catch(error => console.error(error));

}
















  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
