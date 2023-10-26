import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { usuarioLogin } from 'src/app/models/usuarioLogin';
import { loginServices } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serviceLogin: loginServices, private router: Router) { }

  usuario: string = "";
  password: string = "";



  login() {
    console.log(this.usuario);
    console.log(this.password);
    if (this.usuario !== "" && this.password !== "") {
      this.serviceLogin.iniciarSesion(new usuarioLogin(this.usuario, this.password)).subscribe((created: usuario) => {

        console.log("entro a enviado")
        if (created) {
          console.log("encontrado");
          console.log(created.codigo_rol);
          this.router.navigate(['home'])
        }else{
          console.log("datos erroneos")
          Swal.fire({
            icon: "error",
            title: "Usuario o contraseña incorrectos",
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
