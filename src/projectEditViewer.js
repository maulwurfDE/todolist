import { createdProjects } from "./projectController.js";
import { updateLocalstorage } from "./projectController.js";
import { render } from "./projectListViewer.js";

let activeEditToDo;

function editButton(edit) {
  document.getElementById(edit).addEventListener("click", function () {
    console.log(this);
    activeEditToDo = this.id;
    // this.style.display = "none";
    let obj2;
    let itemId2;
    console.log(activeEditToDo);
    console.log(activeEditToDo);
    console.log(activeEditToDo);
    let str = this.id;
    let itemId = str.match(/\d+$/);

    console.log(
      document.getElementById("render").childNodes[itemId].childNodes[2].id
    );
    let modal = document.querySelector(".modal");

    modal.style.display = "block";

    let closeBtn = document.getElementById("close-btn");
    let str2 = document.getElementById("render").childNodes[itemId]
      .childNodes[2].id;
    console.log(str2);
    let projTitle = str2.match(/\/[\d\D]+!/);
    projTitle = JSON.stringify(projTitle);
    projTitle = projTitle.substring(3);
    projTitle = projTitle.substring(0, projTitle.length - 3);
    console.log(projTitle);
    for (let y = 0; y < createdProjects.length; y++) {
      if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
        obj2 = y;
        console.log("success " + obj2);
      }
    }

    itemId2 = str2.match(/![\d\D]+$/);
    itemId2 = JSON.stringify(itemId2);
    itemId2 = itemId2.substring(3);
    itemId2 = itemId2.substring(0, itemId2.length - 2);
    console.log(itemId2);

    // hat itemId 3 aber das heisst nicht, dass es die dritte Position im Array ist.

    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId2) {
        document.getElementById("editTitle").value =
          createdProjects[obj2].todolist[e].name;
        document.getElementById("editDescription").value =
          createdProjects[obj2].todolist[e].description;
        document.getElementById("editPriority").value =
          createdProjects[obj2].todolist[e].priority;
        document.getElementById("editDueDate").value =
          createdProjects[obj2].todolist[e].dueDate;
        updateLocalstorage();
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
  });

  let editSave = document.getElementById("saveEdit");
  editSave.addEventListener("click", function () {
    console.log(this);
    let str = activeEditToDo;
    console.log(activeEditToDo);
    let itemId = str.match(/\d+$/);

    let str2 = document.getElementById("render").childNodes[itemId]
      .childNodes[2].id;
    console.log(
      document.getElementById("render").childNodes[itemId].childNodes[2].id
    );
    let obj2 = str2.match(/\B\d+/);
    let itemId2 = str2.match(/\d+$/);

    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId2) {
        createdProjects[obj2].todolist[e].name = document.getElementById(
          "editTitle"
        ).value;
        createdProjects[obj2].todolist[e].description = document.getElementById(
          "editDescription"
        ).value;
        createdProjects[obj2].todolist[e].priority = document.getElementById(
          "editPriority"
        ).value;
        createdProjects[obj2].todolist[e].dueDate = document.getElementById(
          "editDueDate"
        ).value;
      }
    }
    render();
    updateLocalstorage();
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal").style.display = "none";
  });
}

export { editButton };
