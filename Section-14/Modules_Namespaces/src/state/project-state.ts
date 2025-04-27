// Project State Management
import { Project, ProjectStatus } from "../models/project.js";

// namespace App {
  //Listener type is a function which gets a list of projects and returns nothing
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }
  }

  // export only what is needed outside of the file
  export class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    //private constructor to guarantee this to be singleton class 
    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }

    // move project from active to finished 
    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find(prj => prj.id === projectId);
      if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
      }
    }

    private updateListeners() {
        // we should inform all our listeners and inform about the change in the projects
      for (const listenerFn of this.listeners) {
            // copy of array is passed
            listenerFn(this.projects.slice());
        }
    }
  }

  //Global instance of project state
  export const projectState = ProjectState.getInstance();
// }