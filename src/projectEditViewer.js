import { createdProjects } from "./projectController.js";
import { updateLocalstorage } from "./projectController.js";
import { render } from "./projectListViewer.js";

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
    for (let y = 0; y < createdProjects.length; y++) {
      if (createdProjects[y].title.replace(/ /g, "_") === projTitle) {
        obj2 = y;
      }
    }

    let modal = document.querySelector(".modal");
    modal.style.display = "block";

    let closeBtn = document.getElementById("close-btn");

    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId) {
        document.getElementById("editTitle").value =
          createdProjects[obj2].todolist[e].name;
        document.getElementById("editDescription").value =
          createdProjects[obj2].todolist[e].description;
        console.log(typeof createdProjects[obj2].todolist[e].priority);
        document.getElementById("button1Modal").classList.add("blanko");
        document.getElementById("button0Modal").classList.add("blanko");
        document.getElementById("button2Modal").classList.add("blanko");
        document.getElementById("button3Modal").classList.add("blanko");
        if (createdProjects[obj2].todolist[e].priority === 1) {
          newPriority = 1;
          document.getElementById("button1Modal").classList.remove("blanko");
        } else if (createdProjects[obj2].todolist[e].priority === 2) {
          newPriority = 2;
          document.getElementById("button2Modal").classList.remove("blanko");
        } else if (createdProjects[obj2].todolist[e].priority === 0) {
          newPriority = 0;
          document.getElementById("button0Modal").classList.remove("blanko");
        } else if (createdProjects[obj2].todolist[e].priority === 3) {
          newPriority = 3;
          document.getElementById("button3Modal").classList.remove("blanko");
        }
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
      } else if (event.target.id === "button0Modal") {
        newPriority = 0;
      }
      
      // else if (event.target.classList.contains("fa-pen")) {
      // } else if (event.target.id === "editDueDate") {
      // } else {
      //   // newPriority = 0;
      //   // document.getElementById("button0Modal").classList.remove("blanko");
      // }
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
    for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
      if (createdProjects[obj2].todolist[e].itemId == itemId) {
        createdProjects[obj2].todolist[e].name = document.getElementById(
          "editTitle"
        ).value;
        createdProjects[obj2].todolist[e].description = document.getElementById(
          "editDescription"
        ).value;

        createdProjects[obj2].todolist[e].priority = newPriority;

        createdProjects[obj2].todolist[e].dueDate = document.getElementById(
          "editDueDate"
        ).value;
      }
    }
    document.getElementById("button0Modal").classList.add("blanko");
    document.getElementById("button1Modal").classList.add("blanko");
    document.getElementById("button2Modal").classList.add("blanko");
    document.getElementById("button3Modal").classList.add("blanko");
    render();
    updateLocalstorage();
    document.querySelector(".modal").style.display = "none";
  });
}

export { editButton };
