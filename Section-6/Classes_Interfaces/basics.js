//Typescript way of defining class with explicit property declarations
/* class User {
    //class properties
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
} */
//Shorthand notation to define classess in Typescript
var User = /** @class */ (function () {
    //automatically creates class property and assigns value to it 
    function User(name, age) {
        if (age === void 0) { age = 28; }
        this.name = name;
        this.age = age;
    }
    return User;
}());
console.log(new User("Nanny Plum", 35));
console.log(new User("Ben"));
