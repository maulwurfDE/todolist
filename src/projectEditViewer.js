import { createdProjects } from "./projectController.js";
import { updateLocalstorage } from "./projectController.js";
import { render } from "./projectListViewer.js";

let activeEditToDo;
let obj2;
let itemId;

function editButton(edit) {
  document.getElementById(edit).addEventListener("click", function () {
    activeEditToDo = this.id;
    // this.style.display = "none";
    console.log(activeEditToDo);
    let itemId2;
    let str = this.id;
    itemId = str.match(/![\d\D]+$/);
    itemId = JSON.stringify(itemId);
    itemId = itemId.substring(3);
    itemId = itemId.substring(0, itemId.length - 2);
    console.log(itemId);

    let projTitle = str.match(/\/[\d\D]+!/);
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

    //   console.log(
    //    document.getElementById("render").childNodes[itemId].childNodes[2].id
    //  );
    let modal = document.querySelector(".modal");

    modal.style.display = "block";

    let closeBtn = document.getElementById("close-btn");

    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId) {
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
    //    let itemId = str.match(/\d+$/);

    //    let str2 = document.getElementById("render").childNodes[itemId].childNodes[2].id;

    // let obj2 = str2.match(/\B\d+/);
    //   let itemId2 = str2.match(/\d+$/);

    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId) {
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
