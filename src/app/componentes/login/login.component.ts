import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  /*Las siguientes dos funciones contarán con validaciones de usuario y contraseña, lo que permitirá 
  que tanto el administrador como los capturistas accedan a sus respectivas páginas. 
  Cabe destacar que la implementación de dichas validaciones se llevará a cabo en el backend.*/
  Capturista() {
    this.router.navigate(['/capturista']);
  }
  Admin(){
    this.router.navigate(['/cotizacion-dos']);
  }
}
