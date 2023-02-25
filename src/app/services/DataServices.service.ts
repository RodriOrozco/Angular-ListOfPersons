import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../personas/persona.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  deletePersonDataService = (index: number) => {
    let url: string;
    url = `https://list-of-persons-default-rtdb.firebaseio.com/data/${index}.json`;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('responseDelete', response),
      (error) => console.log(error)
    );
  };

  editPersonDataService = (index: number, person: Persona) => {
    let url: string;
    url = `https://list-of-persons-default-rtdb.firebaseio.com/data/${index}.json`;
    this.httpClient.put(url, person).subscribe(
      (response) => console.log('responseEdit', response),
      (error) => console.log(error)
    );
  };

  getPersonsDataService = () => {
    return this.httpClient.get<Persona[]>(
      'https://list-of-persons-default-rtdb.firebaseio.com/data.json'
    );
  };

  savePerson = (person: Persona[]) => {
    this.httpClient
      .put(
        'https://list-of-persons-default-rtdb.firebaseio.com/data.json',
        person
      )
      .subscribe(
        (response) => {
          console.log('response savePerson:', response);
        },
        (error) => console.log('error savePerson', error)
      );
  };
}
