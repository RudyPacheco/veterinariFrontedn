import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { estereilizacionModel } from "../models/esteerilizacionModel";



@Injectable({
    providedIn:'root'
})



export class esterilizacionServie{


    

    readonly APY_URL = "http://localhost:3000/esterilizacion";
    readonly APY_REMOTE_URL = "https://veterinaria-backed.vercel.app/esterilizacion"


    constructor(private httpClient: HttpClient) {  }

    public registrarRescate(adopcion:estereilizacionModel): Observable<estereilizacionModel>{
        return this.httpClient.post<estereilizacionModel>(this.APY_REMOTE_URL+"/registrar",adopcion);
    }


    public listarEsterilizaciones(): Observable<estereilizacionModel[]> {
        return this.httpClient.get<estereilizacionModel[]>(this.APY_REMOTE_URL+"/listar");
      }


  

}