import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = [
  "Spider Man",
  "Iron Man",
  "Thor"
]

public deletedHero?: string;

removeThatHero (): void {
  this.deletedHero = this.heroNames.pop();
}

}
