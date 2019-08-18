import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './shared/directves/hover.directive';

import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './shared/services/usuario.service';
import { UsuarioFormComponent } from './shared/forms/usuario-form.component';

@NgModule({
declarations: [
ListarUsuarioComponent,
HoverDirective,
CrearUsuarioComponent,
EditarUsuarioComponent,
UsuarioFormComponent
],
imports: [
CommonModule,
RouterModule,
FormsModule
],
exports: [
ListarUsuarioComponent
],
providers:[
UsuarioService 
]
})
export class UsuarioModule { }