import { Injectable } from '@angular/core';
import { Productos } from '../models/productos.interface';
import { Firestore, addDoc, collection, collectionData, setDoc, doc, query, where, getDocs } from '@angular/fire/firestore';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  constructor( 
    private firestore: Firestore,
  
    ) { 

  }

  agregarNuevoProducto (productos: Productos) {
      const productoRef = collection(this.firestore,'producto');
      return addDoc (productoRef, productos)
  }

  obtenerProducto (): Observable <Productos[]> {
    const productoRef = collection(this.firestore,'producto');
    return collectionData(productoRef, {idField:'id'}) as Observable<Productos[]>;
    //console.log(collectionData);
    
  }

  async obtenerProductoPorNombre(){
    const q = query(collection(this.firestore, "producto"), where("nombre", "==", true));
    const querySnapshot = await getDocs(q); 
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


  }

  actualizarCant(producto:Productos){
    
   }

  eliminarProducto(){

  }



  

}