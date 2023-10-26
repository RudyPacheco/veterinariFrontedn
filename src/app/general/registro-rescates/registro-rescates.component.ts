import { Component, OnInit } from '@angular/core';
import { rescateModel } from 'src/app/models/rescateModel';
import { rescateService } from 'src/app/services/rescate.service';

@Component({
  selector: 'app-registro-rescates',
  templateUrl: './registro-rescates.component.html',
  styleUrls: ['./registro-rescates.component.css']
})
export class RegistroRescatesComponent implements OnInit{


  listaRescates:rescateModel[]=[];

constructor(private rescateService:rescateService){

}


  ngOnInit(): void {
    this.rescateService.listarRescates().subscribe((created:rescateModel[])=>{
      this.listaRescates=created;
    })

  }


}
