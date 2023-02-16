import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  
  persons:Persona[] = [ 
    new Persona("Rodrigo", "Orozco"), 
    new Persona("Don", "Pepito"), 
    new Persona("Don", "Jose")
  ]

  pushNewPerson = (person:Persona)=>{
    this.persons.push(person);
  }
}
