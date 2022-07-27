"use strict";
let angular = 'angular';
console.log(angular);
let test = 1;
//basic types
let id = 1;
let company = "estee lauder companies";
let isActive = true;
let x;
x = 10;
x = "tien";
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let u = {
    id: 5,
    name: "test"
};
//type assertion:
let cId = 1;
let customerId = cId;
let customerId2 = cId;
//function
function addNum(x, y) {
    return x + y;
}
let user1 = {
    id: 15,
    name: "string",
    // age : 15
};
let concat = (p1, p2) => p1 + p2;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register(name, passowrd) {
        return true;
    }
}
class Employee extends Person {
    constructor(id, name, salary) {
        super(id, name);
        this.salary = salary;
    }
}
let em = new Employee(1, 'test', 2500);
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
