import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Character } from '../interfaces/characters.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuidv4(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuidv4(),
      name: "Robertazo",
      power: 500
    }
  ];

  public inputNewCharacter(element:Character) {
    this.characters.push(element);
  }

  public deleteCharacter(id:string) {

      // todo-> 1ª opción para eliminar un elemento del array characters
    /*for(let i = 0; i < this.characters.length; i++) {
      if(this.characters[i].id === id) {
        this.characters.splice(i, 1);
      }
    }*/
      // todo-> 2ª opción para eliminar elemento del array characters
    this.characters = this.characters.filter( element => element.id != id);

  }   // End deleteCharacter()

  constructor() { }

}   // End class
