//Usage 1: object type definition 
interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

//Declaration merging instead of overriding it - to add properties to interfaces that are coming from external libraries 
interface Authenticatable {
    role : string;
}

//We can also extend interfaces - we can use inheritance with interfaces as well 
interface AuthenticatableAdmin extends Authenticatable {
    //gets all properties and methods of the base interface
    permissions: 'global' | 'guest';
}

let user: Authenticatable;
user = {
    email: 'nanny@plum.com',
    password: 'admin123',
    role: 'admin',
    login() {
        console.log("Successfully logged in");
    },
    logout() {
        console.log("Successfully logged out");
    }
}

//Why to do this with interface - instead of using type alias - we can use type alias also when defining object type definitions - one advantage of using interface is "declaration merging"

//Usage 2: contract definitions - The class must have all properties and implement all methods defined in the interface.
class AuthenticatableUser implements Authenticatable {
    
    constructor(
        public userName: string,
        public email: string, 
        public password: string, 
        public role: string
    ) {}

    login() {
        //
    }

    logout() {
        //
    }
}

//user object passed must implement this Authenticatable interface so it will have login method 
function authenticate(user: Authenticatable) {
    user.login();
}