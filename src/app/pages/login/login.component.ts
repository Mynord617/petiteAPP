import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario$!: Observable<any>;

  formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  })
}


onSubmit() {
  this.authService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
     this.router.navigate(['/generarVenta'])
    })
    .catch(error => console.error(error));
    
}



  ngOnInit(): void {

    this.usuario$ = this.authService.estadoDeUsuario
  }

  
}
