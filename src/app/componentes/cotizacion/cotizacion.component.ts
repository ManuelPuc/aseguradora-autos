import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent{
  mostrandoElementos = false;
  constructor(private router: Router) {}
  //se crea la ruta para acceder a otro componente.
  Cotizacion() {
    this.router.navigate(['/cotizacion-dos']);
  }
 

  alternarMostrar() {
    this.mostrandoElementos = !this.mostrandoElementos;
  }
}