type User = { name: string, age: number};
// keyof should be followed by another type - The UserKeys now have all the keys as string literal type defined in the User type
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = "age";
validKey = "name";

//Usage - In utility functions
// 'U' the type of value which we are getting for second parameter must be one of the keys that exists in the object - which is passed as first parameter 
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }

    return val;
}

const userObject = {name: "Ben", age: 35};
//inferred type of val will either be string or number
const val = getProp(userObject, 'name');