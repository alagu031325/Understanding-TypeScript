//property or method can be "readonly" so it cant be overwritten once it has been defined 
type Operations = {
    readonly add: (a: number, b: number) => number;
    readonly subtract: (a: number, b: number) => number;
}

//To just store the return value of these methods
//closely related to another object type Operations
type Results<T> = {
    // all properties are optional - if we add "-?" before ":" - removing the optional flag
    -readonly [Key in keyof T]?: number //mapped type - 'in' loops over all properties defined in T
    //-readonly -> readonly flag to be removed from mapped property 
}

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(57, 45),
    subtract: mathOperations.subtract(89, 34)
}