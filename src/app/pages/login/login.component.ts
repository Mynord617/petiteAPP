import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario$!: Observable<any>;

  formLogin: FormGroup;

  constructor(
    private authServices: AuthServices,
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
     this.router.navigate(['/generarVenta'])
    })
    .catch(error => console.error(error));
    
}


  
confirmacionEnvio(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Bienvenido!',
    showConfirmButton: false,
    timer: 2500
  })
}

  ngOnInit(): void {

    this.usuario$ = this.authServices.estadoDeUsuario
  }

  
  obtenerUsuario(){
    this.authServices.obtenerUsuarioLogueado().subscribe(res =>{
      console.log(res?.email);
      
    })
  }


  
}
