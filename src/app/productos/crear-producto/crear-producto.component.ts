import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2';
//import { Storage, ref, uploadBytes } from '@angular/fire/storage';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
 
  formulario: FormGroup;

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

  constructor(
    private productoServicio: ProductosService,

  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      descripcion: new FormControl,
      precio: new FormControl,
      cantidad: new FormControl,
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
    this.formulario.reset();
    console.log(respuesta);
    
  }


 async getProducto() {

    const respuesta = await this.productoServicio.obtenerProductoPorNombre()
    console.log(respuesta);
    
  } 
  
  confirmacionEnvio(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Producto creado con exito!',
      showConfirmButton: false,
      timer: 1200
    })

  }
  
  /*

    // constructor(
          private storage: Storage
    )

   cargarImagen($event: any){
    const imagen = $event.target.files[0];
    console.log(imagen);
    const imgRef = ref(this.storage, `imagenes/${imagen.name}`)
    uploadBytes(imgRef, imagen)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  */
}
