import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, query, where, getDocs } from '@angular/fire/firestore';
import { Productos } from '../models/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor( private firestore: Firestore) { 

  }

  agregarNuevoProducto (productos: Productos) {
      const productoRef = collection(this.firestore,'producto');
      return addDoc (productoRef, productos)
  }
 
  obtenerProducto (): Observable <Productos[]> {
    const productoRef = collection(this.firestore,'productos');
    return collectionData(productoRef, {idField:'id'}) as Observable<Productos[]>;
    console.log(collectionData);
    
  }

  async obtenerProductoPorNombre(){
    const q = query(collection(this.firestore, "producto"), where("nombre", "==", true));
    const querySnapshot = await getDocs(q); 
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


  }

  eliminarProducto(){

  }
  
}