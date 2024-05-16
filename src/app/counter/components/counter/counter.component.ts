import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  public increaseBy(value?: number):void {

    if(!value) {
      this.counter = 10;
    }
    else {
    this.counter += value;
    }
  }

          // todo-> Para el reset sería más correcto crear un nuevo método, pero por practicar algo más...
}
