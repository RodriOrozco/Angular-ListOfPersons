import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonsService } from '../services/PersonsService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  persons: Persona[] = [];

  constructor(private PersonsService: PersonsService, private router: Router) {}

  ngOnInit(): void {
    this.persons = this.PersonsService.persons;
  }

  add = () => {
    this.router.navigate(['personas/agregar']);
  };
  // addPersonList = (person: Persona) => {
  //   this.PersonsService.pushNewPerson(person);
  // };
}
