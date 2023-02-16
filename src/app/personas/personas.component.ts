import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonsService } from '../services/PersonsService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  persons: Persona[] = [];

  constructor(private PersonsService: PersonsService) {}

  ngOnInit(): void {
    this.persons = this.PersonsService.persons;
  }

  // addPersonList = (person: Persona) => {
  //   this.PersonsService.pushNewPerson(person);
  // };
}
