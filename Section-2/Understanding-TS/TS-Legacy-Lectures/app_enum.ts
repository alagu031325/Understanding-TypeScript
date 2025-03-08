//Enum - human reader identifier for global constants
// This is fine but still role is inferred as any number so we can also assign other number
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//custom type - automatically ADMIN receives 1 - READ_ONLY is 2 - enumerated list assigned with numbers starting rom 0 - but we can assign any string or numbers to the enum variables 
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

interface Human {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
};

const human: Human = {
    name: "Alagu",
    age: 33,
    hobbies: ["Cooking", "Playing"],
    role: Role.ADMIN
};

if (human.role === Role.ADMIN) {
    console.log("is admin");
}