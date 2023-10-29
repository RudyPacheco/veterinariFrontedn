import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { usuarioLogin } from 'src/app/models/usuarioLogin';
import { loginServices } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {

  constructor(private serviceLogin: loginServices) { }

  usuario: string = "";




  login() {
    console.log(this.usuario);

    if (this.usuario !== "" ) {
      this.serviceLogin.recuperarContrasena(new usuarioLogin(this.usuario, "")).subscribe((created: usuario) => {

        console.log("entro a enviado")
        if (created) {
          console.log("encontrado");
          console.log(created.contrasena);
          let mensaje = "Su contraseña es : "+created.contrasena+"\n"+"No comparata esto con nadie"
          Swal.fire(mensaje)
         // this.router.navigate(['home'])
        }else{
          console.log("datos erroneos")
          Swal.fire({
            icon: "error",
            title: "No se encontro el usuario",
            text: "Vuelve a intentarlo"
          })
        }





      })
    }else{
      Swal.fire({
        icon: "error",
        title: "Campos vacios",
        text: "Vuelve a intentarlo"
      })
    }





  }


  
}
