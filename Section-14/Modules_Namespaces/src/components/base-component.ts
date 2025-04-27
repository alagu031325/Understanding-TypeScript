// Component Base Class

//we can have named and default exports together in a file
export const testing = '...';

//abstract classes cant be instantiated - it can only be inherited 
// Instead of named export we can use default export - we can only have 1 default export 
export default abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
      this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementId)! as T;
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as U;
      //To add some styles
      if (newElementId) {
          this.element.id = newElementId;
      }
      this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
      this.hostElement.insertAdjacentElement(insertAtStart ? 'afterbegin' : 'beforeend', this.element);
  }

  //concrete implementation is missing 
  abstract configure(): void;
  abstract renderContent(): void;
}
