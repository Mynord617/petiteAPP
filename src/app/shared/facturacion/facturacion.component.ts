import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/productos/models/productos.interface';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { DatePipe } from '@angular/common';
import { FacturacionService } from './services/facturacion.service';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit{

  currentDate: Date = new Date();
  productos: Productos[] = []

  constructor(
    private facturacionService: FacturacionService,
    private utilsService: UtilsService
    ) {

  }

  async ngOnInit() {
    this.facturacionService.producto.subscribe(products => {
      this.productos = products;
      console.log(products);
    })
    this.utilsService.dateObs.subscribe(valorDate =>{
      this.currentDate = valorDate;
    })
  }

  onClickEliminar(indice: number){
    this.facturacionService.eliminarProductoLista(indice)
    console.log(indice);
  }

}
