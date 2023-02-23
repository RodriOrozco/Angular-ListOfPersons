// import { Component, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../../services/LoggingService.service';
import { PersonsService } from '../../services/PersonsService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [LoggingService],
})
export class FormularioComponent implements OnInit {
  nameInput: string = '';
  lastNameInput: string = '';
  index!: number;
  modeEdition!: number;

  // @Output() personCreated = new EventEmitter<Persona>();

  // constructor(private LogginService:LoggingService){}
  constructor(
    private PersonsService: PersonsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.PersonsService.greet.subscribe((index: number) =>
      alert('The index is: ' + index)
    );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modeEdition = +this.route.snapshot.queryParams['modeEdition'];

    if (this.modeEdition !== null && this.modeEdition === 1) {
      let person: Persona = this.PersonsService.findPerson(this.index);
      this.nameInput = person.name;
      this.lastNameInput = person.lastName;
    }
  }

  addPerson = (): void => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    // this.personCreated.emit(newPersonAdded);
    // this.LogginService.sendMessageConsole('send new person and his name is: ' + this.nameInput + ' ' + this.lastNameInput)
    this.PersonsService.pushNewPerson(newPersonAdded);

    this.nameInput = '';
    this.lastNameInput = '';
  };

  savePerson = () => {
    let newPersonAdded = new Persona(this.nameInput, this.lastNameInput);
    if (this.modeEdition !== null && this.modeEdition === 1) {
      this.PersonsService.editPerson(this.index, newPersonAdded);
      this.router.navigate(['personas']);
    } else {
      this.PersonsService.pushNewPerson(newPersonAdded);
      this.nameInput = '';
      this.lastNameInput = '';
      this.router.navigate(['personas']);
    }
  };

  deletePerson = () => {
    if (this.index !== null) {
      this.PersonsService.deletePersonService(this.index);
    }
    this.router.navigate(['personas']);
  };
}
