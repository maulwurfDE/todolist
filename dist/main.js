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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectViewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectViewer.js */ "./src/projectViewer.js");

__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./style.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/style.css");

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


let projectCount = 0;

class Project {
    constructor(title) {
        this.title = title;
        this.todolist = [];
        this.completed = [];
        this.id = projectCount++;
    }
}

let createdProjects = [];


function createProject(title) {
    createdProjects.push(new Project(title))
    return createdProjects
}

createProject('Default_New');
createProject('Family Stuff');

{
    let obj = 0;
    createdProjects[obj].todolist.unshift({ name: "Homework", description: "English homework", dueDate: "01-01-2021", priority: "2", itemId: 1, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Cleaning", description: "Clean my room", dueDate: "01-01-2021", priority: "1", itemId: 2, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Washing dishes", description: "Washing dishes from previous day", dueDate: "01-01-2021", priority: "1", itemId: 3, project: obj });

    obj = 1;
    createdProjects[obj].todolist.unshift({ name: "Help Mum", description: "some stuff", dueDate: "01-01-2021", priority: "2", itemId: 1, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Help Grandpa", description: "more stuff", dueDate: "01-01-2021", priority: "1", itemId: 2, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Go to work", description: "finish my work", dueDate: "01-01-2021", priority: "1", itemId: 3, project: obj });
}


console.log(createdProjects[0])
console.log(createdProjects[1])

document.getElementById("projects").addEventListener("change", (event) => {
    console.log(event.target.value);
    obj = event.target.value;
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
});


let obj = 0;

let todoId = 0;

class ToDo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = obj;
        this.itemId = ++todoId;
    }
}


document.getElementById("submitAddProject").addEventListener("click", function() {
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["submitAddProjectNull"])();
    obj = document.getElementById('projects').options.length - 1;
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();

});

document.getElementById('deleteproject').addEventListener("click", function() {
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["removeProjectDropdown"])();
    createdProjects.splice(obj, 1);
    obj = 0;

    console.log("createdProjects length: " + createdProjects.length);
    if (createdProjects.length === 0) {
        createProject('Test');
        Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["createDefaultProjectDropdown"])();
        obj = 0;

    }

    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
});


document.getElementById('undo').addEventListener("click", function() {

    let checkboxes = document.querySelectorAll("input[name=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            let str = checkboxes[i].id;
            let obj = str.match(/^\d+/);
            let itemId = str.match(/\d+$/);

            for (let e = 0; e < createdProjects[obj].completed.length; e++) {
                if (createdProjects[obj].completed[e].itemId == itemId) {
                    createdProjects[obj].todolist.push(createdProjects[obj].completed[e]);
                    createdProjects[obj].completed.splice(e, 1);

                }
            }

        }

    }

    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
});


document.getElementById('markDone').addEventListener("click", function() {
    let checkboxes = document.querySelectorAll("input[name=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].value === "allIncomplete") {


            if (checkboxes[i].checked) {
                let str = checkboxes[i].id;
                let obj = str.match(/^\d+/);
                let itemId = str.match(/\d+$/);


                for (let e = 0; e < createdProjects[obj].todolist.length; e++) {
                    if (createdProjects[obj].todolist[e].itemId == itemId) {
                        createdProjects[obj].completed.push(createdProjects[obj].todolist[e]);
                        createdProjects[obj].todolist.splice(e, 1);

                    }
                }


                console.log(createdProjects[obj].completed);
                //    console.log(obj.completed);
                //    console.log(obj.completed);
                //    console.log(obj.completed);

            }


        } else {
            if (checkboxes[i].checked) {
                createdProjects[obj].completed.push(createdProjects[obj].todolist[checkboxes.length - i - 1]);
                createdProjects[obj].todolist.splice(checkboxes.length - i - 1, 1);
                console.log(createdProjects[obj].completed);





            } else {

            }

        }
    }
    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();

})

document.getElementById('delete').addEventListener('click', function() {
    let checkboxes = document.querySelectorAll("input[name=checkbox]");
    console.log(createdProjects[0])





    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {

            let str = checkboxes[i].id;
            let obj = str.match(/^\d+/);
            let itemId = str.match(/\d+$/);

            if (checkboxes[i].value === "completed") {
                createdProjects[obj].completed.splice(createdProjects[obj].completed.length - itemId, 1);

            } else {
                createdProjects[obj].todolist.splice(createdProjects[obj].todolist.length - itemId, 1);
            }
        }

    }

    Object(_projectViewer_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
    // checkboxes.forEach()
    //  for(let i = 0; i < createdProjects.length; i++){
    //    for(let j = 0; j < createdProjects[i].todolist.length; j++){

    //  }
    // }
})




/***/ }),

/***/ "./src/projectViewer.js":
/*!******************************!*\
  !*** ./src/projectViewer.js ***!
  \******************************/
