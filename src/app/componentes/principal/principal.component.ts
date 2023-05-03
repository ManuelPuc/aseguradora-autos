import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(private router: Router) { }
//se crea la funcion navegarCotizacion para poder acceder a la 
//siguiente ruta.
  navegarCotizacion() {
    this.router.navigate(['/cotizacion']);
  }
}
