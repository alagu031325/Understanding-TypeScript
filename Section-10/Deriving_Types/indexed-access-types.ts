// object type
type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
}

//Indexed accessed type - extract a part of object type into a separate type
//storing a sub type under a type alias 
type Perms = AppUser['permissions'];

//we can also use indexed access type on arrays to extract the value type of the elements stored in the array 
type Perm = Perms[number]

type Names = string[];
//type of value stored in array - just string instead of array of strings 
type Name = Names[number];