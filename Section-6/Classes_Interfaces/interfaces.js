var user;
user = {
    email: 'nanny@plum.com',
    password: 'admin123',
    role: 'admin',
    login: function () {
        console.log("Successfully logged in");
    },
    logout: function () {
        console.log("Successfully logged out");
    }
};
//Why to do this with interface - instead of using type alias - we can use type alias also when defining object type definitions - one advantage of using interface is "declaration merging"
//Usage 2: contract definitions - The class must have all properties and implement all methods defined in the interface.
var AuthenticatableUser = /** @class */ (function () {
    function AuthenticatableUser(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    AuthenticatableUser.prototype.login = function () {
        //
    };
    AuthenticatableUser.prototype.logout = function () {
        //
    };
    return AuthenticatableUser;
}());
//user object passed must implement this Authenticatable interface so it will have login method 
function authenticate(user) {
    user.login();
}
