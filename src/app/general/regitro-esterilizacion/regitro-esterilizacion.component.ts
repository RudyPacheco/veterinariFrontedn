import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { fechaModel } from 'src/app/models/busquedaFecha';
import { eliminarModel } from 'src/app/models/eliminarModel';
import { estereilizacionModel } from 'src/app/models/esteerilizacionModel';
import { esterilizacionServie } from 'src/app/services/esterilizacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regitro-esterilizacion',
  templateUrl: './regitro-esterilizacion.component.html',
  styleUrls: ['./regitro-esterilizacion.component.css']
})
export class RegitroEsterilizacionComponent implements OnInit {



  listaEsterilizacion: estereilizacionModel[] = [];
  fechaIncial1=''
  fechaFinalL=''


  constructor(private esterilizacionService: esterilizacionServie) {

  }


  ngOnInit(): void {
    this.esterilizacionService.listarEsterilizaciones().subscribe((created: estereilizacionModel[]) => {
      this.listaEsterilizacion = created;
      created.forEach(item => {
        console.log(item)
      })
    })

  }

  generarPdf() {

    let index = 1;
    let cuerpo: Array<any> = [];

    let sexo = "";
    let tipo = "";


    this.listaEsterilizacion.forEach(adop => {
      if (adop.sexo == 1) {
        sexo = "Macho";

      } else if (adop.sexo == 2) {
        sexo = "Hembra";
      }

      if (adop.tipo == 1) {
        tipo = "Perro";

      } else if (adop.tipo == 2) {
        tipo = "Gato";
      }

      cuerpo.push([index, adop.nombres, adop.dpi, adop.direccion, adop.telefono, adop.nombremascota, sexo, tipo, adop.edadmascota, adop.fecha.substring(0, 10)])
      index = index + 1;
    })

    console.log(cuerpo);


    // const doc = new jsPDF('l','mm','a4');
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "letter"
    });

    doc.setFontSize(20);
    doc.text("Listado Adopciones", doc.internal.pageSize.width / 2, 25, { align: 'center' });
    // doc.text("Reporte de Rescates", 40, 15, { baseline: 'top' });

    autoTable(doc, {
      head: [['No.', 'Nombre', 'Dpi', 'Direccion', 'Telefono', 'Nombre Mascota', 'Sexo', 'Tipo', 'Edad', 'Fecha']],
      body: cuerpo,
    })



    doc.save('Esterilizaciones.pdf')
  }


  generarReporteFecha(){
    console.log(this.fechaIncial1)
    console.log(this.fechaFinalL);
    
    this.esterilizacionService.listarEsterilizacionFecha(new fechaModel(this.fechaIncial1,this.fechaFinalL)).subscribe((created: estereilizacionModel[]) => {
      this.listaEsterilizacion = created;
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
        this.esterilizacionService.eliminarRegistro(new eliminarModel(index)).subscribe((created: estereilizacionModel) => {
          console.log("eliminado")
          this.ngOnInit();
        })
    
       
    
      }
    })




  
    
  }



}
