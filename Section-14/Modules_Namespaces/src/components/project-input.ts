// only import the default export of that file 
import Component from "./base-component.js";
// To group imports and give alias name 
// import { Validatable, validate } from "../utils/validation.js";
import * as Validation from "../utils/validation.js";
// To rename an import to give alias 
import { autobind as Autobind} from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

// ProjectInput class

  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputEle: HTMLInputElement;
    descriptionInputEle: HTMLInputElement;
    peopleInputEle: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputEle = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputEle = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputEle = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    // public methods comes before the private methods 
    configure() {
        this.element.addEventListener(
            'submit',
            this.submitHandler
        )
    }

    renderContent(): void {
        
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputEle.value;
        const enteredDescription = this.descriptionInputEle.value;
        const enteredPeople = this.peopleInputEle.value;

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true
        }
        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }
        const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable) 
        ) {
            alert('Invalid input, Please try again!!');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputEle.value = '';
        this.descriptionInputEle.value = '';
        this.peopleInputEle.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
  }

