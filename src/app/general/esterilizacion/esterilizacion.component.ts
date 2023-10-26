import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { estereilizacionModel } from 'src/app/models/esteerilizacionModel';
import { esterilizacionServie } from 'src/app/services/esterilizacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-esterilizacion',
  templateUrl: './esterilizacion.component.html',
  styleUrls: ['./esterilizacion.component.css']
})
export class EsterilizacionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,private esterilizacionService:esterilizacionServie) { }


  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombres: ["", [Validators.required]],
      dpi:["", [Validators.required]],
      direccion: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      nombreMascota: ["", [Validators.required]],
      numeroTurno: ["", [Validators.required]],
      sexo: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      vacunas: ["", [Validators.required]],
      espeVacunas: ["", [Validators.required]],
      desparasitado: ["", [Validators.required]],
      preanada: ["", [Validators.required]],
      espePrenada: ["", [Validators.required]],
      edadMascota: ["", [Validators.required]],
      anticonceptivos: ["", [Validators.required]],
      enfermedad: ["", [Validators.required]],
      horaAyuno: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      comentarios: ["",],
    });
  }



  
  registrarEsterilizacion(){
    console.log(this.registerForm.value);

    
    this.esterilizacionService.registrarRescate(this.registerForm.value).subscribe((created: estereilizacionModel) => {

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
  }




}
