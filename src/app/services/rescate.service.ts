import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { rescateModel } from "../models/rescateModel";

@Injectable({
    providedIn:'root'
})



export class rescateService{


    

    readonly APY_URL = "http://localhost:3000/rescate";
    readonly APY_REMOTE_URL = "https://veterinaria-backed.vercel.app/rescate"


    constructor(private httpClient: HttpClient) {  }

    public registrarRescate(rescate:rescateModel): Observable<rescateModel>{
        return this.httpClient.post<rescateModel>(this.APY_REMOTE_URL+"/registrar",rescate);
    }

    public listarRescates(): Observable<rescateModel[]> {
        return this.httpClient.get<rescateModel[]>(this.APY_REMOTE_URL+"/listar");
      }


  

}