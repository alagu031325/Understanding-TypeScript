## Extensions Installed 
- Paths Intellisense
- "Format Document" - shortcut "shift+alt+f" 
- Configured Prettier to format html documents

## Lite Server Installation 
- run npm init - to create "package.json" and initialise npm repository 
- Then run 'npm install' - to install all needed dependancies for the project
- Then install lite server using the command "npm install --save-dev lite-server"
- To start script in package.json file add "lite-server" to start the local server which listens to local changes 

`To install TypeScript globally use "sudo npm install -g typescript" and check its version using 'tsc -v' - This typescript compiler is used to compile typescript files back to javascript`

## Core Types
- number type - all int, float and double are number types - no differentiation
- string type - all text values defined within '',"",`` 
- boolean - true/false
- object - Any JavaScript object and more specific types (type of object) are also possible
- Array -  Arrays of number, boolean, string, object and nested Arrays are also possible with mixed types

## Other Types offered by TypeScript that are not in JavaScript
- Tuple - fixed length/ fixed type array 
- Enum - enum{identifier1, identiier2} - global constant identifier
- Any - can store any type of value - flexible - but not recommended - use explicit types with TypeScript to better capture bugs at compile time
- Literal types - based on core types but specific version of the types - either specific string value or particular number - often used with union types to combine two or more allowed values for a variable

## Rare types in typescript
- unknown - expects some type checking rather than any - which doesnt offer any type checking
- never - use never when the function will never return anything - like a helper function which throws error and stops execution of the program or a function with indefinite loop (while(true){//runs indefinitely})

`JavaScript is dynamically typed - we can change the type of the value at run time - But TypeScript is statiscally typed - we cant assign a string type to a variable initialised with number type`