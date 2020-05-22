/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/style.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "style.css");

/***/ }),

/***/ "./src/defaultDropdown.js":
/*!********************************!*\
  !*** ./src/defaultDropdown.js ***!
  \********************************/
/*! exports provided: createDefaultProjectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultProjectDropdown", function() { return createDefaultProjectDropdown; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");


function createDefaultProjectDropdown() {
  const option = document.getElementById("projects");
  option.innerHTML = "";
  let opt = document.createElement("option");
  opt.innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][0].title;
  opt.setAttribute("value", _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][0].title);
  option.appendChild(opt);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListViewer.js */ "./src/projectListViewer.js");

__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./style.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/style.css");

Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/*! exports provided: Project, createProject, createdProjects, obj, ToDo, updateLocalstorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProjects", function() { return createdProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return ToDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocalstorage", function() { return updateLocalstorage; });
/* harmony import */ var _projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListViewer.js */ "./src/projectListViewer.js");
/* harmony import */ var _defaultDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultDropdown.js */ "./src/defaultDropdown.js");



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
      dueDate: "01-01-2021",
      priority: 2,
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Cleaning",
      description: "Clean my room",
      dueDate: "01-01-2021",
      priority: 1,
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Washing dishes",
      description: "Washing dishes from previous day",
      dueDate: "01-01-2021",
      priority: 1,
      itemId: 3,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });

    obj = 1;
    createdProjects[obj].todolist.unshift({
      name: "Help Mum",
      description: "some stuff",
      dueDate: "01-01-2021",
      priority: 3,
      itemId: 1,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Help Grandpa",
      description: "more stuff",
      dueDate: "01-01-2021",
      priority: 2,
      itemId: 2,
      project: createdProjects[obj].title.replace(/ /g, "_"),
    });
    createdProjects[obj].todolist.unshift({
      name: "Go to work",
      description: "finish my work",
      dueDate: "01-01-2021",
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
  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
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
      Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["submitAddProjectNull"])();
      obj = document.getElementById("projects").options.length - 1;
      Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
    } else if (addProject.trim() === "") {
      error.innerHTML = "Project name can't be empty";
    } else {
      error.innerHTML = `not allowed: /, !, _ `;
    }
  });

document.getElementById("deleteproject").addEventListener("click", function () {
  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["removeProjectDropdown"])();
  createdProjects.splice(obj, 1);
  obj = 0;

  if (createdProjects.length === 0) {
    createProject("Test");
    Object(_defaultDropdown_js__WEBPACK_IMPORTED_MODULE_1__["createDefaultProjectDropdown"])();
    obj = 0;
  }

  updateLocalstorage();

  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
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

  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
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
  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
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
  Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
});

function updateLocalstorage() {
  localStorage.setItem("projects", JSON.stringify(createdProjects));
}




/***/ }),

/***/ "./src/projectEditViewer.js":
/*!**********************************!*\
  !*** ./src/projectEditViewer.js ***!
  \**********************************/
/*! exports provided: editButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _projectListViewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectListViewer.js */ "./src/projectListViewer.js");




let activeEditToDo;
let obj2;
let itemId;
let newPriority = 0;

