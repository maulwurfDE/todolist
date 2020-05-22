import { obj } from "./projectController.js";
import { createDefaultProjectDropdown } from "./defaultDropdown";
import {
  createdProjects,
  createProject,
  ToDo,
  projects,
  updateLocalstorage,
} from "./projectController.js";
import { editButton } from "./projectEditViewer.js";

function render() {
  document.getElementById("render").innerHTML = "";
  let countListItem = 0;
  let activeTab;
  let checkboxTab;

  if (document.getElementById("incomplete").classList.contains("active")) {
    activeTab = createdProjects[obj].todolist;
    checkboxTab = "incomplete";
  } else if (document.getElementById("complete").classList.contains("active")) {
    activeTab = createdProjects[obj].completed;
    checkboxTab = "completed";
  } else if (document.getElementById("allTodos").classList.contains("active")) {
    checkboxTab = "allIncomplete";
    activeTab = [];
    for (let i = 0; i < createdProjects.length; i++) {
      activeTab = activeTab.concat(createdProjects[i].todolist);
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
      editButton(edit);

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
    if (selectobject.options[i].value == createdProjects[obj].title)
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
  document.getElementById("button0").classList.add("blanko");
  document.getElementById("button1").classList.add("blanko");
  document.getElementById("button2").classList.add("blanko");
  document.getElementById("button3").classList.add("blanko");

  createdProjects[obj].todolist.unshift(
    new ToDo(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      selectedPriority
    )
  );
  updateLocalstorage();
  render();
});

const option = document.getElementById("projects");
let count = 0;
createdProjects.forEach((proj) => {
  let opt = document.createElement("option");
  opt.innerHTML = proj.title;
  opt.setAttribute("value", proj.title);
  option.appendChild(opt);
  count++;
});

function submitAddProjectNull() {
  createProject(document.getElementById("myText").value);

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

export { render, submitAddProjectNull, removeProjectDropdown };
