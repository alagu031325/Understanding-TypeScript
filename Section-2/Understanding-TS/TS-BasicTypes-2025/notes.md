## Typescript types
- Javascript has types for values - it just didnt have the concept of explicit type assignment as we have it in TS
- So types themselves are not TypeScript specific - just this idea of enforcing types, setting types explicitly and getting type related errors at the development stage are TypeScript specific

## Typescript configuration
- run `tsc --init` --> tsconfig.json file is created - allows to configure typescript behavior
- tsc - if we run then it compiles all files under the root directory and places it in the destination directory 
- To run tsc command automatically after every change we simply use tsc --watch in the root directory 
- Github repo "definitely typed" - manages all external types that can be installed through npm  
