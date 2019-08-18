import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import Usua from '../usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  updateSubs:Subscription;
  usua : Usua;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService, 
    private router: Router
  ) { }

  ngOnInit() {
    const {id} = this.route.snapshot.params;
    this.usuarioService.getUsuario(+id).subscribe((usua : Usua) => {
    this.usua = usua; 
    })
  }

  onSubmit(usua: Usua){
    usua.id=this.usua.id;
    this.updateSubs= this.usuarioService.updateUsuario(usua)
    .subscribe(() =>{
    this.router.navigate(['/usuarios']);
    });
    }

  ngOnDestroy(){
    if (this.updateSubs){
      this.updateSubs.unsubscribe();
    }
  }
}
