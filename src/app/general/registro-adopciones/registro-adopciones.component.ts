import { Component, OnInit } from '@angular/core';
import { adopcionModel } from 'src/app/models/adopcionModel';
import { adopcionService } from 'src/app/services/adopcion.service';

@Component({
  selector: 'app-registro-adopciones',
  templateUrl: './registro-adopciones.component.html',
  styleUrls: ['./registro-adopciones.component.css']
})
export class RegistroAdopcionesComponent implements OnInit {


  listaAdopciones:adopcionModel[]=[];

  constructor(private adopcionService:adopcionService){
  
  }
  
  
    ngOnInit(): void {
      this.adopcionService.listarAdopciones().subscribe((created:adopcionModel[])=>{
        this.listaAdopciones=created;
      })
  
    }

}
