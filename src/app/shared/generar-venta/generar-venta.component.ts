import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { Productos } from 'src/app/productos/models/productos.interface';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent implements OnInit {

  public producto: Productos[] = [];  
  
  constructor(
    private productoService: ProductosService,
    
    ) {

  }
  
  ngOnInit(): void {
    this.productoService.obtenerProducto().subscribe(productos =>{this.producto = productos})
    console.log(this.producto);
    
  }

}
