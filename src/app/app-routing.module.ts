import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CotizacionComponent } from './componentes/cotizacion/cotizacion.component';
import { CapturistaComponent } from './componentes/capturista/capturista.component';
import { CotizacionDosComponent } from './componentes/cotizacion-dos/cotizacion-dos.component';
import { LoginComponent } from './componentes/login/login.component';
//se declaran las rutas para accesar a los diferentes componentes creados.
const routes: Routes = [ 
  { path: '', component: PrincipalComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'capturista', component: CapturistaComponent },
  { path: 'cotizacion_2', component: CotizacionDosComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
