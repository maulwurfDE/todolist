import { render, submitAddProjectNull } from "./projectListViewer.js";
import { createDefaultProjectDropdown } from "./defaultDropdown.js";
import { removeProjectDropdown } from "./projectListViewer.js";
let obj = 0;

function storeProjects() {
  let projects;
  if (localStorage.getItem("projects")) {
    projects = JSON.parse(localStorage.getItem("projects"));
  } else {
    projects = [];
  }
  return projects;
}

class Project {
  constructor(title) {
    this.title = title;
    this.todolist = [];
    this.completed = [];
    this.id = title;
  }
}

let createdProjects = storeProjects();

function createProject(title) {
  createdProjects.push(new Project(title));
  localStorage.setItem("projects", JSON.stringify(createdProjects));
  return createdProjects;
}

if (createdProjects.length === 0) {
  createProject("Default_New");
  createProject("Family Stuff");

  {
    obj = 0;
    createdProjects[obj].todolist.unshift({
      name: "Homework",
      description: "English homework",
      dueDate: "2021-01-01",
      priority: 2,
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Cleaning",
      description: "Clean my room",
      dueDate: "2021-01-01",
      priority: 1,
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Washing dishes",
      description: "Washing dishes from previous day",
      dueDate: "2021-01-01",
      priority: 1,
      itemId: 3,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });

    obj = 1;
    createdProjects[obj].todolist.unshift({
      name: "Help Mum",
      description: "some stuff",
      dueDate: "2021-01-01",
      priority: 3,
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Help Grandpa",
      description: "more stuff",
      dueDate: "2021-01-01",
      priority: 2,
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Go to work",
      description: "finish my work",
      dueDate: "2021-01-01",
      priority: 2,
      itemId: 3,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
  }

  updateLocalstorage();
}

obj = 0;

document.getElementById("projects").addEventListener("change", (event) => {
  for (let e = 0; e < createdProjects.length; e++) {
    if (createdProjects[e].title === event.target.value) {
      obj = e;
    }
  }
  render();
});

class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = createdProjects[obj].title.replace(/ /g, "_");
    this.itemId = Math.random();
  }
}

document
  .getElementById("submitAddProject")
  .addEventListener("click", function () {
    var addProject = document.getElementById("myText").value;
    var error = document.getElementById("error");
    if (
      !(
        addProject.includes("/") ||
        addProject.includes("!") ||
        addProject.includes("_") ||
        addProject.trim() === ""
      )
    ) {
      submitAddProjectNull();
      obj = document.getElementById("projects").options.length - 1;
      render();
    } else if (addProject.trim() === "") {
      error.innerHTML = "Project name can't be empty";
    } else {
      error.innerHTML = `not allowed: /, !, _ `;
    }
  });

document.getElementById("deleteproject").addEventListener("click", function () {
  removeProjectDropdown();
  createdProjects.splice(obj, 1);
  obj = 0;

  if (createdProjects.length === 0) {
    createProject("Test");
    createDefaultProjectDropdown();
    obj = 0;
  }

  updateLocalstorage();

  render();
});

document.getElementById("undo").addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".far");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("fa-check-square")) {
      let str = checkboxes[i].id;
      let projTitle = str.match(/\/[\d\D]+!/);
      projTitle = JSON.stringify(projTitle);
      projTitle = projTitle.substring(3);
      projTitle = projTitle.substring(0, projTitle.length - 3);
      for (let y = 0; y < createdProjects.length; y++) {
        if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
          obj = y;
        }
      }

      let itemId = str.match(/![\d\D]+$/);
      itemId = JSON.stringify(itemId);
      itemId = itemId.substring(3);
      itemId = itemId.substring(0, itemId.length - 2);
      for (let e = 0; e < createdProjects[obj].completed.length; e++) {
        if (createdProjects[obj].completed[e].itemId == itemId) {
          createdProjects[obj].todolist.push(createdProjects[obj].completed[e]);
          createdProjects[obj].completed.splice(e, 1);
        }
      }
    }
  }

  updateLocalstorage();

  render();
});

document.getElementById("markDone").addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".far");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("fa-check-square")) {
      if (
        checkboxes[i].classList.contains("allIncomplete") ||
        checkboxes[i].classList.contains("incomplete")
      ) {
        let str = checkboxes[i].id;

        let projTitle = str.match(/\/[\d\D]+!/);
        projTitle = JSON.stringify(projTitle);
        projTitle = projTitle.substring(3);
        projTitle = projTitle.substring(0, projTitle.length - 3);
        for (let y = 0; y < createdProjects.length; y++) {
          if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
            obj = y;
          }
        }

        let itemId = str.match(/![\d\D]+$/);
        itemId = JSON.stringify(itemId);
        itemId = itemId.substring(3);
        itemId = itemId.substring(0, itemId.length - 2);
        for (let e = 0; e < createdProjects[obj].todolist.length; e++) {
          if (createdProjects[obj].todolist[e].itemId == itemId) {
            createdProjects[obj].completed.push(
              createdProjects[obj].todolist[e]
            );
            createdProjects[obj].todolist.splice(e, 1);
          }
        }
      }
    } else {
    }
  }
  updateLocalstorage();
  render();
});

document.getElementById("delete").addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".far");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("fa-check-square")) {
      let str = checkboxes[i].id;
      let projTitle = str.match(/\/[\d\D]+!/);
      projTitle = JSON.stringify(projTitle);
      projTitle = projTitle.substring(3);
      projTitle = projTitle.substring(0, projTitle.length - 3);
      for (let y = 0; y < createdProjects.length; y++) {
        if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
          obj = y;
        }
      }

      let itemId = str.match(/![\d\D]+$/);
      itemId = JSON.stringify(itemId);
      itemId = itemId.substring(3);
      itemId = itemId.substring(0, itemId.length - 2);

      if (checkboxes[i].classList.contains("completed")) {
        for (let g = 0; g < createdProjects[obj].completed.length; g++) {
          if (createdProjects[obj].completed[g].itemId == itemId) {
            createdProjects[obj].completed.splice(g, 1);
          }
        }
      } else {
        for (let g = 0; g < createdProjects[obj].todolist.length; g++) {
          if (createdProjects[obj].todolist[g].itemId == itemId) {
            createdProjects[obj].todolist.splice(g, 1);
          }
        }
      }
    }
  }

  updateLocalstorage();
  render();
});

function updateLocalstorage() {
  localStorage.setItem("projects", JSON.stringify(createdProjects));
}

export {
  Project,
  createProject,
  createdProjects,
  obj,
  ToDo,
  updateLocalstorage,
};
