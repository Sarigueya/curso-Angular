function addNumbers ( a:number, b:number){return a + b;}
const addNumberArrow = (a:number, b:number)=>{return `${a + b}`;}
function multiply (firstNumber:number, secondNumber? :number, base: number = 2){return firstNumber*base ;}


//const result :number = addNumbers (1,2);
//const result2 : string = addNumberArrow(1,2);
//const multiplyResult: number = multiply(5);
//console.log({result, result2, multiplyResult})


interface character {
  name: string;
  hp: number;
  showHp: ()=> void;
}
const healCharacter = (character: character, amount:number)=>{
  character.hp += amount;
}

const strider: character ={
  name: "strider",
  hp:50,
  showHp() {console.log(`Puntos de Vida ${this.hp}`);}
}
healCharacter (strider, 10);
strider.showHp();

  export {};