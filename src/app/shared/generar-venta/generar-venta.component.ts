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
    this.productoService.obtenerProducto().subscribe(productos =>{this.producto = productos});
    console.log(this.producto);
    
  }
  argregar(producto: Productos){
    
    
    //actualizacion
    let n = producto.cantidad;
    
    if(n>0){
      this.facturacionService.agregarProducto(producto);
      this.confirmacionEnvio();
      n = n-1;
      producto.cantidad=n;
      this.productoService.actualizarCant(producto);
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ya no hay producto',
        showConfirmButton: true
      })
    }
    

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
