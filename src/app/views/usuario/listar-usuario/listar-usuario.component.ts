import { Component, OnInit } from '@angular/core';
import Usua from '../usuario.model';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  allUsuarios: Usua[];

  constructor(
    private usuaService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuaService.getUsuarios().subscribe((usua:Usua[]) => {
      this.allUsuarios = usua;
    });
  }
  onRemove(id: number){
    this.usuaService.deleteUsuario(+id).subscribe((response) => {
      this.allUsuarios = this.allUsuarios.filter(usua => usua.id !== id);
    });
  }

}
