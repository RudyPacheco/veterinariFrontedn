import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { usuario } from "../models/usuario";

@Injectable({
    providedIn:'root'
})



export class usuarioService{


    

    readonly APY_URL = "http://localhost:3000/user/registrar";


    readonly APY_URL2 = "http://localhost:3000/user/getUsers";

    readonly APY_ACTIVAR = "http://localhost:3000/user/activar";

    readonly APY_DESACTIVAR = "http://localhost:3000/user/desactivar";



    readonly APY_REMOTE_URL = "https://veterinaria-backed.vercel.app/user/registrar"


    readonly APY_REMOTE_URL2 = "https://veterinaria-backed.vercel.app/user/getUsers"

    readonly APY_REMOTE_Activar = "https://veterinaria-backed.vercel.app/user/activa"

    readonly APY_REMOTE_DESACTIVAR = "http://localhost:3000/user/user/desactivar";

    constructor(private httpClient: HttpClient) {  }

    public registrarUsuario(usuario:usuario): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_REMOTE_URL,usuario);
    }

    public listarUsuarios(): Observable<usuario[]> {
        return this.httpClient.get<usuario[]>(this.APY_REMOTE_URL2);
      }


      public descativarUsuario(usuario:usuario): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_REMOTE_Activar,usuario);
    }


    public activarUsuario(usuario:usuario): Observable<usuario>{
        return this.httpClient.post<usuario>(this.APY_REMOTE_DESACTIVAR,usuario);
    }

    

  

}