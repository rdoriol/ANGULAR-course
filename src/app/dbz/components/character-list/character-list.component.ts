import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

      // Decorador @Input que permite recibir datos ubicados en el padre, un componente/etc de otra parte, en la propiedad definida (en este caso characterListFather)
  @Input()
  public characterListChild: Character[] = [
    {
      id: "",
      name: "",
      power: 0
  }]

    // Decorador que creará evento para emitir del hijo al padre
  @Output()
  public deleteCharacterList:EventEmitter<string> = new EventEmitter();

  public deleteCharacter(id:string) {
      // Se utiliza propiedad instanciada para emitir evento al exterior (padre)
    this.deleteCharacterList.emit(id);
  }






}   // End class



