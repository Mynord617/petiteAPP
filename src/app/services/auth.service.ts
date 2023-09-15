import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Usuario } from '../pages/models/registro.interface';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  formularioReg: FormGroup;

  constructor(

    private auth: Auth,
    private firestore: Firestore 

    ) { 
      this.formularioReg = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
   }

  
  get estadoDeUsuario() {
    return authState(this.auth)
  }
  

  registrar({email,password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  obtenerUsuarioLogueado(){
    return authState(this.auth)
  }


  crearDoc(data: any, path: string, id: string){
    const _collection = collection(this.firestore, path)
    return addDoc(_collection,{idField:id})
  }

}


/*

 async registrar(usuario: Usuario){
    const respuesta = await createUserWithEmailAndPassword(this.auth, usuario.correo, usuario.password)
    .catch(error =>{
      console.log(error);
    });if (respuesta) {
      console.log('Usuario creado con Exito');
      const path = 'Usuario';
      const id = respuesta.user.uid;
      this.crearDoc(path, id)
      
    }
  
  crearDoc(path: string, id: string){
    const _collection = collection(this.firestore, path)
    return addDoc(_collection,{idField:id})
  }

  }



*/