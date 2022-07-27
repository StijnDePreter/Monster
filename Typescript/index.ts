let angular : string = 'angular';
console.log(angular)
let test = 1;

//basic types

let id : number = 1 ;
let company : string = "estee lauder companies"
let isActive : boolean = true;
let x : any;
x = 10;
x = "tien";

//enums
enum Direction {
    Up, Down, Left, Right
}

//objects

type User = {
    id : number,
    name: string
}

let u : User = {
    id : 5,
    name: "test"
}

//type assertion:
let cId: any = 1;
let customerId = cId as number;
let customerId2 = <number>cId;

//function

function addNum(x: number,y: number) : number{
    return x + y;
}

interface IUser {
    id: number,
    name: string,
    age ?: number
}

let user1 : IUser = {
    id: 15,
    name: "string",
    // age : 15
}

interface IconcatFunc {
    (part1: string, part2: string) : string;
}

let concat : IconcatFunc = (p1: string, p2: string) : string => p1 + p2;

class Person implements IPerson {
    id : number;
    name : string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    register(name: string, passowrd: string) : boolean {
        return true;
    }

}

interface IPerson {
    id: number,
    name: string,
    register(name: string, passowrd: string) : boolean
}

class Employee extends Person {
    salary: number;

    constructor(id: number, name: string, salary: number){
        super(id, name)
        this.salary = salary;
    }
}

let em : Employee = new Employee(1,'test', 2500);

//generics
function getArray<T> (items: T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3])







