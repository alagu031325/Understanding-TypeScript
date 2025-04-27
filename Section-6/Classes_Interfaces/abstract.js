var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Abstract class only exists in Typescript - 
var UIElement = /** @class */ (function () {
    function UIElement(typeOfElement) {
        this.typeOfElement = typeOfElement;
    }
    UIElement.prototype.clone = function (targetElement) {
        //logic to clone 
    };
    return UIElement;
}());
//we cant instantiate abstract classes - they can only work as base classes which other classes can inherit/extended from
//let uiElement = new UIElement(); 
var SidePaneElement = /** @class */ (function (_super) {
    __extends(SidePaneElement, _super);
    //If this property is available in the parent class - the child class will not create a new one 
    function SidePaneElement(typeOfElement, position) {
        var _this = _super.call(this, typeOfElement) || this;
        _this.position = position;
        //If we create a property with the same name as in parent class - then parent property will be overridden 
        _this.typeOfElement = 'Side Bar';
        return _this;
        // this.typeOfElement = "Great to see you!!";
    }
    //can add more properties and methods to this extended class
    SidePaneElement.prototype.print = function () {
        console.log(this.typeOfElement);
    };
    return SidePaneElement;
}(UIElement));
var sidePane = new SidePaneElement('Hello World', 'right');
sidePane.print();
