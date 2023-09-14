import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from 'src/app/productos/models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  private facturacionProductos: Productos [] = [];

  private _productos: BehaviorSubject<Productos[]>;

  constructor() {
    this._productos =  new BehaviorSubject<Productos[]>([]);
   }

   agregarProducto(producto: Productos) {
      this.facturacionProductos.push(producto);
      this._productos.next(this.facturacionProductos);
   }


   get producto() {
    return this._productos.asObservable();
   }


   
  eliminarProductoLista(index: number) {
    this.facturacionProductos.slice(index,1);
    this._productos.next(this.facturacionProductos);
  }
  
  }