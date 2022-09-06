(()=>{"use strict";let t=new class{constructor(){this.projects=new class{constructor(){this.projects=[]}addProject(t){if(this.projects.find((e=>t.title===e.title)))return;let e=new class{constructor(t){this.title=t,this.todos=[]}addTodo(t){this.todos.find((e=>t.title===e.title))||this.todos.push(t)}removeTodo(t){this.todos=this.todos.filter((e=>e.title!==t.title))}}(t);this.projects.push(e)}get projectsCount(){return this.projects.length}}}initDom(){this.addDefaultProjects(),this.loadProjects(),this.initButtons(),this.openProject(document.getElementById("all"))}initButtons(){let t=document.getElementById("add-project"),e=document.getElementById("addProjectDialog"),o=document.getElementsByClassName("close")[0],d=document.querySelector(".dialog-close"),n=document.getElementById("addProjectForm"),c=document.getElementById("dialog-project-input"),s=document.getElementById("all"),r=document.getElementById("today"),i=document.getElementById("week"),l=document.querySelectorAll("#sidebar-projects > div");t.addEventListener("click",(()=>{e.showModal(),this.clearAddProjectInputField()})),o.addEventListener("click",(()=>e.close())),d.addEventListener("click",(()=>e.close())),n.addEventListener("submit",(()=>{this.addProject(c.value)})),s.addEventListener("click",(t=>this.openProject(t.target))),r.addEventListener("click",(t=>this.openProject(t.target))),i.addEventListener("click",(t=>this.openProject(t.target))),l.forEach((t=>{t.addEventListener("click",(t=>this.openProject(t.target)))})),window.addEventListener("click",(t=>{t.target==e&&e.close()}))}clearAddProjectInputField(){document.getElementById("dialog-project-input").value=""}addDefaultProjects(){this.addProject("Test1"),this.addProject("Test2"),this.addProject("Test3")}addProject(t){this.projects.addProject(t),document.getElementById("projects-count").textContent=`Projects (${this.projects.projectsCount})`,document.getElementById("dialog-project-input");const e=document.getElementById("sidebar-projects"),o=document.createElement("div");o.classList.add("sidebar-entry-project","hover-element-fill"),o.textContent=t;const d=document.createElement("div");d.classList.add("right-aligned-buttonbar");const n=document.createElement("button");n.classList.add("edit-project","scale-hover"),n.type="button",d.appendChild(n);const c=document.createElement("button");c.classList.add("delete-project","scale-hover"),c.type="button",d.appendChild(c),o.appendChild(d),n.addEventListener("click",(t=>this.editProject(t.target))),c.addEventListener("click",(t=>this.deleteProject(t.target))),o.addEventListener("click",(t=>this.openProject(t.target))),e.appendChild(o)}openProject(t){if(t.classList.contains("edit-project")||t.classList.contains("delete-project"))return;let e=document.querySelectorAll("#sidebar-projects > div"),o=document.querySelectorAll("#default-projects > button");e.forEach((t=>t.classList.remove("sidebar-entry-active"))),o.forEach((t=>t.classList.remove("sidebar-entry-active"))),document.getElementById("content-project-title").textContent=t.textContent,t.classList.add("sidebar-entry-active")}editProject(t){let e=t.parentNode.parentNode.textContent;console.log(`editProject ${e}`)}deleteProject(t){let e=t.parentNode.parentNode.textContent;console.log(`deleteProject ${e}`)}loadProjectContent(t){let e=t.parentNode.parentNode.textContent;console.log(`load content ${e}`)}loadProjects(){}};document.addEventListener("DOMContentLoaded",(()=>t.initDom()))})();