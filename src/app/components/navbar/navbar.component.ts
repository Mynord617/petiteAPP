import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from '@firebase/auth';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  currentDate: Date = new Date();

constructor (
  private authServices: AuthService,
  private router: Router,
  private utilsService: UtilsService
) {


}
  ngOnInit() {
     this.utilsService.dateObs.subscribe(valorDate =>{
      this.currentDate = valorDate;
     })
  }

  cerrarSesion() {
  this.authServices.logout()
    .then(()=>{
      this.router.navigate(['/login'])
    }).catch(error =>console.log(error));
    
}

despedida(){
  Swal.fire({
    position: 'center',
    title: '¡Te esperamos Pronto!',
    width: 500,
    padding: '5em',
    color: '#ffffff',
    background: 'url("https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif")no-repeat',
    showConfirmButton: false,
    timer: 4000,
    backdrop: `
      rgba(138,221,45,0.15)
    `
  })
}


}
