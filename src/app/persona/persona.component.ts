import { Component, Input } from '@angular/core';
import { Persona } from '../personas/persona.model';
import { PersonsService } from '../services/PersonsService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent {
  @Input() person!: Persona;
  @Input() index!: number;

  constructor(private PersonsService: PersonsService) {}

  sendGreeting = () => {
    this.PersonsService.greet.emit(this.index);
  };
}