function editButton(edit) {
  document.getElementById(edit).addEventListener("click", function () {
    activeEditToDo = this.id;
    let str = this.id;
    itemId = str.match(/![\d\D]+$/);
    itemId = JSON.stringify(itemId);
    itemId = itemId.substring(3);
    itemId = itemId.substring(0, itemId.length - 2);

    let projTitle = str.match(/\/[\d\D]+!/);
    projTitle = JSON.stringify(projTitle);
    projTitle = projTitle.substring(3);
    projTitle = projTitle.substring(0, projTitle.length - 3);
    for (let y = 0; y < _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].length; y++) {
      if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][y].title.replace(/ /g, "_") === projTitle) {
        obj2 = y;
      }
    }

    let modal = document.querySelector(".modal");
    modal.style.display = "block";

    let closeBtn = document.getElementById("close-btn");

    for (let e = 0; e < _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist.length; e++) {
      if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].itemId == itemId) {
        document.getElementById("editTitle").value =
          _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].name;
        document.getElementById("editDescription").value =
          _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].description;
        console.log(typeof _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority);
        if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority === 1) {
          newPriority = 1;
          document.getElementById("button1Modal").classList.remove("blanko");
        } else if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority === 2) {
          newPriority = 2;
          document.getElementById("button2Modal").classList.remove("blanko");
        } else if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority === 0) {
          newPriority = 0;
          document.getElementById("button0Modal").classList.remove("blanko");
        } else if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority === 3) {
          newPriority = 3;
          document.getElementById("button3Modal").classList.remove("blanko");
        }
        document.getElementById("editDueDate").value =
          _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].dueDate;
        Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["updateLocalstorage"])();
      }
    }

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    };

    document
      .getElementById("buttonsModal")
      .addEventListener("click", function (event) {
        document.getElementById("button0Modal").classList.add("blanko");
        document.getElementById("button1Modal").classList.add("blanko");
        document.getElementById("button2Modal").classList.add("blanko");
        document.getElementById("button3Modal").classList.add("blanko");
        event.target.classList.remove("blanko");
        console.log(event.target);
      });

    document.addEventListener("click", function (event) {
      console.log(event.target);
      if (event.target.id === "button2Modal") {
        newPriority = 2;
      } else if (event.target.id === "button1Modal") {
        newPriority = 1;
      } else if (event.target.id === "button3Modal") {
        newPriority = 3;
      } else if (event.target.id === "saveEdit") {
      } else if (event.target.classList.contains("fa-pen")) {
      } else if (event.target.id === "editDueDate") {
      } else {
        newPriority = 0;
        document.getElementById("button0Modal").classList.remove("blanko");
      }
    });
    // document
    //   .getElementById("button1Modal")
    //   .addEventListener("click", function () {
    //     newPriority = 1;
    //   });
    // document
    //   .getElementById("button2Modal")
    //   .addEventListener("click", function () {
    //     newPriority = 2;
    //   });
    // document
    //   .getElementById("button3Modal")
    //   .addEventListener("click", function () {
    //     newPriority = 3;
    //   });
    // document
    //   .getElementById("button0Modal")
    //   .addEventListener("click", function () {
    //     newPriority = 0;
    //   });
  });

  let editSave = document.getElementById("saveEdit");
  editSave.addEventListener("click", function () {
    for (let e = 0; e < _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist.length; e++) {
      if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].itemId == itemId) {
        _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].name = document.getElementById(
          "editTitle"
        ).value;
        _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].description = document.getElementById(
          "editDescription"
        ).value;

        _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].priority = newPriority;

        _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][obj2].todolist[e].dueDate = document.getElementById(
          "editDueDate"
        ).value;
      }
    }
    document.getElementById("button0Modal").classList.add("blanko");
    document.getElementById("button1Modal").classList.add("blanko");
    document.getElementById("button2Modal").classList.add("blanko");
    document.getElementById("button3Modal").classList.add("blanko");
    Object(_projectListViewer_js__WEBPACK_IMPORTED_MODULE_1__["render"])();
    Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["updateLocalstorage"])();
    document.querySelector(".modal").style.display = "none";
  });
}




/***/ }),

/***/ "./src/projectListViewer.js":
/*!**********************************!*\
  !*** ./src/projectListViewer.js ***!
  \**********************************/
/*! exports provided: render, submitAddProjectNull, removeProjectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAddProjectNull", function() { return submitAddProjectNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProjectDropdown", function() { return removeProjectDropdown; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _defaultDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultDropdown */ "./src/defaultDropdown.js");
/* harmony import */ var _projectEditViewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectEditViewer.js */ "./src/projectEditViewer.js");





