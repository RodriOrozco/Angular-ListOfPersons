import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { LoggingService } from './LoggingService.service';
@Injectable()
export class PersonsService {
  persons: Persona[] = [
    new Persona('Rodrigo', 'Orozco'),
    new Persona('Don', 'Pepito'),
    new Persona('Don', 'Jose'),
  ];

  greet = new EventEmitter<number>();

  constructor(private LoggingService: LoggingService) {}

  pushNewPerson = (person: Persona) => {
    this.persons.push(person);
    this.LoggingService.sendMessageConsole('person added succesfuly!');
  };

  findPerson = (index: number): Persona => {
    let person: Persona = this.persons[index];
    return person;
  };

  editPerson = (index: number, person: Persona) => {
    let personToEdit = this.persons[index];
    personToEdit.name = person.name;
    personToEdit.lastName = person.lastName;
  };

  deletePersonService = (index: number) => {
    this.persons.splice(index, 1);
  };
}
