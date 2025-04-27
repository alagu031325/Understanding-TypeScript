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
class User {
    //explicit type assignment needed since typescript wont know what type of array it is 
    public readonly hobbies: string[] = [];
    //automatically creates class property and assigns value to it 
    constructor(private name: string, public age: number = 28) {}

    greet() {
        console.log('Welcome ' + this.name);
    }
}

const user1 = new User("Nanny Plum", 35);

//private properties cant be accessed outside of the class - so accessing through a method
user1.greet();

//all public properties can be accessed and assigned value 
user1.age = 37;

//whereas protected properties are accessed within the class it is defined and in classes that inherits it

// readonly properties cant be reassigned or changed
// user1.hobbies = ['Sports'];

//mutating the existing array would work 
user1.hobbies.push('Sports');

console.log(user1);