function render() {
  document.getElementById("render").innerHTML = "";
  let countListItem = 0;
  let activeTab;
  let checkboxTab;

  if (document.getElementById("incomplete").classList.contains("active")) {
    activeTab = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].todolist;
    checkboxTab = "incomplete";
  } else if (document.getElementById("complete").classList.contains("active")) {
    activeTab = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].completed;
    checkboxTab = "completed";
  } else if (document.getElementById("allTodos").classList.contains("active")) {
    checkboxTab = "allIncomplete";
    activeTab = [];
    for (let i = 0; i < _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].length; i++) {
      activeTab = activeTab.concat(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][i].todolist);
    }
  }
  for (let prop in activeTab) {
    if (activeTab.hasOwnProperty(prop)) {
      let descriptionBoxId = `descriptionBox/${activeTab[prop].project}!${activeTab[prop].itemId}`;
      let checkboxId = `checkbox/${activeTab[prop].project}!${activeTab[prop].itemId}`;
      let titleId = `title/${activeTab[prop].project}!${activeTab[prop].itemId}`;
      let taskId = "task" + countListItem;
      let newListItem = document.createElement("li");
      newListItem.innerHTML = `<div class="task-item-body" id='${taskId}'> 
          <div class="task-item-checkbox-wrapper"> 
            <button class="complete-task-btn"> 
              <i class="far fa-square ${checkboxTab}" id="${checkboxId}"></i> 
            </button> 
          </div> 
          <div class="task-item-title-wrapper" id=${titleId}> 
            <span class="task-item-title-wrapper-title">${activeTab[prop].name}</span> 
          </div> 
          <div class="due-date-overview">
            ${activeTab[prop].dueDate}
          </div>
        </div> 
        <div id=${descriptionBoxId} class="descriptionBox">
        <div class="detail-buttons">
        <div class="close" id="${descriptionBoxId}">&#10006;</div>
        <div id="editButton/${activeTab[prop].project}!${activeTab[prop].itemId}" class="edit-button">
          <i class="fas fa-pen"></i>
        </div> 
        </div>
        <!-- <input type="button" id="editButton/${activeTab[prop].project}!${activeTab[prop].itemId}" value="Edit"> -->
       
        <strong><label>Description:</label></strong> 
        <div class="showDescription" class="text">
        ${activeTab[prop].description}
        <br/><br/>
        <strong><label>Priority:</label></strong> ${activeTab[prop].priority}<br/><br/>
       <strong><label>Due Date:</label></strong> ${activeTab[prop].dueDate}
       </div>
       <br/>

    `;
      newListItem.className = "task-items";

      document.getElementById("render").appendChild(newListItem);

      if (activeTab[prop].priority == 1) {
        document.getElementById(`${titleId}`).style.backgroundColor =
          "rgba(0,255,0,.7)";
      } else if (activeTab[prop].priority == 2) {
        document.getElementById(`${titleId}`).style.backgroundColor = "yellow";
      } else if (activeTab[prop].priority == 3) {
        document.getElementById(`${titleId}`).style.backgroundColor =
          "rgba(255,0,0,.7)";
      }

      document.getElementById(`${descriptionBoxId}`).style.display = "none";
      document
        .getElementById(`${taskId}`)
        .addEventListener("click", function (e) {
          var check = document.querySelectorAll(".far");
          for (let i = 0; i < check.length; i++) {
            if (e.target == check[i]) {
              return;
            }
          }

          if (
            document.getElementById(`${descriptionBoxId}`).style.display ===
            "block"
          ) {
            document.getElementById(`${descriptionBoxId}`).style.display =
              "none";
          } else {
            let description = document.getElementsByClassName("descriptionBox");
            Array.from(description).forEach((el) => {
              el.style.display = "none";
            });
            document.getElementById(`${descriptionBoxId}`).style.display =
              "block";
          }
        });
      let edit = `editButton/${activeTab[prop].project}!${activeTab[prop].itemId}`;
      Object(_projectEditViewer_js__WEBPACK_IMPORTED_MODULE_2__["editButton"])(edit);

      let faSquare = document.querySelectorAll(".fa-square");
      faSquare[countListItem].addEventListener("click", function () {
        this.classList.toggle("fa-square");
        this.classList.toggle("fa-check-square");
      });

      countListItem++;
    }
  }

  let close = document.querySelectorAll(".close");
  Array.from(close).forEach((element) => {
    element.addEventListener("click", function () {
      document.getElementById(`${this.id}`).style.display = "none";
    });
  });
  displayOptions();
}

