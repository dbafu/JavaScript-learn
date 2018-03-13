let isDone: boolean = false;
console.log(isDone);

let decimal: number = 6;
console.log(decimal);

let hex: number = 0xf00d;
console.log(hex);

let binary: number = 0b1010;
console.log(binary);

let octal: number = 0o744;
console.log(octal);

let color: string = 'blue';
console.log(color);


let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName },

I 'll ${ age + 1 } years old next month.'`;

console.log(sentence);

let list: number[] = [1, 2, 3];
console.log(list);

let list2: Array<number> = [4, 5, 6];
console.log(list2);

let x: [string, number];
x = ["hello", 10];

// x = [10, "hello"]; // Error
console.log(x[0].substr(1));
// console.log(x[1].substr(1));

enum Color {Red = 8, Green, Blue};
let c: Color = Color.Red;
let d = Color[2];

console.log('color : ' + c + '  -- : ' + d );

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;

let notSure: any = 4;
notSure.ifNotExists();
notSure.toFixed();

// let prettySure: object = 4;
// prettySure.toFixed();

let list3: any[] = [1, true, "false"];
list3[1] = 100;































