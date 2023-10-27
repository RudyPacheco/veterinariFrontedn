import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { usuario } from "../models/usuario";
import { usuarioLogin } from "../models/usuarioLogin";

@Injectable({
    providedIn:'root'
})



export class loginServices{


    usuarioLog!:usuario;

    readonly APY_URL = "http://localhost:3000/user/login";


   readonly APY_REMOTE_URL = "https://veterinaria-backed.vercel.app/user/login"


    constructor(private httpClient: HttpClient) {  }

    public iniciarSesion(usuario:usuarioLogin): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_REMOTE_URL,usuario).pipe(   
              tap((resp: usuario) => {
            if (resp) {
              if (resp.codigo_rol != undefined) {
                this.usuarioLog = resp
                localStorage.clear();
                localStorage.setItem('autenticado', JSON.stringify(this.usuarioLog));
              }
            }
          })
        )





    }


    getUsuarioSesion(): usuario | undefined {
        if (!this.usuarioLog) {
          this.usuarioLog = JSON.parse(localStorage.getItem('autenticado')!) || undefined;
        }
        return this.usuarioLog;
      }

    public agregarUsuario(usuario:usuario){
        this.usuarioLog=usuario;
    }


    public getUsuario(){
        return this.usuarioLog;
    }

}