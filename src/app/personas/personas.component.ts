import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  nameInput:string = '';
  lastNameInput:string = '';
  persons:Persona[] = [ 
    new Persona("Rodrigo", "Orozco"), 
    new Persona("Don", "Pepito"), 
    new Persona("Don", "Jose")
  ]

  addPerson = () => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    this.persons.push(newPersonAdded);

  }
}
