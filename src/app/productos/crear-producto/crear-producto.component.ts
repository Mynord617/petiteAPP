import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  
  formulario: FormGroup;

  categoria= [
    {
      codigo: "BUF",
      nombre:"Buffet"
    },
    {
      codigo: "DES",
      nombre:"Desayuno"
    },
    {
      codigo: "ALM",
      nombre:"Almuerzo"
    },
    {
      codigo: "CEN",
      nombre:"Cena"
    },
    {
      codigo: "MAR",
      nombre:"Mariscos"
    },
    {
      codigo: "FRI",
      nombre:"Frites"
    },
  ]

  constructor(
    private productoServicio: ProductosService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      descripcion: new FormControl,
      precio: new FormControl,
      categoria: new FormControl,
      imagen: new FormControl
    })
  }
  
  
  
  
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  async  onSubmit(){
    console.log(this.formulario.value);
    const respuesta =  await this.productoServicio.agregarNuevoProducto(this.formulario.value);
    console.log(respuesta);
    
  }
}