(function activeLink() {
  var complete = document.getElementById("complete");
  var allTodos = document.getElementById("allTodos");
  var incomplete = document.getElementById("incomplete");
  document.getElementById("links").addEventListener("click", function (e) {
    if (
      e.target === complete ||
      e.target === allTodos ||
      e.target === incomplete
    ) {
      complete.classList.remove("active");
      allTodos.classList.remove("active");
      incomplete.classList.remove("active");

      e.target.classList.add("active");
    }

    document.getElementById("delete").style.display = "none";
    document.getElementById("markDone").style.display = "none";
    document.getElementById("undo").style.display = "none";
    render();
  });
})();

function removeProjectDropdown() {
  var selectobject = document.getElementById("projects");
  for (var i = 0; i < selectobject.length; i++) {
    if (selectobject.options[i].value == _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].title)
      selectobject.remove(i);
  }
}

let selectedPriority = 0;

document
  .getElementById("buttonSelector")
  .addEventListener("click", function (event) {
    document.getElementById("button0").classList.add("blanko");
    document.getElementById("button1").classList.add("blanko");
    document.getElementById("button2").classList.add("blanko");
    document.getElementById("button3").classList.add("blanko");
    event.target.classList.remove("blanko");
    console.log(event.target);

    if (event.target.id === "button2") {
      selectedPriority = 2;
    } else if (event.target.id === "button3") {
      selectedPriority = 3;
    } else if (event.target.id === "button1") {
      selectedPriority = 1;
    } else {
      selectedPriority = 0;
      document.getElementById("button0").classList.remove("blanko");
    }
  });

// document.getElementById("button1").addEventListener("click", function () {
//   if (
//     document.getElementById("button1").classList.contains("clicked")
//     //document.getElementById("button1").style.backgroundColor===x solid rgba(0, 255, 0, 0.7)"
//   ) {
//     selectedPriority = 0;
//     document.getElementById("button1").style.backgroundColor = "white";
//   } else {
//     document.getElementById("button2").style.backgroundColor = "white";
//     document.getElementById("button3").style.backgroundColor = "white";
//     document.getElementById("button1").style.backgroundColor =
//       "rgba(0,255,0,0.7)";
//     selectedPriority = 1;
//   }
//   document.getElementById("button1").classList.toggle("clicked");
// });

// document.getElementById("button2").addEventListener("click", function () {
//   if (
//     document.getElementById("button2").style.backgroundColor ===
//     "5px solid yellow"
//   ) {
//     selectedPriority = 0;
//     document.getElementById("button2").style.backgroundColor = "white";
//   } else {
//     document.getElementById("button1").style.backgroundColor = "white";
//     document.getElementById("button3").style.backgroundColor = "white";
//     document.getElementById("button2").style.backgroundColor = "yellow";
//     selectedPriority = 2;
//   }
// });

// document.getElementById("button3").addEventListener("click", function () {
//   if (
//     document.getElementById("button3").classList.contains("clicked")
//     //document.getElementById("button3").style.backgroundColor===x solid rgba(255,0,0,0.7)"
//   ) {
//     selectedPriority = 0;
//     document.getElementById("button3").style.backgroundColor = "white";
//   } else {
//     document.getElementById("button1").style.backgroundColor = "white";
//     document.getElementById("button2").style.backgroundColor = "white";
//     document.getElementById("button3").style.backgroundColor =
//       "rgba(255,0,0,0.7)";
//     selectedPriority = 3;
//   }
//   document.getElementById("button3").classList.toggle("clicked");
// });

