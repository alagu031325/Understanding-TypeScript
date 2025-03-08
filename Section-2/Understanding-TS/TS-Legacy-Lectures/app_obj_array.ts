//type inferred for person will be a concrete object type - written very similar to an object with key: type pairs (type inferred) for each key ending with ";"
const person: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string]
} = {
    name: "Alagu",
    age: 33,
    hobbies: ['Cooking', 'Playing'],
    role: [2, 'author']
}
//This is allowed since typeScript doesnt know that a role array can contain only 2 elements - we need to tell TypeScript what role exactly could be 

// person.role.push('admin'); - push is an exception - typescript cant guess this bug but we can get support with length - 3rd argument not allowed as this is typed as Tuple
person.role = [0, 'admin'];

//We need to type it if we are going to assign value to a variable at a later point in time 
let favoriteMovies: string[];

favoriteMovies = ['Mufasa', 'Frozen'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
