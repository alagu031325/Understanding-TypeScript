var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//get accessor method - which allows to access the method as a property 
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    Object.defineProperty(UserModel.prototype, "firstName", {
        //setter methods are called right before a property is set
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === '') {
                throw new Error('Invalid name.');
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "fullName", {
        //method dynamically executed and value assigned to fullName property
        get: function () {
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    //Useful for utility classes to bundle a group of utility methods 
    UserModel.greet = function () {
        console.log("Welcome students for this Cohort");
    };
    //static properties and method
    UserModel.identifier = "student";
    return UserModel;
}());
// //we can access static property even before creating a class instance 
console.log(UserModel.identifier);
UserModel.greet();
var friend = new UserModel();
friend.firstName = "Nanny";
friend.lastName = "Plum";
console.log(friend.fullName);
//Employee inherits all properties and method of the base class UserModel
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle) {
        //ensures that constructor of the base class is called as well - it should be called when extending from another class 
        var _this = _super.call(this) || this;
        _this.jobTitle = jobTitle;
        _this.firstName = 'King';
        _this.lastName = 'Thistle';
        return _this;
    }
    Employee.prototype.work = function () {
        //protected property
        console.log("Congrats ".concat(this.fullName, " for starting your new job as ").concat(this.jobTitle));
    };
    return Employee;
}(UserModel));
var emp1 = new Employee('Web Developer');
emp1.work();
