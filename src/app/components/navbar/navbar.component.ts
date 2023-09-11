import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  
constructor (
  private authServices: AuthService,
  private router: Router
){

}

  cerrarSesion() {
  this.authServices.logout()
    .then(()=>{
      this.router.navigate(['/login'])
    }).catch(error =>console.log(error));
    
}

  

}
