import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FacturacionService } from '../facturacion/services/facturacion.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent  implements OnInit{

  total: number = 0;

  constructor (private facturacionService: FacturacionService){}

  ngOnInit() {
   this.facturacionService.producto
   .pipe(map(products =>{
    return products.reduce((prev, curr) => prev + curr.precio, 0)
   }))
   .subscribe(valor =>{
    this.total = valor;
    console.log(valor);
    
   })
  }

}
