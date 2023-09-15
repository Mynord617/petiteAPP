import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioReg: FormGroup;

  constructor(
    
    private authService: AuthServices

  ){
    this.formularioReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
 
  onSubmit(){

    this.authService.registrar(this.formularioReg.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
    console.log(this.formularioReg.value);
    this.formularioReg.reset();
  }

  
  confirmacionEnvio() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Usuario creado exitosamente!',
      showConfirmButton: false,
      timer: 2500
    })

  }


}
