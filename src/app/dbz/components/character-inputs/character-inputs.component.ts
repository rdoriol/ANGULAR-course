import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/characters.interface';



@Component({
  selector: 'app-dbz-character-inputs',
  templateUrl: './character-inputs.component.html',
  styleUrl: './character-inputs.component.css'
})
export class CharacterInputsComponent {

    // Emitir eveto de hijo a padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name:  "",
    power: 0
  }
    // Método que se lanzará en el submit del form
  public emitCharacter(): void {
    console.log(this.character.name + "\n" + this.character.power);

    //debugger; breakpoints

    if(this.character.name.length === 0) {
      return
    }
    else {
      // Emisión de objeto hacia el exterior (padre)
    this.onNewCharacter.emit(this.character);
    }
      // Reset campos del form
    this.character = { name: "", power: 0 };
  }   // End emitCharacter()



}
