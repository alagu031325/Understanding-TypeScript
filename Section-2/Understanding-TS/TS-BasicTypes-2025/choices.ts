//To restrict userRole to only specific numbers
//let userRole = 0; // 0 => admin , 1 => guest

//enum type
enum RoleEnum {
    admin = 1, //we can also assign string values - but we need to assign strings to every option
    editor, // assigned value 2
    guest // 3
}

//assigning specific values from a predefined list of allowed values
let userRole: RoleEnum = RoleEnum.admin;

//type aliases - custom type - stores type definition under custom name - so values to the right is still type of values 
type Roles = 'admin' | 'editor' | 'guest';

type User = {
    name: string;
    age: number;
    role: Roles;
    permissions: string[];
};

//alternative to enum - union type combined with literal types(we set very specific values(string/number) as types of variables)
let roles: Roles = 'admin';

roles = "guest";

function access(role: Roles) {
    //role type parameter which accepts same type as roles - we can use type aliases
}
