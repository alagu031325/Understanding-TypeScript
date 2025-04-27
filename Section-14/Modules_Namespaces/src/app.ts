// syntax to include files when using namespaces
// /// <reference path="components/project-input.ts"/>
// /// <reference path="components/project-list.ts"/>

//Using ES6 modules 
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

