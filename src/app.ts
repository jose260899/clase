console.log('------------------------------------');

let a: Number | string = 1;
enum Talla {
    XS,
    S,
    M,
    L,
    XL
}

let person = {
    name: 'Jhon',
    age: 31,
    talla: Talla.L
};

let person2: {
    name: string,
    age: number,
    talla: Talla
} = {
    name: 'Jhon',
    age: 30,
    talla: Talla.L
};

person2 = person;

let suma : (a: number, b: number) => number;

suma = (num1, num2) => {
    return (num1 + num2);
}


let var1: unknown;
let var2: any;
let var3: string;

var1 = "casa";
var2 = "calle";

var3 = var1 + var2;