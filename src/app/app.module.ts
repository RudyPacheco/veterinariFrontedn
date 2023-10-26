import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CreacionUsuarioComponent } from './admin/creacion-usuario/creacion-usuario.component';
import { RescateComponent } from './general/rescate/rescate.component';
import { AdopcionComponent } from './general/adopcion/adopcion.component';
import { EsterilizacionComponent } from './general/esterilizacion/esterilizacion.component';
import { InicioComponent } from './general/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroAdopcionesComponent } from './general/registro-adopciones/registro-adopciones.component';
import { RegistroRescatesComponent } from './general/registro-rescates/registro-rescates.component';
import { ControlUsuarioComponent } from './admin/control-usuario/control-usuario.component';
import { RegitroEsterilizacionComponent } from './general/regitro-esterilizacion/regitro-esterilizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreacionUsuarioComponent,
    RescateComponent,
    AdopcionComponent,
    EsterilizacionComponent,
    InicioComponent,
    NavbarComponent,
    RegistroAdopcionesComponent,
    RegistroRescatesComponent,
    ControlUsuarioComponent,
    RegitroEsterilizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
