import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nameInput:string = '';
  lastNameInput:string = '';
  @Output() personCreated = new EventEmitter<Persona>();

  addPerson = () => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    this.personCreated.emit(newPersonAdded);
  }
}
