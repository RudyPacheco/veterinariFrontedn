import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adopcionModel } from 'src/app/models/adopcionModel';
import { rescateModel } from 'src/app/models/rescateModel';
import { rescateService } from 'src/app/services/rescate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rescate',
  templateUrl: './rescate.component.html',
  styleUrls: ['./rescate.component.css']
})
export class RescateComponent {

  constructor(private formBuilder: FormBuilder, private router: Router,private rescateService:rescateService) { }


  rescateForm!: FormGroup;

  ngOnInit(): void {
    this.rescateForm = this.formBuilder.group({
      lugar: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      tipo:["",[Validators.required]],
      sexo:["",[Validators.required]],
      estado:["",[Validators.required]],
      caracteristicas:["",[Validators.required]],
      
    });
  }



  registrarAdopcion(){
    console.log(this.rescateForm.value)

    this.rescateService.registrarRescate(this.rescateForm.value).subscribe((created:rescateModel) => {

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
