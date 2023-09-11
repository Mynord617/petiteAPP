import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private auth: Auth) { 
  }

 
 get estadoDeUsuario() {
   return authState(this.auth)
 }
 

 registrar({email, password }: any){
   return createUserWithEmailAndPassword(this.auth, email, password);
 }

 login({ email, password }: any) {
   return signInWithEmailAndPassword(this.auth, email, password);
 }

 logout(){
   return signOut(this.auth);
 }
}
