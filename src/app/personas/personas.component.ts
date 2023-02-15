import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  disabledButton: Boolean = false;
  titleInput:String = '';
  messageButton:String = '';
  showMessage: Boolean = false;

  addPerson = () => {
    this.showMessage = true;
    this.messageButton = 'You add a new person!';
    this.disabledButton = true;
  }
}
