import { render, submitAddProjectNull } from "./projectListViewer.js";
import { createDefaultProjectDropdown } from "./defaultDropdown.js";
import { removeProjectDropdown } from "./projectListViewer.js";
import { format } from "date-fns";
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

// const projects = storeProjects()
class Project {
  constructor(title) {
    this.title = title;
    this.todolist = [];
    this.completed = [];
    this.id = title;
  }
}

console.log(storeProjects()[3]);

let createdProjects = storeProjects();

console.log(storeProjects());

function createProject(title) {
  createdProjects.push(new Project(title));
  localStorage.setItem("projects", JSON.stringify(createdProjects));
  return createdProjects;
}

console.log(storeProjects());
if (createdProjects.length === 0) {
  console.log("yes");

  createProject("Default_New");
  createProject("Family Stuff");

  {
    obj = 0;
    createdProjects[obj].todolist.unshift({
      name: "Homework",
      description: "English homework",
      dueDate: "01-01-2021",
      priority: "2",
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Cleaning",
      description: "Clean my room",
      dueDate: "01-01-2021",
      priority: "1",
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Washing dishes",
      description: "Washing dishes from previous day",
      dueDate: "01-01-2021",
      priority: "1",
      itemId: 3,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });

    obj = 1;
    createdProjects[obj].todolist.unshift({
      name: "Help Mum",
      description: "some stuff",
      dueDate: "01-01-2021",
      priority: "3",
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Help Grandpa",
      description: "more stuff",
      dueDate: "01-01-2021",
      priority: "2",
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Go to work",
      description: "finish my work",
      dueDate: "01-01-2021",
      priority: "2",
      itemId: 3,
      // project: obj,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
  }

  updateLocalstorage();
}

obj = 0;

document.getElementById("projects").addEventListener("change", (event) => {
  // console.log(event.target.value);
  // console.log(document.getElementById("projects"));
  for (let e = 0; e < createdProjects.length; e++) {
    if (createdProjects[e].title === event.target.value) {
      obj = e;
      console.log(obj);
    }
  }
  render();
});

// let todoId = 0;

class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.project = obj;
    this.project = createdProjects[obj].title.replace(/ /g, "_");
    //  this.itemId = ++todoId;
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

  console.log("createdProjects length: " + createdProjects.length);
  if (createdProjects.length === 0) {
    createProject("Test");
    createDefaultProjectDropdown();
    obj = 0;
  }

  updateLocalstorage();

  render();
});
// console.log(document.getElementById("projects"));

document.getElementById("undo").addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".far");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("fa-check-square")) {
      let str = checkboxes[i].id;
      // let obj = str.match(/^\d+/);
      // let itemId = str.match(/\d+$/);
      let projTitle = str.match(/\/[\d\D]+!/);
      projTitle = JSON.stringify(projTitle);
      projTitle = projTitle.substring(3);
      projTitle = projTitle.substring(0, projTitle.length - 3);
      console.log(projTitle);
      for (let y = 0; y < createdProjects.length; y++) {
        if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
          obj = y;
          console.log("success");
        }
      }

      let itemId = str.match(/![\d\D]+$/);
      itemId = JSON.stringify(itemId);
      itemId = itemId.substring(3);
      itemId = itemId.substring(0, itemId.length - 2);
      console.log(itemId);
      for (let e = 0; e < createdProjects[obj].completed.length; e++) {
        if (createdProjects[obj].completed[e].itemId == itemId) {
          console.log("hi_undo");
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
      console.log(checkboxes[i]);
      if (
        checkboxes[i].classList.contains("allIncomplete") ||
        checkboxes[i].classList.contains("incomplete")
      ) {
        console.log(checkboxes[i].id);
        let str = checkboxes[i].id;
        // let obj = str.match(/\B\d+/);
        // let itemId = str.match(/\d+$/);

        let projTitle = str.match(/\/[\d\D]+!/);
        projTitle = JSON.stringify(projTitle);
        projTitle = projTitle.substring(3);
        projTitle = projTitle.substring(0, projTitle.length - 3);
        console.log(projTitle);
        for (let y = 0; y < createdProjects.length; y++) {
          if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
            obj = y;
            console.log("success");
          }
        }

        let itemId = str.match(/![\d\D]+$/);
        itemId = JSON.stringify(itemId);
        itemId = itemId.substring(3);
        itemId = itemId.substring(0, itemId.length - 2);
        console.log(itemId);
        for (let e = 0; e < createdProjects[obj].todolist.length; e++) {
          if (createdProjects[obj].todolist[e].itemId == itemId) {
            createdProjects[obj].completed.push(
              createdProjects[obj].todolist[e]
            );
            createdProjects[obj].todolist.splice(e, 1);
          }
        }

        console.log(createdProjects[obj].completed);
      }
      // else if (checkboxes[i].classList.contains("incomplete")) {
      //   console.log(createdProjects[obj].todolist[checkboxes.length - i - 1]);
      //   createdProjects[obj].completed.push(
      //     createdProjects[obj].todolist[checkboxes.length - i + 1]
      //   );
      //   createdProjects[obj].todolist.splice(checkboxes.length - i + 1, 1);
      //   console.log(createdProjects[obj].completed);
      // }
    } else {
    }
  }
  updateLocalstorage();
  render();
});

document.getElementById("delete").addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".far");
  console.log(createdProjects[0]);

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].classList.contains("fa-check-square")) {
      let str = checkboxes[i].id;
      // let obj = str.match(/\B\d+/);
      // let itemId = str.match(/\d+$/);

      let projTitle = str.match(/\/[\d\D]+!/);
      projTitle = JSON.stringify(projTitle);
      projTitle = projTitle.substring(3);
      projTitle = projTitle.substring(0, projTitle.length - 3);
      console.log(projTitle);
      for (let y = 0; y < createdProjects.length; y++) {
        if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
          obj = y;
          console.log("success");
        }
      }

      let itemId = str.match(/![\d\D]+$/);
      itemId = JSON.stringify(itemId);
      itemId = itemId.substring(3);
      itemId = itemId.substring(0, itemId.length - 2);

      if (checkboxes[i].classList.contains("completed")) {
        console.log("completed");
        for (let g = 0; g < createdProjects[obj].completed.length; g++) {
          if (createdProjects[obj].completed[g].itemId == itemId) {
            console.log("test");
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
  // checkboxes.forEach()
  //  for(let i = 0; i < createdProjects.length; i++){
  //    for(let j = 0; j < createdProjects[i].todolist.length; j++){

  //  }
  // }
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
