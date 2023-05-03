import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CotizacionComponent } from './componentes/cotizacion/cotizacion.component';
import { CapturistaComponent } from './componentes/capturista/capturista.component';
import { CotizacionDosComponent } from './componentes/cotizacion-dos/cotizacion-dos.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CotizacionComponent,
    CapturistaComponent,
    CotizacionDosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
