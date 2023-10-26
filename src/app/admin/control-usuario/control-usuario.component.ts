import { Component } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
import { loginServices } from 'src/app/services/login.service';
import { usuarioService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-usuario',
  templateUrl: './control-usuario.component.html',
  styleUrls: ['./control-usuario.component.css']
})
export class ControlUsuarioComponent {

  listaUsuarios:usuario[]=[];
  usuarioLog!:usuario;

  constructor(private usuarioService:usuarioService,private loginService:loginServices){
  
  }
  
  
    ngOnInit(): void {
      this.usuarioLog=this.loginService.getUsuarioSesion()!;

      
      this.usuarioService.listarUsuarios().subscribe((created:usuario[])=>{
        this.listaUsuarios=created;
      })
  
    }



    desactivarUsuarios(index:number){
      console.log(this.listaUsuarios[index]);

      Swal.fire({
        title: 'Seguro que quieres desactivar este usuario?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'No',
        denyButtonText: `SI`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        
        } else if (result.isDenied) {
          this.usuarioService.descativarUsuario(this.listaUsuarios[index]).subscribe((created:usuario)=>{
            if (created) {
              Swal.fire('Usuario desactivado!', '', 'success');
            }
          });
         
      
        }
      })





    }


    activarUsuarios(index:number){
      console.log(this.listaUsuarios[index]);


      Swal.fire({
        title: 'Desea activar este usuario?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.usuarioService.activarUsuario(this.listaUsuarios[index]).subscribe((created:usuario)=>{
            if (created) {
              Swal.fire('Usuario Activado!', '', 'success');
            }
          });
         
          

        } else if (result.isDenied) {
          

        }
      })


    }





}
