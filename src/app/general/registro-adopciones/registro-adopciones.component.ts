import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { adopcionModel } from 'src/app/models/adopcionModel';
import { fechaModel } from 'src/app/models/busquedaFecha';
import { eliminarModel } from 'src/app/models/eliminarModel';
import { rescateModel } from 'src/app/models/rescateModel';
import { adopcionService } from 'src/app/services/adopcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-adopciones',
  templateUrl: './registro-adopciones.component.html',
  styleUrls: ['./registro-adopciones.component.css']
})
export class RegistroAdopcionesComponent implements OnInit {


  listaAdopciones:adopcionModel[]=[];
  fechaIncial1=''
  fechaFinalL=''


  constructor(private adopcionService:adopcionService){
  
  }
  
  
    ngOnInit(): void {
      this.adopcionService.listarAdopciones().subscribe((created:adopcionModel[])=>{
        this.listaAdopciones=created;
      })
  
    }

generarCuerpo(){
  let cuerpo = [];

  this.listaAdopciones.forEach(adop=>{
    cuerpo.push([adop.nombreadoptante,adop.apellidoadoptante,adop.dpiadoptante,adop.telefonoadoptante,adop.edadadoptante,adop.fecha,adop.tamaniomascota,adop.tipomascota,adop.sexo,adop.comentarios])
  })


}

    generarPdf(){

      let index = 1;
      let cuerpo:Array<any> = [];


      let sexo="";
      let tipo="";
      let tamanio="";

      this.listaAdopciones.forEach(adop=>{

        if (adop.sexo==1) {
          sexo="Macho";
  
        }else if (adop.sexo==2) {
          sexo="Hembra";
        }
  
        if (adop.tipomascota==1) {
          tipo="Perro";
  
        }else if (adop.tipomascota==2) {
          tipo="Gato";
        }

        if (adop.tamaniomascota==1) {
          tamanio="Pequeño";
  
        }else if (adop.tamaniomascota==2) {
          tamanio="Mediano";
        }else if (adop.tamaniomascota==3) {
          tamanio="Grande";
        }



        cuerpo.push([index,adop.nombreadoptante,adop.apellidoadoptante,adop.dpiadoptante,adop.telefonoadoptante,adop.edadadoptante,adop.fecha.substring(0, 10),tamanio,tipo,sexo,adop.comentarios])
        index=index+1;
      })
    
      console.log(cuerpo);

      const doc = new jsPDF({
        orientation:"portrait",
        unit:"px",
        format:"letter"
       });
     // const doc = new jsPDF('l','mm','a4');
     doc.setFontSize(20);
     doc.text("Listado Adopciones",doc.internal.pageSize.width /2 , 25,{align:'center'});

      autoTable(doc,{
        head:[['No.','Nombre','Apellido','Dpi','Telefono','Edad','Fecha','Tamaño','Tipo','Sexo','Comentarios']],
        body:cuerpo,
      })



      doc.save('adopcion.pdf')
    }


    generarReporteFecha(){
      console.log(this.fechaIncial1)
      console.log(this.fechaFinalL);
      
      this.adopcionService.listarAdopcionFecha(new fechaModel(this.fechaIncial1,this.fechaFinalL)).subscribe((created: adopcionModel[]) => {
        this.listaAdopciones = created;
      })
  
  
  
    }


    eliminarValor(index:number){
      console.log(index);
  
  
      Swal.fire({
        title: 'Seguro que quieres eliminar este registro?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'No',
        denyButtonText: `SI`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        
        } else if (result.isDenied) {
          this.adopcionService.eliminarRegistro(new eliminarModel(index)).subscribe((created: adopcionModel) => {
            console.log("eliminado")
            this.ngOnInit();
          })
      
         
      
        }
      })
  
  
  
  
    
      
    }
  


}
