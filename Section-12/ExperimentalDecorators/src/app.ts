//experimental decorators start with capital letter 'L'
//we will get the constructor function of the class as the argument 


//Decorator factory 
function LoggerFactory(logString: string) {
    console.log('LOGGER FACTORY');
    return function Logger(target: Function) {
        //customise the values used within decorators
        console.log(logString);
        console.log(target);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        //not interested in the arg use "_"
        //returns a new constructor function 
        return class extends originalConstructor {
            constructor(...args: any[]) {
                // console.log('Adding log while executing the original constructor')
                super(...args);
                console.log("Rendering Template ...");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

//Decorators executed when class is defined and not instantiated
//If multiple decorators - they are executed bottom up and factories are executed in the reverse order
@LoggerFactory('Logging Person')
@WithTemplate('<h1>My First Person Object</h1>', 'app')
class Person {
    name = "Nanny Plum";

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);

// Places where decorators can be added 

// Property Decorator - first arg is constructor function if it is a static property, if it is a instance property then target is the prototype of the object that was created
function Log1(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator!');
    console.log(target);
    console.log(propertyName);
    //return values are ignored by typescript
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    //can return a new property descriptor object - which can change the method 
    return {
       
    }
}

//name of the method in which we use this parameter - positional place of the argument like tax is the first argument so index is 0 (Starts at 0)
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
    //return values are ignored by typescript
}

class Product {
    @Log1
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const book = new Product('Book', 10);

//More example for returning descriptor from methods
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    //always bind this method to the object this belongs to 
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            //do some extra work before we execute the function - this refers to the concrete object on which this getter method is accessed 
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer();

const button = document.querySelector('button');
//addEventListener binds this to target element where this event has occurred
// button?.addEventListener('click', printer.showMessage.bind(printer));
button?.addEventListener('click', printer.showMessage);

//Validation using decorators

//to store class to property validator mappings 
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required','positive']
    }
}

//Initially no validators are registered
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    // best to retrieve the existing array and add the new one instead of replacing
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    }
}

function validate(obj: any) {
    //if no property named constructor it will fallback and look into Prototype chain
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
    event.preventDefault();

    const titleEle = document.getElementById('title') as HTMLInputElement;
    const priceEle = document.getElementById('price') as HTMLInputElement;

    const title = titleEle.value;
    const price = +priceEle.value;

    const newCourse = new Course(title, price);
    if (!validate(newCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(newCourse);
});