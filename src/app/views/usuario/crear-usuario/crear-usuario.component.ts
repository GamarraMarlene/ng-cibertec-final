import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Usua from '../usuario.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  createSubs:Subscription;
  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(usua: Usua){
    this.createSubs = this.usuarioService.createUsuario(usua).subscribe((usua: Usua) => {
      this.router.navigate(['/usuarios']);
    });
  }
  ngOnDestroy(){
    if (this.createSubs){
      this.createSubs.unsubscribe();
    }
  }
}
