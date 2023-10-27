import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { rescateModel } from "../models/rescateModel";
import { adopcionModel } from "../models/adopcionModel";

@Injectable({
    providedIn:'root'
})



export class adopcionService{


    

    readonly APY_URL = "http://localhost:3000/adopcion";
    readonly APY_REMOTE_URL = "https://veterinaria-backed.vercel.app/adopcion"

    constructor(private httpClient: HttpClient) {  }

    public registrarRescate(adopcion:adopcionModel): Observable<adopcionModel>{
        return this.httpClient.post<adopcionModel>(this.APY_REMOTE_URL+"/registrar",adopcion);
    }


    public listarAdopciones(): Observable<adopcionModel[]> {
        return this.httpClient.get<adopcionModel[]>(this.APY_REMOTE_URL+"/listar");
      }


  

}