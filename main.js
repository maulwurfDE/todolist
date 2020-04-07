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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectViewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectViewer.js */ "./src/projectViewer.js");


Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();



/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/*! exports provided: Project, createProject, createdProjects, obj, ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdProjects", function() { return createdProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return ToDo; });
/* harmony import */ var _projectViewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectViewer.js */ "./src/projectViewer.js");


class Project{
    constructor(title){
        this.title = title;
        this.todolist = [];
        this.completed = [];
    }
}

let createdProjects = [];


function createProject(title) {
    createdProjects.push(new Project(title))
    return createdProjects
}

createProject('Default_New');
createProject('Family Stuff');


createdProjects[0].todolist.unshift({ name: "Homework", description: "English homework", dueDate: "01-01-2021", priority: "2" });
createdProjects[0].todolist.unshift({ name: "Cleaning", description: "Clean my room", dueDate: "01-01-2021", priority: "1" });
createdProjects[0].todolist.unshift({ name: "Washing dishes", description: "Washing dishes from previous day", dueDate: "01-01-2021", priority: "1" });

createdProjects[1].todolist.unshift({ name: "Help Mum", description: "some stuff", dueDate: "01-01-2021", priority: "2" });
createdProjects[1].todolist.unshift({ name: "Help Grandpa", description: "more stuff", dueDate: "01-01-2021", priority: "1" });
createdProjects[1].todolist.unshift({ name: "Go to work", description: "finish my work", dueDate: "01-01-2021", priority: "1" });



console.log(createdProjects[0])
console.log(createdProjects[1])

document.getElementById("projects").addEventListener("change", (event) => {
    obj = createdProjects[event.target.value].todolist;
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
});


let obj = createdProjects[0].todolist;

class ToDo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }
}


document.getElementById("submitAddProject").addEventListener("click", function() {
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["submitAddProjectNull"])();
    obj = createdProjects[document.getElementById('projects').options.length - 1].todolist;
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();

});



/***/ }),

/***/ "./src/projectViewer.js":
/*!******************************!*\
  !*** ./src/projectViewer.js ***!
  \******************************/
/*! exports provided: render, submitAddProjectNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAddProjectNull", function() { return submitAddProjectNull; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");



function render() {
    var mytbl = document.getElementById("myTable");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;

    for (let prop in _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]) {

        let count = 0;

        if (_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"].hasOwnProperty(prop)) {
            count++;

            let table = document.getElementById("myTable");
            let row = table.insertRow(count);
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "checkbox";
            checkbox.value = "value";
            checkbox.id = "checkbox" + count;
            row.insertCell(0).appendChild(checkbox);
            row.insertCell(1).innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"][prop].name;
            row.insertCell(2).innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"][prop].description;
            row.insertCell(3).innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"][prop].dueDate;
            row.insertCell(4).innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"][prop].priority;
        }
    }
}

const option = document.getElementById('projects')
let count = 0;
_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].forEach(project => {
    let opt = document.createElement('option')
    opt.innerHTML = project.title
    opt.setAttribute('value', count)
    option.appendChild(opt)
    count++;
})


document.getElementById("addproject").addEventListener("click", function() {
    document.getElementById('addproject').style.display = 'none';
    document.getElementById('myText').style.display = 'inline';
    document.getElementById('myText').focus();
    document.getElementById('submitAddProject').style.display = 'inline';
});



function submitAddProjectNull() {

    Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createProject"])(document.getElementById('myText').value);
    console.log(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"]);

    let opt = document.createElement('option');
    opt.innerHTML = document.getElementById('myText').value;
    opt.setAttribute('value', count)
    option.appendChild(opt)
    count++;


    document.getElementById('addproject').style.display = 'inline';
    document.getElementById('myText').style.display = 'none';
    document.getElementById('submitAddProject').style.display = 'none';

    document.getElementById('projects').options[document.getElementById('projects').options.length - 1].selected = true;


    document.getElementById('myText').value = "";


};

document.getElementById('submitAddTodo').addEventListener('click', function() {
    document.getElementById('newTodo').style.display = 'none'
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"].unshift(new _projectController_js__WEBPACK_IMPORTED_MODULE_0__["ToDo"](document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('priority').value));
    render();
})

let checkboxes = document.querySelectorAll("input[name=checkbox]");

console.log(checkboxes);
let checkedCount = 0;
for (var i = 0; i < checkboxes.length; i++) {
    let thisCheckbox = checkboxes[i];
    thisCheckbox.addEventListener('change', function() {
        if (this.checked) {
            checkedCount++;
            document.getElementById("delete").style.display = "inline";
            document.getElementById("markDone").style.display = "inline";
        } else {
            checkedCount--;
            if (checkedCount == 0) {
                document.getElementById("delete").style.display = "none";
                document.getElementById("markDone").style.display = "none";

            }
            console.log("it's unchecked");
        }
    });
}

(function activeLink() {
    var links = document.getElementById('links').children
    var complete = document.getElementById('complete')
    var allTodos = document.getElementById('allTodos')
    var incomplete = document.getElementById('incomplete')
    document.getElementById('links').addEventListener('click', function(e) {
        complete.classList.remove("active");
        allTodos.classList.remove("active");
        incomplete.classList.remove("active");
        e.target.classList.add("active");
    })
}())

document.getElementById('addtodo').addEventListener('click', function() {
    document.getElementById('newTodo').style.display = 'block'
})





/***/ })

/******/ });
//# sourceMappingURL=main.js.map