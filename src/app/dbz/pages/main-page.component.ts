import { Component, OnInit} from '@angular/core';

import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

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

}    // End class
