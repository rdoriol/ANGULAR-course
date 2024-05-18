import { Component, OnInit} from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

    // Se implementa el constructor para consumir el servicio dbzService
  constructor(private dbzService:DbzService) { }

  get getCharacters():Character[] {
    return [...this.dbzService.characters];       // Con los ... iniciales se copian todas las propiedades del objeto
  }

  deleteCharacterPrivate(id: string): void {     // Para poder acceder a los servicios de forma privada se genera método conteniendo el método implementado en el servicio
    this.dbzService.deleteCharacter(id);
  }

  inputNewCharacterPrivate(element: Character): void {    // Para poder acceder a los servicios de forma privada se genera método conteniendo el método implementado en el servicio
    this.dbzService.inputNewCharacter(element);
  }

}    // End class
