// ProjectList class
// If we are importing interfaces or types from another file we can annotate with type keyword
import { DragTarget }from '../models/drag-drop.js';
import { Project, ProjectStatus } from '../models/project.js';
import Component from './base-component.js';
import { autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
import { ProjectItem } from './project-item.js';

  export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        //calls the constructor of the base class
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];
        // It is safe for inherited class to call these methods instead of base class since it might rely on some thing that is set in the inherited constructor 
        this.configure();
        this.renderContent();
    }

    @autobind
    dragOverHandler(event: DragEvent): void {
        // allow dropping only text/plain content not images or so 
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            // we need to prevent default - By default JS drag and drop event doesnt allow dropping
            event.preventDefault();
            const listEl = this.element.querySelector('ul');
            listEl?.classList.add('droppable');
        }   
    }

    @autobind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    @autobind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector('ul');
        listEl?.classList.remove('droppable');
    }

    // Setting up listeners
    configure() {
        //bind drag event handlers 
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    // private abstract methods are not supported 
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            // host id is the unordered list id which is inside the 'section' element 
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
        }
    }
  }
