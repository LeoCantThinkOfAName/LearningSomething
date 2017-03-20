var luv = true;
var firstName = 'Candy';
var lastName = 'Cheng';
var met = 2014;
var favFood = ['cramel', 'chocolate', 'sweets'];
var sentence = "I met " + firstName + " in " + met + ". She is " + luv + "ly a wonderful girl. Her favorite foods are " + favFood[0] + " " + favFood[1] + " and " + favFood[2] + ".";
var ipAddr;
(function (ipAddr) {
    ipAddr[ipAddr["NTU"] = 112] = "NTU";
    ipAddr[ipAddr["NCTU"] = 113] = "NCTU";
    ipAddr[ipAddr["NCHU"] = 114] = "NCHU";
    ipAddr[ipAddr["NCKU"] = 116] = "NCKU";
})(ipAddr || (ipAddr = {}));
;
var colleage = [ipAddr[116], ipAddr.NCKU];
var somethig = false;
var unuseable = null;
var someValue = 'something happend';
var strLength = someValue.length;
// function theGirlthatAlwaysAmaze() {
//     let getName;
//     if(true) {
//         let girl = 'Candy';
//         getName = function() {
//             console.log(girl);
//         }
//     }
//     return getName();
// };
// theGirlthatAlwaysAmaze();
// for(let i = 0; i < 10; i ++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i);
// }
var Name = 'Candy';
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log(newSquare);
    return (newSquare);
}
;
// createSquare({color: 'red'});
// let mySquare = createSquare({colour: 'red', width: 7} as SquareConfig);
// let mySquare = createSquare({colour: 'red', width: 7});
// console.log(mySquare);
// interface Point {
//     readonly x: number;
//     readonly y: number;
// };
// let p1: Point               = {x: 1, y: 2};
// let a: number[]             = [1, 2, 3];
// let readonlyArr: ReadonlyArray<number> = a;
// a = readonlyArr as number[];
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// };
// let mySearch : SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// };
// console.log(mySearch('dog', 'cat'));
// interface StringArray {
//     [index: number]: string;
// }
// let myArr: StringArray;
// myArr = ['Candy', 'Cheng'];
// let myStr: string = myArr[0];
// console.log(myStr);
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {};
// };
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour:number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {};
//     tick() {
//         console.log('beep');
//     }
// }
// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//     roar(sound: string = 'woof') {
//         console.log(`${sound}`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log('Slithering...');
//         super.move(distanceInMeters);
//     }
//     roar(sound = 'Slithering') {
//         super.roar(sound);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log('Galloping...');
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake('Sammy the Python');
// let tom: Animal = new Horse('Tommy the Palomino');
// sam.move();
// tom.move(34);
// sam.roar();
// tom.roar();
// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     };
//     eat(food: string) {
//         console.log(`${this.name} is a ${food} animal`);
//     }
// };
// class Dog extends Animal {
//     eat(food = 'hybrid') {
//         super.eat(food);
//     }
// }
// class Cow extends Animal {
//     eat(food = 'vagetarian') {
//         super.eat(food);
//     }
// }
// let doge = new Dog('dog');
// doge.eat();
// let moo = new Cow('cow');
// moo.eat();
// class Animal {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public moveBy(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Rhino extends Animal {
//     constructor() { super('rhino') }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Poo extends Employee {
//     constructor() {super('poo')}
// }
// let rhino = new Rhino();
// let animal = new Animal('Goat');
// let employee = new Employee('Bob');
// let poo = new Poo();
// console.log(rhino);
// console.log(animal);
// console.log(employee);
// console.log(poo);
// animal = rhino;
// animal = employee; error
// class Person {
//     protected name: string;
//     public    constructor(name: string) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     public  constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public  getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee('Howard', 'Sales');
// console.log(howard.getElevatorPitch());
// console.log(howard);
// class Person {
//     protected name: string;
//     protected constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee('Howard', 'Sales');
// // let john = new Person('John'); error
// console.log(howard);
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     public   constructor(theName: string, legs: number) {
//         this.name = theName;
//         this.numberOfLegs = legs;
//     }
// }
// let dad = new Octopus('what?', 2);
// console.log(dad);
// class Employee {
//     fullName: string;
// }
// let employee = new Employee();
// employee.fullName = 'Bob Smith';
// if(employee.fullName) {
//     console.log(employee.fullName);
// };
// let passcode = 'secret passcode';
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if(passcode && passcode == 'secret passcode') {
//             this._fullName = newName;
//         } else {
//             console.log('Error: Unauthorized.');
//         }
//     }
//     //cannot rewrite
//     // constructor(name: string) {
//     //     if(passcode && passcode == 'secret passcode') {
//     //         this._fullName = name;
//     //     } else {
//     //         console.log('Error: Unauthorized.');
//     //     }
//     // }
// }
// let employee = new Employee();
// console.log(employee);
// employee.fullName = 'Bob Smith';
// console.log(employee);
// employee.fullName = 'Rudolf the Reindeer';
// console.log(employee);
// let password = 'open sesame';
// class Employee {
//     private _fullName: string;
//     public get fullName(): string {
//         return this._fullName;
//     }
//     public set fullName(newName: string) {
//         if(password && password == 'open sesame') {
//             this._fullName = newName;
//         } else {
//             console.log('WARNING');
//         }
//     }
// }
// let piggy = new Employee();
// console.log(piggy);
// piggy.fullName = 'doggy';
// console.log(piggy);
// class Person {
//     private _fullName: string;
//     public get fullName() {
//         return this._fullName;
//     }
//     public set fullName(newName: string) {
//         if(password && password == 'open sesame') {
//             console.log(`PASSWORD CHECKED! CHANGING ${this._fullName} TO ${newName}.`);
//             this._fullName = newName;
//         } else {
//             console.log(`WARNING! PASSWORD INCORRECT.`);
//         }
//     }
// }
// let doge = new Person();
// console.log(doge);
// doge.fullName = 'doge';
// console.log(doge);
// doge.fullName = 'Keepo';
// console.log(doge);
// class Grid {
//     static origin = {x: 0, y: 0};
//     constructor(public scale: number) {};
//     calculateDistanceFromOringin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
// }
// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOringin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOringin({x: 10, y: 10}));
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return 'Hello ' + this.greeting;
//     }
// }
// let greeter: Greeter;
// greeter = new Greeter('World');
// console.log(greeter.greet());
// class Greeter {
//     static standardGreeting = 'Hello, there';
//     greeting: string;
//     greet() {
//         if(this.greeting) {
//             return 'Hello, ' + this.greeting;
//         } else {
//             return Greeter.standardGreeting;
//         }
//     }
// }
// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());
// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = 'Hey there!';
// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
// let greeter3: Greeter = new greeterMaker();
// class Point {
//     x: number;
//     y: number;
// }
// interface Point3d extends Point {
//     z: number;
// }
// let Point3d: Point3d = {x: 1, y: 2, z: 3};
// console.log(Point3d);
// let z: number = 100;
// function addToZ(x: number, y: number) {
//     console.log(x + y + z);
// };
function add(x, y) {
    return x + y;
}
// let myAdd = function(x: number, y: number): number { return x + y; }
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// let result1 = buildName('Candy', 'Cheng');
// function buildName2(firstName: string, lastName?: string = 'Cheng') {
//     return firstName + ' ' + lastName;
// }
// let result = buildName2('Candy');
function buildName3(firstName) {
    var restName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restName.join(' ');
}
// let result = buildName3('Candy', 'The Cutest', 'Cheng');
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("cards: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=script.js.map