export class usuario{
    
    nombre:string;
    apellido:string;
    usuario:string;
    contrasena:string;
    sexo!:number;
    codigo_rol:number;
    activo!:boolean;


    constructor(usuario:string,nombre:string,apellido:string,contrasena:string,codigo_rol:number){
        this.usuario=usuario;
        this.nombre=nombre;
        this.apellido=apellido;
        this.contrasena=contrasena;
        this.codigo_rol = codigo_rol;


    }    

}