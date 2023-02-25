import { Injectable, EventEmitter } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { LoggingService } from './LoggingService.service';
import { DataService } from './DataServices.service';
@Injectable()
export class PersonsService {
  persons: Persona[] = [];

  greet = new EventEmitter<number>();

  constructor(
    private LoggingService: LoggingService,
    private dataService: DataService
  ) {}

  setPersons = (persons: Persona[]) => {
    this.persons = persons;
  };

  getPersons = () => {
    return this.dataService.getPersonsDataService();
  };

  pushNewPerson = (person: Persona) => {
    if (this.persons === null) {
      this.persons = [];
    }
    this.persons.push(person);
    this.LoggingService.sendMessageConsole('person added succesfuly!');
    this.dataService.savePerson(this.persons);
  };

  findPerson = (index: number): Persona => {
    let person: Persona = this.persons[index];
    return person;
  };

  editPerson = (index: number, person: Persona) => {
    let personToEdit = this.persons[index];
    personToEdit.name = person.name;
    personToEdit.lastName = person.lastName;
    this.dataService.editPersonDataService(index, person);
  };

  deletePersonService = (index: number) => {
    this.persons.splice(index, 1);
    this.dataService.deletePersonDataService(index);
    this.orderDataBasePersons();
  };

  orderDataBasePersons = () => {
    if (this.persons !== null) {
      this.dataService.savePerson(this.persons);
    }
  };
}
