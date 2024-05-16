import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor() {}

  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name } - ${this.age}`;
  }

  public changeHero():void {
    this.name = "Thor";
  }

  public changeAge():void {
    this.age = 44;
  }

  public resetForm():void {
    this.name = "ironman";
    this.age = 45;
  }

    // Método no necesario, a modo de ejemplo
  public changeH1():void {
      // EJemplo de modificación de DOM (no tiene nada que ver con Angular)
    document.querySelectorAll("h1").forEach( item => item.innerHTML = '<h1>Hola PEPE</h1>' );

  }


}
