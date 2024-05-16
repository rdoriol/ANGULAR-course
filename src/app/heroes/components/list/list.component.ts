import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor() {}

  public heroesList: string[] = ["Spiderman", "Hulk", "Ironman", "Thor"];
  public delHero?: string;

  public delLastHero():void {
    this.delHero = this.heroesList.pop();
  }

  public resetListHeroes():void {
    this.heroesList = ["Spiderman", "Hulk", "Ironman", "Thor"];
    this.delHero = "";
  }

}
