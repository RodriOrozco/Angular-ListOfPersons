import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { LoggingService } from '../services/LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [LoggingService]
})
export class FormularioComponent {

  constructor(private LogginService:LoggingService){}

  nameInput:string = '';
  lastNameInput:string = '';
  @Output() personCreated = new EventEmitter<Persona>();

  addPerson = () => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    this.personCreated.emit(newPersonAdded);
    this.LogginService.sendMessageConsole('send new person and his name is: ' + this.nameInput + ' ' + this.lastNameInput)

    this.nameInput = '';
    this.lastNameInput = '';

  }
}
