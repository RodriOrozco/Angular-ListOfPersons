import { Component, Input } from '@angular/core';
import { Persona } from '../personas/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  @Input() person!: Persona;
  @Input() index!: number;
}
