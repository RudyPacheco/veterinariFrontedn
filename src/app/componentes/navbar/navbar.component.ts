import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { loginServices } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  usuarioLog!: usuario;


  ngOnInit(): void {
    this.usuarioLog=this.loginService.getUsuarioSesion()!;

    //this.usuarioLog=new usuario("Josue","Josue","Morales","-",1);

    if(this.usuarioLog==undefined){
      this.router.navigate(['login']);
    }
  }


  constructor(private loginService:loginServices,private router:Router){}


  salir(){

    this.router.navigate(['login']);
    localStorage.clear();
  }


}
