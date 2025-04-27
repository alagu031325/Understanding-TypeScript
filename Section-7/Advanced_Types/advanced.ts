//To add as many property as we want to this type - as long as they have shared value type - 
// index type feature
type DataStore = {
    // dynamic properties with any name which is a string 
    // placeholder[key] to accept any property name of type string and can contain 
    // only values of string or boolean or number  
    [key: string]: string | boolean | number;
}

//Record type
let object: Record<string, string | number | boolean>;

let store: DataStore = {};
//Dynamic properties added to object
store.id = 5;
store.isOpen = false;

// Constant types 
// So typescript will not infer this as string[] but an array which can only hold one of the 3 values 
let roles = ['admin', 'guest', 'editor'] as const;
//so we cant push any other item into array - because with const it is 'readonly' array 

// satisfies keyword - will hold Record type - but it will look into the dataEntries and infer from it
// more specific type so only defined keys are allowed 
const dataEntries = {
    'entry1': 0.51,
    'entry2': -1.23
} satisfies Record<string, number>;

// valid property name for typescript but actually doesnt check if the property actually exists or not
// dataEntries.entry3;

