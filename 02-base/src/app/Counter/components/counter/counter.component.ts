import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{counter}}</h3>

<button (click)="incriseby(1)" >+1</button>
<button (click)="reset(10)">Reset</button>
<button (click)="incriseby(-1)">-1</button>`

})

export class CounterComponent{
  public counter: number= 10;

  incriseby (value: number):void{
    this.counter +=value;
  }

  reset (value:number): void {
    this.counter = value;
  }

}



//import { Component } from "@angular/core";

//@ Component({
//  selector: "app-counter",
//  template: "<h1>Hola Counter</h1>",
//})
//export class CounterComponent {}
