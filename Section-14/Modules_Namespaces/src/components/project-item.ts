import { Draggable }from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import Component from './base-component.js';
import { autobind } from '../decorators/autobind.js';

// ProjectItem Class

  export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project;

    //getters and setters by convention added above the constructor
    get persons() {
        if (this.project.people === 1) {
            return '1 person';
        } else {
            return `${this.project.people} persons`;
        }
    }

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent): void {
        // attach data to drag event using dataTransfer property and retrieve while dropping - if we attach the id we can then fetch the project from the state 
        event.dataTransfer!.setData('text/plain', this.project.id)
        event.dataTransfer!.effectAllowed = 'move';
    }

    @autobind
    dragEndHandler(_: DragEvent): void {
        // console.log('DragEnd');
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }

    // getters are accessed like normal properties 
    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    }
  }
