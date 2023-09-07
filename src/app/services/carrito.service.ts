import { Injectable } from '@angular/core';
import { Productos } from '../productos/productos.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private cartProducts: Productos[] = [];

  private _product: BehaviorSubject<Productos[]> = new BehaviorSubject<Productos[]>([]);

  constructor() { 
    this._product = new BehaviorSubject<Productos[]>([]);
  }

  get products(){
    return this._product.asObservable();
  }

  addNewProduct(producto: Productos){
    this.cartProducts.push(producto);
    this._product.next(this.cartProducts);
  }
}
