//Decorators are just a function which receives 2 args for ECMA Script decorators
//T extends a class whose constructor can accept any number of args and return anything
function logger<T extends new (...args: any[]) => any >(target: T, ctx: ClassDecoratorContext) {
    //target is to which the decorator is attached to and ctx gives more information about the target - executed while parsing class definition
    console.log('Logger Decorator:');
    console.log(target);
    console.log(ctx);
    //change the target to which the decorator is attached to 
    return class extends target {
        //anonymous class that is returned - executed when each time the class is instantiated 
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

//Method Decorators
function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
    //allows to run code related to the method after the surrounding class is done initialising - way of accessing the constructor of the class to which the mthd is added to - arrow fn wont work since 'this' keyword behavior is different
    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });

    //can return the updated version of the method
    return function(this: any) {
        console.log('Executing original function');
        //this version of method is not bound yet since it belongs to the class - not to the instantiated object - which has method bound to the instance
        target.apply(this);
    }
}

//Decorator factories - is a function that produce factories
function replacer<T>(initValue: T) {
    //Field Decorators - target will always be undefined - field decorator will be executed before the field is done initialising
    return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
        // console.log(target);
        // console.log(ctx);

        //this function will be executed after the field is done initialising
        return (initialvalue: any) => {
            console.log(initialvalue);
            //assigning the initial value that is passed through decorator
            return initValue;
        } 
    }
}



@logger
class Person {
    //new default value set to field via decorators
    @replacer('... Loading')
    name = "Nanny Plum";

    // constructor(name: string) {
    //     this.name = name;
    // }

    @autobind
    greet() {
        console.log('Hi, Welcome back ' + this.name);
    }
}

//logger decorator just executed once but the the constructor used for instantiation executed twice
const person1 = new Person();
// const person2 = new Person('Holly');
const greet = person1.greet;
greet();
