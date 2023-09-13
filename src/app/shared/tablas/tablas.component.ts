import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/productos/models/productos.interface';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {


  public productos: Productos[] = [];

  constructor(private productoService: ProductosService){
    
  }



  ngOnInit(): void {
    this.productoService.obtenerProducto().subscribe(productos =>{this.productos = productos})
    console.log(this.productos);
    }

}
