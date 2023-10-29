import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AdopcionComponent } from './general/adopcion/adopcion.component';
import { EsterilizacionComponent } from './general/esterilizacion/esterilizacion.component';
import { InicioComponent } from './general/inicio/inicio.component';
import { RescateComponent } from './general/rescate/rescate.component';
import { RegistroRescatesComponent } from './general/registro-rescates/registro-rescates.component';
import { RegistroAdopcionesComponent } from './general/registro-adopciones/registro-adopciones.component';
import { CreacionUsuarioComponent } from './admin/creacion-usuario/creacion-usuario.component';
import { ControlUsuarioComponent } from './admin/control-usuario/control-usuario.component';
import { RegitroEsterilizacionComponent } from './general/regitro-esterilizacion/regitro-esterilizacion.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';

const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'', redirectTo:'login', pathMatch:'full' },
{path:'home',component:InicioComponent},
{path:'rescate',component:RescateComponent},
{path:'adpcion',component:AdopcionComponent},
{path:'esterilizacion',component:EsterilizacionComponent},
{path:'registroRescate',component:RegistroRescatesComponent},
{path:'registroAdopcion',component:RegistroAdopcionesComponent},
{path:'creacionUser',component:CreacionUsuarioComponent},
{path:'gestionUser',component:ControlUsuarioComponent},
{path:'registroEsterilizacion',component:RegitroEsterilizacionComponent},
{path:'recuperacion',component:RecuperacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
