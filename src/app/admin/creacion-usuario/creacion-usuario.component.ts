import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { usuarioService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creacion-usuario',
  templateUrl: './creacion-usuario.component.html',
  styleUrls: ['./creacion-usuario.component.css']
})
export class CreacionUsuarioComponent implements OnInit {

constructor(private formBuilder: FormBuilder, private router: Router,private usuarioServie:usuarioService){}

  registroForm!: FormGroup;

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      usuario:["",[Validators.required]],
      contrasena:["",[Validators.required]],
      sexo:["",[Validators.required]],
      telefono:["",[Validators.required]],
      codigo_rol:["",[Validators.required]]
      
    });
  }


  registrarUsuario(){
    this.usuarioServie.registrarUsuario(this.registroForm.value).subscribe((created:usuario) => {

      console.log("entro a enviado")

      if (created) {
        this.router.navigate(['home']);
        Swal.fire({
          icon: "success",
          title: "Realizado",
          text: "Usuario registrado exitosamente"
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectos",
          text: "Vuelve a intentarlo"
        })
      }




    })
  }

}
