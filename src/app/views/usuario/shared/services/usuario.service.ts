import {Injectable } from "@angular/core";
import Usuario  from '../../usuario.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class UsuarioService {
    private api: string = environment.api;
    private endpoint:string = 'users';
    constructor(
        private http: HttpClient
    ){}

    getUsuarios(){
        const URL: string= `${this.api}/${this.endpoint}/`;
        return this.http.get(URL);
    }
    getUsuario(id: number){
        const URL: string= `${this.api}/${this.endpoint}/${id}/`;
        return this.http.get(URL);

    }
    deleteUsuario(id:number){
        const URL: string= `${this.api}/${this.endpoint}/${id}/`;
        return this.http.delete(URL);

        
    }
    createUsuario(usuarios: Usuario){
        const URL : string = `${this.api}/${this.endpoint}/`;
        return this.http.post (URL, usuarios,{
            headers:{
                'Content-type': 'application/json'
            }
        })
    }
    updateUsuario (usuarios: Usuario){
        const URL: string= `${this.api}/${this.endpoint}/${usuarios.id}/`;
        return this.http.put (URL, usuarios,{
            headers:{
                'Content-type': 'application/json'
            }
        })
    }
}