//Function overloading - to make typescript infer correct type - this allows multiple function signatures
function getLength(val: any[]): number
function getLength(val: string): string
function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    //If it is an array
    return val.length;
}

//return type is inferred as string or number instead string 
const numOfWords = getLength('does this work?');

//so we can use length without type casting numOfWords to a string because with function overloading typescript can identify its return type 
numOfWords.length;

const numOfItems = getLength(['Sports', 'Cookies']);