document.getElementById("cancelAddToDo").addEventListener("click", function () {
  document.getElementById("newTodo").style.display = "none";
  document.getElementById("addtodo").style.display = "inline";
  document.getElementById("cancelAddToDo").style.display = "none";
});

document.getElementById("addtodo").addEventListener("click", function () {
  document.getElementById("newTodo").style.display = "flex";
  document.getElementById("button0").classList.remove("blanko");
  document.getElementById("addtodo").style.display = "none";
  document.getElementById("cancelAddToDo").style.display = "inline";
  selectedPriority = 0;
});

document.getElementById("submitAddTodo").addEventListener("click", function () {
  document.getElementById("newTodo").style.display = "none";
  document.getElementById("addtodo").style.display = "inline";
  document.getElementById("cancelAddToDo").style.display = "none";
  document.getElementById("button0").classList.add("blanko");
  document.getElementById("button1").classList.add("blanko");
  document.getElementById("button2").classList.add("blanko");
  document.getElementById("button3").classList.add("blanko");

  _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].todolist.unshift(
    new _projectController_js__WEBPACK_IMPORTED_MODULE_0__["ToDo"](
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      selectedPriority
    )
  );
  Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["updateLocalstorage"])();

  render();
});

const option = document.getElementById("projects");
let count = 0;
_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].forEach((proj) => {
  let opt = document.createElement("option");
  opt.innerHTML = proj.title;
  opt.setAttribute("value", proj.title);
  option.appendChild(opt);
  count++;
});

function submitAddProjectNull() {
  Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createProject"])(document.getElementById("myText").value);

  let opt = document.createElement("option");
  opt.innerHTML = document.getElementById("myText").value;
  opt.setAttribute("value", document.getElementById("myText").value);
  option.appendChild(opt);
  count++;

  document.getElementById("addproject").style.display = "inline";
  document.getElementById("myText").style.display = "none";
  document.getElementById("submitAddProject").style.display = "none";
  document.getElementById("cancelAddProject").style.display = "none";

  document.getElementById("projects").options[
    document.getElementById("projects").options.length - 1
  ].selected = true;

  document.getElementById("myText").value = "";
}

document.getElementById("addproject").addEventListener("click", function () {
  document.getElementById("addproject").style.display = "none";
  document.getElementById("myText").style.display = "inline";
  document.getElementById("cancelAddProject").style.display = "inline";
  document.getElementById("myText").focus();
  document.getElementById("submitAddProject").style.display = "inline";
});
document
  .getElementById("cancelAddProject")
  .addEventListener("click", function () {
    document.getElementById("myText").style.display = "none";
    document.getElementById("cancelAddProject").style.display = "none";
    document.getElementById("addproject").style.display = "inline";
    document.getElementById("myText").style.display = "none";
    document.getElementById("submitAddProject").style.display = "none";

    console.log("clicked");
  });

function displayOptions() {
  let checkboxes = document.querySelectorAll(".far");
  let checkedCount = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    let thisCheckbox = checkboxes[i];
    thisCheckbox.addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-check-square")) {
        if (this.classList.contains("incomplete")) {
          checkedCount++;
          document.getElementById("delete").style.display = "inline";
          document.getElementById("markDone").style.display = "inline";
        } else if (this.classList.contains("completed")) {
          checkedCount++;
          document.getElementById("undo").style.display = "inline";
          document.getElementById("delete").style.display = "inline";
        } else if (this.classList.contains("allIncomplete")) {
          checkedCount++;
          document.getElementById("delete").style.display = "inline";
          document.getElementById("markDone").style.display = "inline";
        }
      } else {
        checkedCount--;
        if (checkedCount == 0) {
          document.getElementById("delete").style.display = "none";
          document.getElementById("markDone").style.display = "none";
          document.getElementById("undo").style.display = "none";
        }
      }
    });
  }
}




/***/ })

/******/ });
//# sourceMappingURL=main.js.map