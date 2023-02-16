import { Persona } from '../personas/persona.model';

export class PersonsService {
  persons: Persona[] = [
    new Persona('Rodrigo', 'Orozco'),
    new Persona('Don', 'Pepito'),
    new Persona('Don', 'Jose'),
  ];

  pushNewPerson = (person: Persona) => {
    this.persons.push(person);
  };
}
