

export interface Passanger {
    name: string;
    children? : string[]; 
}

const passanger1: Passanger = {
    name: "Fernando",
}

const passanger2: Passanger ={
    name: "Melisa",
    children: ["Marian", "Eli"],
}

const printchildren =  (passanger: Passanger): number =>{

    const HowManyChildren = passanger.children?.length || 0;
//const HowManyChildren = passanger.children!.length;  sig: confia en mi ya revise y siempre esta ese dato
    console.log( passanger.name, HowManyChildren);
    return HowManyChildren; 
}

printchildren(passanger1);