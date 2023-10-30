import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adopcionModel } from 'src/app/models/adopcionModel';
import { adopcionService } from 'src/app/services/adopcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private adopcionService:adopcionService) { }


  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      dpiadoptante: ["", [Validators.required,Validators.maxLength(13),Validators.minLength(12)]],
      edad:["",[Validators.required]],
      telefono:["",[Validators.required]],
      tamanio:["",[Validators.required]],
      sexo:["",[Validators.required]],
      tipo:["",[Validators.required]],
      fecha: ["", [Validators.required]],
      comentarios:["",],
    });
  }



  registrarAdopcion(){


    if (this.registerForm.valid) {

      let tamanio:number = this.registerForm.get('dpiadoptante')?.value;
      let tamanioString = tamanio.toString();
      if (tamanioString.length==13) {
        




        console.log(this.registerForm.value);

    
        this.adopcionService.registrarRescate(this.registerForm.value).subscribe((created: adopcionModel) => {
    
          console.log("entro a enviado")
    
          if (created) {
            this.router.navigate(['home']);
            Swal.fire({
              icon: "success",
              title: "Realizado",
              text: "Adopcion registrada exitosamente"
            })
          }else{
            Swal.fire({
              icon: "error",
              title: "Credenciales incorrectos",
              text: "Vuelve a intentarlo"
            })
          }
    
    
    
    
        })






      }else{
        //error
        console.log("error 1");
        let mensaje = "El dpi debe de tener un tamaño de 13"
        Swal.fire(mensaje)

      }
    }else{
      console.log("error 2");
      
    }


  }


}
