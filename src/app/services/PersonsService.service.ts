import { Injectable } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { LoggingService } from './LoggingService.service';
@Injectable()
export class PersonsService {
  persons: Persona[] = [
    new Persona('Rodrigo', 'Orozco'),
    new Persona('Don', 'Pepito'),
    new Persona('Don', 'Jose'),
  ];

  constructor(private LoggingService: LoggingService) {}

  pushNewPerson = (person: Persona) => {
    this.persons.push(person);
    this.LoggingService.sendMessageConsole('person added succesfuly!');
  };
}
