// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { LoggingService } from '../services/LoggingService.service';
import { PersonsService } from '../services/PersonsService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [LoggingService],
})
export class FormularioComponent {
  // constructor(private LogginService:LoggingService){}
  constructor(private PersonsService: PersonsService) {}

  nameInput: string = '';
  lastNameInput: string = '';
  // @Output() personCreated = new EventEmitter<Persona>();

  addPerson = (): void => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    // this.personCreated.emit(newPersonAdded);
    // this.LogginService.sendMessageConsole('send new person and his name is: ' + this.nameInput + ' ' + this.lastNameInput)
    this.PersonsService.pushNewPerson(newPersonAdded);

    this.nameInput = '';
    this.lastNameInput = '';
  };
}
