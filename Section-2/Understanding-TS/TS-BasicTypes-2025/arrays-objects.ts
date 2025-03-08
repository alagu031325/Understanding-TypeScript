 //Type inferred to be string[] so we cant add numbers to this array 
 let hobbies = ['Sports', 'Cooking'];

//  hobbies.push(12);

//Advanced array types
// let users: (string | number)[];

//Another way to represent array type using Generics
let users: Array<string | number>;

//All these values are allowed
users = [1, 'Nanny Plum'];
users = [5, 1];
users = ['Ben', 'Holly'];

//Tuple type - Array of fixed size which accepts values of clearly defined types
let possibleResults: [1 | -1, number]; //[1, -1] - literal type and a number type 

//will just allow to store 2 numbers in the possibleResults array 
possibleResults = [1, -1];

//Object type - user will have inferred object type - so only objects exactly of this type can be assigned to user - we also assign complex object type definition
let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number
    }
} = {
    name: 'Holly',
    age: 5,
    hobbies: ['Shuttle', 'Baking'],
    role: {
        description: 'admin',
        id: 7
    }
};

//{} - doesnt represent empty object when used as type of value - it represents any not null or not undefined values - which means other than null or undefined we can assign any type of value to this variable 
let val: {} = 'some text';

//Record type means that the value is an object(key, value pairs - a record) - but it is a flexible kind of object - 
let data: Record<string, (string | number)>;

data = {
    entry1: 1,
    entry2: 'admin'
}
