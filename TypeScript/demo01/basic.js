var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var hex = 0xf00d;
console.log(hex);
var binary = 10;
console.log(binary);
var octal = 484;
console.log(octal);
var color = 'blue';
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ",\n\nI 'll " + (age + 1) + " years old next month.'";
console.log(sentence);
var list = [1, 2, 3];
console.log(list);
var list2 = [4, 5, 6];
console.log(list2);
var x;
x = ["hello", 10];
// x = [10, "hello"]; // Error
console.log(x[0].substr(1));
// console.log(x[1].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 8] = "Red";
    Color[Color["Green"] = 9] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var d = Color[2];
console.log('color : ' + c + '  -- : ' + d);
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
var notSure = 4;
notSure.ifNotExists();
notSure.toFixed();
// let prettySure: object = 4;
// prettySure.toFixed();
var list3 = [1, true, "false"];
list3[1] = 100;
