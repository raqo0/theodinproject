"use strict";

import Project from "./project";
import Task from "./task";

class ProjectList {
  projectId = 1;
  taskId = 1;

  constructor() {
    this.projects = [];
  }

  addProject(newProjectName) {
    if(this.projects.find(project => newProjectName === project.title)) return;
    let project = new Project(newProjectName, this.projectId);
    this.projects.push(project);
    this.projectId++;
    return project;
  }

  removeProject(projectName) {
    this.projects = this.projects.filter(project => project.title !== projectName);
  }

  editProject(oldProjectName, newProjectName) {
    if(this.projects.find(project => newProjectName === project.title)) return false;
    this.projects = this.projects.map(project => {
      if(project.title === oldProjectName) {
        project.title = newProjectName;
      }

      return project;
    })
    return true;
  }

  addTaskToProject(projectName, taskName, taskDesc) {
    let task;
    this.projects = this.projects.map(project => {
      if(project.title === projectName) {
        task = new Task(taskName, taskDesc, this.taskId);
        this.taskId++;
        project.addTask(task);
      }

      return project;
    })
    return task;
  }

  getTaskCountForProject(projectName) {
    let pr = this.projects.find(project => projectName === project.title);
    return pr.tasks.length;
  }

  removeTaskForProjectById(projectName, taskid) {
    this.projects = this.projects.map(project => {
      if(project.title === projectName) {
        project.tasks = project.tasks.filter(task => task.id !== taskid);
      }

      return project;
    })
  }

  editTaskForProjectById(projectName, taskId, taskName, taskDesc) {
    let editedTask;
    let pr = this.projects.find(project => projectName === project.title);
    pr.tasks = pr.tasks.map(task => {
      if(task.id === taskId) {
        task.title = taskName;
        task.description = taskDesc;
        editedTask = task;
      }

      return task;
    })
    return editedTask;
  }

  getTaskForProjectById(projectName, taskId) {
    let pr = this.projects.find(project => projectName === project.title);
    let task = pr.tasks.filter(task => task.id === taskId);
    return task[0];
  }

  changeCompletionStateForTaskById(projectName, taskId, state) {
    let pr = this.projects.find(project => projectName === project.title);
    pr.tasks = pr.tasks.map(task => {
      if(task.id === taskId) {
        task.completed = state;
      }

      return task;
    })
  }

  getTasksForProject(projectName) {
    let pr = this.projects.find(project => projectName === project.title);
    return pr.tasks;
  }

  get projectsCount() {
    return this.projects.length;
  }
}

export default ProjectList;