// Generic function 
function merge<T>(a: T, b: T) {
    return [a, b];
}

// const ids = merge<number>(2,3);
// It can infer the type of the placeholder
const ids = merge(2,3);

// Working with multiple generic parameters
function add<T, U>(a: T, b: U) {
    return [a, b];
}
const concat = add(1, 'Holly');

// Utility function which spreads all properties of obj into single object
// We can add type constrain to our generic placeholder
function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}
// The spread operator doesnt exist on numbers so we shouldn't allow certain parameters
const merged = mergeObj({userName: 'Holly'},{age: 23});

//Generic class
class User<T> {
    constructor(public id: T) {
    }
}

const user = new User('i1');
console.log(user.id);

//Generic interface
interface Role<T> {

}

