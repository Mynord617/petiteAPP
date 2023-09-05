import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Productos } from '../productos.interface';
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

  eliminarProducto(){

  }
  
}