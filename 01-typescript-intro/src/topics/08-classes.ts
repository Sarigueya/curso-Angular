

export class Person {
    //public name: string;
    //private address: string;

    constructor( 
        public name: string,
        public lastName: string, 
        private address: string= "No Address") {
         }

}

//export class Hero extends Person{
//    constructor(
//        public alterego: string,
//        public age: number,
//        public realName: string,
//    ){
//        super( realName, "New York");
//    }
//}

export class Hero {
   // public person: Person;
    constructor(
        public alterego: string,
        public age: number,
        public realName: string,
        public peron: Person,
    ){
    // this.person = new Person (realName);    
    }
}

const Tony = new Person("Tony", "Star", "New York");
const IronMan = new Hero ("IronMan", 45, "Tony", Tony);

console.log(IronMan)