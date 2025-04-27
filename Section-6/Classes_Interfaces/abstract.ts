//Abstract class only exists in Typescript - 
abstract class UIElement {
    constructor(public typeOfElement: string) {}

    clone(targetElement: string) {
        //logic to clone 
    }
}

//we cant instantiate abstract classes - they can only work as base classes which other classes can inherit/extended from
//let uiElement = new UIElement(); 

class SidePaneElement extends UIElement {
    //If we create a property with the same name as in parent class - then parent property will be overridden 
    typeOfElement = 'Side Bar';

    //If this property is available in the parent class - the child class will not create a new one 
    constructor(typeOfElement: string, public position: 'left' | 'right') {
        super(typeOfElement);
        this.typeOfElement = "Great to see you!!";
    }

    //can add more properties and methods to this extended class
    print() {
        console.log(this.typeOfElement);
    }
}

const sidePane = new SidePaneElement('Hello World', 'right');
sidePane.print();