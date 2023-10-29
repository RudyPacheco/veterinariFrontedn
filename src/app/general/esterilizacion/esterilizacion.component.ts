import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { estereilizacionModel } from 'src/app/models/esteerilizacionModel';
import { esterilizacionServie } from 'src/app/services/esterilizacion.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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
      nombres: ["Rudy", [Validators.required]],
      dpi:["", [Validators.required,Validators.minLength(13),Validators.maxLength(13)]],
      direccion: ["Chiyax", [Validators.required]],
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
        this.generarPdf();
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



  generarPdf(){
    html2canvas(document.getElementById("pdfDiv")!).then(canvas=>{
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p','mm','a4');
      let width = pdf.internal.pageSize.getWidth();
      let heigth = canvas.height * width /canvas.width;
      pdf.addImage(contentDataURL,'PNG',0,0,width,heigth)
      pdf.save('esterilizacion.pdf')
    });
  }


  imprimirAutorizacion(){
    console.log("imrpimiendo")

    let docDefinition = {
      
      content: [
       
        {
          style: 'header',

          text: 'Autorizacion Esterilizacion',
        },
         {
          
          columns: [
            {

              text: ''
            },
            {
              style: 'header',

              text: 'Autorizacion Esterilizacion',
            },
            {
              text: ''
            }
          ]
        },
        {
          
          columns: [
            {

              text: 'Yo :'+this.registerForm.get("nombres")?.value+' Direccion :'+this.registerForm.get("direccion")?.value
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
            }
          ]
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          columnGap: 20

        },
        bigger: {
          fontSize: 15,
          italics: true,

        }
      },
      defaultStyle: {
        columnGap: 20,

      }
    };

let xd = {
  content: [
    'this prueba',
    {
      alignment: 'justify',
      columns: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
        }
      ]
    }
  ]
}


    pdfMake.createPdf(docDefinition).open();


  }


}
