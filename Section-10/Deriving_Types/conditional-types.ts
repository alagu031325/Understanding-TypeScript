//particularly helpful to build utility types 
type StringArray = string[];
//To retrieve the type of element stored in an array - T will always be an array of any type - array of strings, or objects 
type ElementType<T extends any[]> = T[number];

type Ex1ElementType = ElementType<StringArray>;

//more generic type - using ternary operator in typescript 
type GetElementType<T> = T extends any[] ? T[number] : T; //we can also return 'never' type 

let textNo = 25;
//returns the type of values in the array type
type Ex2ElementType = GetElementType<StringArray>;
type Ex3ElementType = GetElementType<typeof textNo>;

type FullnamePerson = { firstName: string, lastName: string };
type FullnameOrNever<T> = T extends FullnamePerson ? string : never;

function getFullName<T extends object>(person: T): FullnameOrNever<T> {
    //if firstName exists and is truthy
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullnameOrNever<T>;
    }

    throw new Error('No first name and / or last name found.');
}

//returns never
const name1 = getFullName({});
//returns string
const name2 = getFullName({firstName: 'Alagu', lastName: 'Arunachalam'});