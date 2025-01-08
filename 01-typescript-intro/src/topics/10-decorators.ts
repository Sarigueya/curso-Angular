
function ClassDecorators <T extends { new (...args:any): {}}>(constructor: T){
    return class extends constructor {
    NewProperty= "New Property";
    hello= "Override";
    }
}

@ClassDecorators
export class SuperClass{
    public MyProperty : string = "ABC123";

    print (){console.log("Hola Mundo ")}

    
}

console.log(SuperClass);

const MyClass = new SuperClass();

console.log(MyClass)

