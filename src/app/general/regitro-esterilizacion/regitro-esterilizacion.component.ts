import { Component, OnInit } from '@angular/core';
import { estereilizacionModel } from 'src/app/models/esteerilizacionModel';
import { esterilizacionServie } from 'src/app/services/esterilizacion.service';

@Component({
  selector: 'app-regitro-esterilizacion',
  templateUrl: './regitro-esterilizacion.component.html',
  styleUrls: ['./regitro-esterilizacion.component.css']
})
export class RegitroEsterilizacionComponent implements OnInit {



  listaEsterilizacion:estereilizacionModel[]=[];

  constructor(private esterilizacionService:esterilizacionServie){
  
  }
  
  
    ngOnInit(): void {
      this.esterilizacionService.listarEsterilizaciones().subscribe((created:estereilizacionModel[])=>{
        this.listaEsterilizacion=created;
        created.forEach(item=>{
          console.log(item)
        })
      })
  
    }





}
