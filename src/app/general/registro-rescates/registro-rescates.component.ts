import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { fechaModel } from 'src/app/models/busquedaFecha';
import { eliminarModel } from 'src/app/models/eliminarModel';
import { rescateModel } from 'src/app/models/rescateModel';
import { rescateService } from 'src/app/services/rescate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-rescates',
  templateUrl: './registro-rescates.component.html',
  styleUrls: ['./registro-rescates.component.css']
})
export class RegistroRescatesComponent implements OnInit {


  listaRescates: rescateModel[] = [];
  fechaIncial1=''
  fechaFinalL=''


  constructor(private rescateService: rescateService) {

  }


  ngOnInit(): void {
    this.rescateService.listarRescates().subscribe((created: rescateModel[]) => {
      this.listaRescates = created;
    })

  }


  generarPdf() {

    let index = 1;
    let cuerpo: Array<any> = [];

    let sexo = "";
    let tipo = "";


    this.listaRescates.forEach(adop => {
      if (adop.sexo == 1) {
        sexo = "Macho";

      } else if (adop.sexo == 2) {
        sexo = "Hembra";
      }

      if (adop.tipomascota == 1) {
        tipo = "Perro";

      } else if (adop.tipomascota == 2) {
        tipo = "Gato";
      }

      cuerpo.push([index, adop.lugar, adop.fecha.substring(0, 10), tipo, sexo, adop.condicion, adop.caracteristicas])
      index = index + 1;
    })

    console.log(cuerpo);

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "letter"
    });
    // const doc = new jsPDF('p','mm','a4');
    doc.setFontSize(20);
    doc.text("Listado Rescates", doc.internal.pageSize.width / 2, 25, { align: 'center' });
    // doc.text("Reporte de Rescates", 40, 15, { baseline: 'top' });

    autoTable(doc, {
      head: [['No.', 'Lugar', 'Fecha', 'Tipo', 'Sexo', 'Condicion', 'Caracteristicas']],
      body: cuerpo,
    })



    doc.save('Rescate.pdf')
  }



  generarReporteFecha(){
    console.log(this.fechaIncial1)
    console.log(this.fechaFinalL);
    
    this.rescateService.listarRescatesFecha(new fechaModel(this.fechaIncial1,this.fechaFinalL)).subscribe((created: rescateModel[]) => {
      this.listaRescates = created;
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
        this.rescateService.eliminarRegistro(new eliminarModel(index)).subscribe((created: rescateModel) => {
          console.log("eliminado")
          this.ngOnInit();
        })
    
       
    
      }
    })




  
    
  }


}
