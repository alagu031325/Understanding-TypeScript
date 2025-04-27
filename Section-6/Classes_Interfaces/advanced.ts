//get accessor method - which allows to access the method as a property 
class UserModel {
    protected _firstName: string;
    protected _lastName: string;

    //setter methods are called right before a property is set
    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._lastName = name;
    }

    //method dynamically executed and value assigned to fullName property
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    //static properties and method
    static identifier = "student";

    //Useful for utility classes to bundle a group of utility methods 
    static greet() {
        console.log("Welcome students for this Cohort");
    }
 
}
// //we can access static property even before creating a class instance 
console.log(UserModel.identifier);
UserModel.greet();

const friend = new UserModel();
friend.firstName = "Nanny";
friend.lastName = "Plum";
console.log(friend.fullName);

//Employee inherits all properties and method of the base class UserModel
class Employee extends UserModel {
    constructor(public jobTitle: string) {
        //ensures that constructor of the base class is called as well - it should be called when extending from another class 
        super();
        this.firstName = 'King';
        this.lastName = 'Thistle';
    }

    work() {
        //protected property
        console.log(`Congrats ${this.fullName} for starting your new job as ${this.jobTitle}`)
    }
}

const emp1 = new Employee('Web Developer');
emp1.work();