/*! exports provided: render, submitAddProjectNull, removeProjectDropdown, createDefaultProjectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitAddProjectNull", function() { return submitAddProjectNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProjectDropdown", function() { return removeProjectDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultProjectDropdown", function() { return createDefaultProjectDropdown; });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");



function render() {
    var mytbl = document.getElementById("myTable");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;

    let activeTab;
    let checkboxTab;

    if (document.getElementById('incomplete').classList.contains("active")) {
        activeTab = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].todolist;
        checkboxTab = "incomplete";
    }
    else if (document.getElementById('complete').classList.contains("active")) {
        activeTab = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].completed;
        checkboxTab = "completed";
    }

    else if (document.getElementById('allTodos').classList.contains("active")) {
        checkboxTab = "allIncomplete";
        activeTab = [];
        for (let i = 0; i < _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].length; i++) {
           activeTab = activeTab.concat(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][i].todolist);
           
          //   for (let e = 0; e < createdProjects[i].todolist.length; e++) {
             //   activeTab.push(createdProjects[i][e]);
            // }
        }
        console.log(activeTab);
        
    }

    for (let prop in activeTab) {

        let count = 0;
        

        if (activeTab.hasOwnProperty(prop)) {

            console.log(activeTab[prop]); 

            count++;

            let table = document.getElementById("myTable");
            let row = table.insertRow(count);
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "checkbox";
            checkbox.value = checkboxTab;
            checkbox.id = activeTab[prop].project + "/" + activeTab[prop].itemId;
            row.insertCell(0).appendChild(checkbox);
            row.insertCell(1).innerHTML = activeTab[prop].name;
            row.insertCell(2).innerHTML = activeTab[prop].description;
            row.insertCell(3).innerHTML = activeTab[prop].dueDate;
            row.insertCell(4).innerHTML = activeTab[prop].priority;
        }
    }

    displayOptions();


}




    const option = document.getElementById('projects')
    // option.getElementsByTagName("option")[0].innerHTML = "";
    
    // var element = option.getElementsByTagName("option"), index;
    
    // for (index = element.length - 1; index >= 0; index--) {
    //    element[index].parentNode.removeChild(element[index]);
    // }
 
    function removeProjectDropdown() {
    
    var selectobject = document.getElementById("projects");
for (var i=0; i<selectobject.length; i++) {
   // console.log(createdProjects[obj].id);
    if (selectobject.options[i].value == _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].id)
        selectobject.remove(i);
}

    };


    console.log(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"]);
    
        let count = 0;
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"].forEach(proj => {
        let opt = document.createElement('option')
        opt.innerHTML = proj.title
        
        console.log(proj.id);
        opt.setAttribute('value', proj.id)
        option.appendChild(opt)
        count++;
    })

    
function createDefaultProjectDropdown() {

    let opt = document.createElement('option');
    opt.innerHTML = _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][0].title;
    opt.setAttribute('value', _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][0].id)
    option.appendChild(opt)

    
}


document.getElementById("addproject").addEventListener("click", function() {
    document.getElementById('addproject').style.display = 'none';
    document.getElementById('myText').style.display = 'inline';
    document.getElementById('myText').focus();
    document.getElementById('submitAddProject').style.display = 'inline';
});



function submitAddProjectNull() {

    Object(_projectController_js__WEBPACK_IMPORTED_MODULE_0__["createProject"])(document.getElementById('myText').value);

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
    _projectController_js__WEBPACK_IMPORTED_MODULE_0__["createdProjects"][_projectController_js__WEBPACK_IMPORTED_MODULE_0__["obj"]].todolist.unshift(new _projectController_js__WEBPACK_IMPORTED_MODULE_0__["ToDo"](document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('priority').value));
    render();
})

function displayOptions() {
let checkboxes = document.querySelectorAll("input[name=checkbox]");
let checkedCount = 0;
for (var i = 0; i < checkboxes.length; i++) {
    let thisCheckbox = checkboxes[i];
    thisCheckbox.addEventListener('change', function() {
        if (this.checked) {
            if(this.value === "incomplete") {
                checkedCount++;
                document.getElementById("delete").style.display = "inline";
                document.getElementById("markDone").style.display = "inline";
            }
            else if(this.value === "completed") {
                checkedCount++;
                document.getElementById("undo").style.display = "inline";
                document.getElementById("delete").style.display = "inline";
            }

            else if(this.value === "allIncomplete") {
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
            // console.log("it's unchecked");
        }
    
    });
}
};

(function activeLink() {
    var complete = document.getElementById('complete')
    var allTodos = document.getElementById('allTodos')
    var incomplete = document.getElementById('incomplete')
    document.getElementById('links').addEventListener('click', function(e) {
        complete.classList.remove("active");
        allTodos.classList.remove("active");
        incomplete.classList.remove("active");
        e.target.classList.add("active");
        document.getElementById("delete").style.display = "none";
        document.getElementById("markDone").style.display = "none";
        document.getElementById("undo").style.display = "none";
        render();
    })
}())

document.getElementById('addtodo').addEventListener('click', function() {
    document.getElementById('newTodo').style.display = 'block'
})




/***/ })

/******/ });
//# sourceMappingURL=main.js.map