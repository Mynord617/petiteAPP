import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/productos/models/productos.interface';
import { ProductosService } from 'src/app/productos/services/productos.service';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  productos: Productos[] = [];

  constructor(private productoService: ProductosService) {

  }



  async ngOnInit() {
  
    //this.productos = (await this.productoService.obtenerProducto()).resultados;
  
  }
}
