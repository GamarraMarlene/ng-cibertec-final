import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import Usua from '../../usuario.model';
import { Location } from '@angular/common';



@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
    @Input() model: Usua =new  Usua;
    @Input() type: string;
    @Output() handleSubmit: EventEmitter<Usua> = new EventEmitter<Usua>();
    buttonTitle: string = '';

    constructor(private location: Location){

    }

    ngOnInit() {
        this.buttonTitle = this.type === 'edit' ? 'Actualizar' : 'Crear';
    }
    onCancel(){
        this.location.back();
    }
    onSubmit(form){
        const {valid, value}= form;
        if (valid){
            this.handleSubmit.emit(value);
        }
        console.log(form);
    }
}
