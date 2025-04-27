let names = ['Ben','Holly','King Thistle','Queen Thistle'];

//type inferred for names is string[] which is a shorthand notation for Array<string>
let users: Array<string> = ['king', 'queen', 'elf'];

// Array is a generic type - it is more flexible - because we can use this Array type to define all types 
// of value types - like array of strings, numbers - where multiple types work together

//Array<T> is existing generic type where as this is custom generic type with T is a placeholder
type DataStorage<T> = {
    [key: string]: T;
}

let store: DataStorage<boolean|string> = {};
store.name = 'aws'
store.isAvailable = false;

//we can create different concrete types from the generic type
let fileStore: DataStorage<number> = {};
fileStore.version = 1.1;
fileStore.fileSystem = 1;

