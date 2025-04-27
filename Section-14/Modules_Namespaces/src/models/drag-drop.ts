// Namespaces typescript feature 
// Drag and Drop Interfaces
// namespace App {
    // interface available outside the file 
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }

    export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
    //we can add const and classes to the namespace
// }