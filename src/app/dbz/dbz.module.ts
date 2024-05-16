import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterInputsComponent } from './components/character-inputs/character-inputs.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { MainPageComponent } from './pages/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    CharacterInputsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
   MainPageComponent
  ]
})
export class DbzModule { }
