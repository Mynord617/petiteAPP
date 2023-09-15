import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/productos/models/productos.interface';
import { ProductosService } from 'src/app/productos/services/productos.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {


  categoria= [
    {
      codigo: "Buffet", 
      nombre:"Buffet"
    },
    {
      codigo: "Desayuno",
      nombre:"Desayuno"
    },
    {
      codigo: "Almuerzo",
      nombre:"Almuerzo"
    },
    {
      codigo: "Cena",
      nombre:"Cena"
    },
    {
      codigo: "Mariscos",
      nombre:"Mariscos"
    },
    {
      codigo: "Frites",
      nombre:"Frites"
    },
  ]

  public productos: Productos[] = [];

  constructor(private productoService: ProductosService){
    
  }



  ngOnInit(): void {
    this.productoService.obtenerProducto().subscribe(productos =>{this.productos = productos})
    console.log(this.productos);
    }

}
