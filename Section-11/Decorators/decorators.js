"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//Decorators are just a function which receives 2 args for ECMA Script decorators
//T extends a class whose constructor can accept any number of args and return anything
function logger(target, ctx) {
    //target is to which the decorator is attached to and ctx gives more information about the target - executed while parsing class definition
    console.log('Logger Decorator:');
    console.log(target);
    console.log(ctx);
    //change the target to which the decorator is attached to 
    return class extends target {
        //anonymous class that is returned - executed when each time the class is instantiated 
        constructor(...args) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}
//Method Decorators
function autobind(target, ctx) {
    //allows to run code related to the method after the surrounding class is done initialising - way of accessing the constructor of the class to which the mthd is added to - arrow fn wont work since 'this' keyword behavior is different
    ctx.addInitializer(function () {
        this[ctx.name] = this[ctx.name].bind(this);
    });
    //can return the updated version of the method
    return function () {
        console.log('Executing original function');
        //this version of method is not bound yet since it belongs to the class - not to the instantiated object - which has method bound to the instance
        target.apply(this);
    };
}
//Decorator factories - is a function that produce factories
function replacer(initValue) {
    //Field Decorators - target will always be undefined - field decorator will be executed before the field is done initialising
    return function replacerDecorator(target, ctx) {
        // console.log(target);
        // console.log(ctx);
        //this function will be executed after the field is done initialising
        return (initialvalue) => {
            console.log(initialvalue);
            //assigning the initial value that is passed through decorator
            return initValue;
        };
    };
}
let Person = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _greet_decorators;
    var Person = _classThis = class {
        // constructor(name: string) {
        //     this.name = name;
        // }
        greet() {
            console.log('Hi, Welcome back ' + this.name);
        }
        constructor() {
            //new default value set to field via decorators
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, "Nanny Plum"));
            __runInitializers(this, _name_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [replacer('... Loading')];
        _greet_decorators = [autobind];
        __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
//logger decorator just executed once but the the constructor used for instantiation executed twice
const person1 = new Person();
// const person2 = new Person('Holly');
const greet = person1.greet;
greet();
