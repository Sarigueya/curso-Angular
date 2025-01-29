import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "IronMan";
  public age: number = 25;

  get CapitalizedName (): string{
    return this.name.toUpperCase();
  }

  HeroDescrip(): string{
    return `${this.name} -${this.age}`;
  }

ChangeHero(): void{
  this.name = "Spider Man"
  }

ChangeAge(): void{
  this.age = 15;
  }

reset(){
  this.name = "IronMan";
  this.age = 25;
}
}


