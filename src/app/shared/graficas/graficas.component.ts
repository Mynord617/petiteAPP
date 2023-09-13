import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit{




  ngOnInit(): void {
    
  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Alitas BBQ', 'Pollo con Tajadas', 'Pescado Frito', 'Pollo a la plancha', 'Cordero', 'Sopa de res'],
      datasets: [{
        label: 'Grafica Venta de Producto',
        data: [12, 19, 3, 5, 2, 9],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart("myChart2", {
    type: 'bar',
    data: {
      labels: ['Desayuno', 'Almuerzo', 'Cena', 'Frites', 'Buffet', 'Mariscos'],
      datasets: [{
        label: 'Grafica Venta de Producto',
        data: [14, 19, 20, 5, 16, 10],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

}
