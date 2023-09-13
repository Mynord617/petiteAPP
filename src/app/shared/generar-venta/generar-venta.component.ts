import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { Productos } from 'src/app/productos/models/productos.interface';
import { FacturacionService } from '../facturacion/services/facturacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent implements OnInit {

  public producto: Productos[] = []; 
  
  constructor(
    private productoService: ProductosService,
    private facturacionService: FacturacionService
    
    ) {

  }
  
  ngOnInit(): void {
    this.productoService.obtenerProducto().subscribe(productos =>{this.producto = productos})
    console.log(this.producto);
    
  }
  argregar(producto: Productos){
    this.facturacionService.agregarProducto(producto);
  }
  confirmacionEnvio(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Producto agregado con Exito!',
      showConfirmButton: false,
      timer: 1000
    })

  }
}
