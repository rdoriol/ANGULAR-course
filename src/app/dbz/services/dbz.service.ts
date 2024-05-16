import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      name: "Krillin",
      power: 1000
    },
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Robertazo",
      power: 500
    }
  ];

  public inputNewCharacter(element:Character) {
    this.characters.push(element);
  }

  public deleteCharacter(index:number) {
    this.characters.splice(index, 1);
  }
  constructor() { }

}   // End class
