import { obj } from './projectController.js'
import { createdProjects, createProject, ToDo, projects, updateLocalstorage } from './projectController.js'

let selectedPriority = 0;

document.getElementById("button1").addEventListener("click", function () {
    if (document.getElementById("button1").style.border === '5px solid green') {
        selectedPriority = 0;
        document.getElementById("button1").style.border = '5px solid white'
    } else {
        document.getElementById("button2").style.border = '5px solid white'
        document.getElementById("button3").style.border = '5px solid white'
        document.getElementById("button1").style.border = '5px solid green';
        selectedPriority = 1;
    }
    // document.getElementById("button1").style.borderWidth = '5px';
})

document.getElementById("button2").addEventListener("click", function () {
    if (document.getElementById("button2").style.border === '5px solid yellow') {
        selectedPriority = 0;
        document.getElementById("button2").style.border = '5px solid white'
    } else {
        document.getElementById("button1").style.border = '5px solid white'
        document.getElementById("button3").style.border = '5px solid white'
        document.getElementById("button2").style.border = '5px solid yellow';
        selectedPriority = 2;
    }
    // document.getElementById("button2").style.borderWidth = '5px';
})

document.getElementById("button3").addEventListener("click", function () {
    if (document.getElementById("button3").style.border === '5px solid red') {
        selectedPriority = 0;
        document.getElementById("button3").style.border = '5px solid white'
    } else {
        document.getElementById("button1").style.border = '5px solid white'
        document.getElementById("button2").style.border = '5px solid white'
        document.getElementById("button3").style.border = '5px solid red';
        selectedPriority = 3;
    }
    // document.getElementById("button3").style.borderWidth = '5px';
})


function render() {

    var mytbl = document.getElementById("myTable");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;

    let activeTab;
    let checkboxTab;

    if (document.getElementById('incomplete').classList.contains("active")) {
        activeTab = createdProjects[obj].todolist;
        checkboxTab = "incomplete";
    } else if (document.getElementById('complete').classList.contains("active")) {
        activeTab = createdProjects[obj].completed;
        checkboxTab = "completed";
    } else if (document.getElementById('allTodos').classList.contains("active")) {
        checkboxTab = "allIncomplete";
        activeTab = [];
        for (let i = 0; i < createdProjects.length; i++) {
            activeTab = activeTab.concat(createdProjects[i].todolist);

            //   for (let e = 0; e < createdProjects[i].todolist.length; e++) {
            //   activeTab.push(createdProjects[i][e]);
            // }
        }
        console.log(activeTab);

    }

    let count = 0;

    for (let prop in activeTab) {





        if (activeTab.hasOwnProperty(prop)) {

            // console.log(activeTab[prop]); 

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
            row.insertCell(2).innerHTML = activeTab[prop].dueDate;
            if (activeTab[prop].priority == 1) {
                row.style.backgroundColor = 'green'
            } else if (activeTab[prop].priority == 2) {
                row.style.backgroundColor = 'yellow'
            } else if (activeTab[prop].priority == 3) {
                row.style.backgroundColor = 'red'
            }
            count++;
            let row2 = table.insertRow(count);
            let edit = "editButton" + count;
            let editSave = document.getElementById("saveEdit");
            row2.insertCell(0).innerHTML = "<strong> Description: </strong>" + activeTab[prop].description + " " + `<input type="button" id="editButton${count}" value="Edit">`
            row2.style.display = 'none';
            // document.getElementById(save).style.display = "none";
            

            document.getElementById(edit).addEventListener('click', function () {
                activeEditToDo = this.id;
                // this.style.display = "none";
                console.log(this.id);
                let str = this.id;
                let itemId = str.match(/\d+$/);


                let modal = document.querySelector(".modal")

                modal.style.display = "block"

                let closeBtn = document.getElementById("close-btn");

                console.log(document.getElementById("myTable").childNodes[1].childNodes[itemId-1].childNodes[0].childNodes[0].id);
        

                let str2 = document.getElementById("myTable").childNodes[1].childNodes[itemId-1].childNodes[0].childNodes[0].id;
                let obj2 = str2.match(/^\d+/);
                let itemId2 = str2.match(/\d+$/);
                console.log(createdProjects[obj2].todolist[3]);

                // hat itemId 3 aber das heisst nicht, dass es die dritte Position im Array ist.


                for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
                    if (createdProjects[obj2].todolist[e].itemId == itemId2) {


                document.getElementById("editTitle").value = createdProjects[obj2].todolist[e].name;
                document.getElementById("editDescription").value = createdProjects[obj2].todolist[e].description;
                document.getElementById("editPriority").value = createdProjects[obj2].todolist[e].priority;
                document.getElementById("editDueDate").value = createdProjects[obj2].todolist[e].dueDate;
                    }
                }

                closeBtn.onclick = function () {
                    modal.style.display = "none"
                }
                window.onclick = function (e) {
                    if (e.target == modal) {
                        modal.style.display = "none"
                    }
                }
            })

            editSave.addEventListener('click', function () {
           
                let str = activeEditToDo;
                let itemId = str.match(/\d+$/);
                
                let str2 = document.getElementById("myTable").childNodes[1].childNodes[itemId-1].childNodes[0].childNodes[0].id;
                let obj2 = str2.match(/^\d+/);
                let itemId2 = str2.match(/\d+$/);
    
                for (let e = 0; e < createdProjects[obj2].todolist.length; e++) {
                    if (createdProjects[obj2].todolist[e].itemId == itemId2) {


                createdProjects[obj2].todolist[e].name = document.getElementById("editTitle").value;
                createdProjects[obj2].todolist[e].description = document.getElementById("editDescription").value;
                createdProjects[obj2].todolist[e].priority = document.getElementById("editPriority").value;
                createdProjects[obj2].todolist[e].dueDate = document.getElementById("editDueDate").value;
                    }
                }

                render();
                document.querySelector(".modal").style.display = "none";




            })

            // row.insertCell(4).innerHTML = activeTab[prop].priority;
            row.addEventListener("click", function () {

                // console.log(row);
                // console.log(document.getElementById("myTable").childNodes[1].childNodes[0]);
                for (let x = 0; x < document.getElementById("myTable").childNodes[1].children.length; x++) {
                    //     console.log(this);
                    if (table.childNodes[1].childNodes[x] == this) {
                        //         let row = table.insertRow(x+1);
                        //         console.log("test");
                        //         row.insertCell(0).innerHTML = "<div id='test'><br/><br/> <strong>" + "Description: " + "</strong>" + activeTab[prop].description + "</div";
                        if (document.getElementById("myTable").childNodes[1].childNodes[x + 1].style.display === "inline")
                            document.getElementById("myTable").childNodes[1].childNodes[x + 1].style.display = "none";
                        else {
                            document.getElementById("myTable").childNodes[1].childNodes[x + 1].style.display = "inline";
                        }
                        return;
                    }
                }
                // console.log(this.innerHTML);
                // let newCount = count;
                // newCount++;
                // console.log(newCount)
                // // let paragraph = document.createElement('p')
                //   console.log(activeTab[prop].description);


            });
        }
    }

    displayOptions();
    // localStorage.setItem('projects', createdProjects)


}


let activeEditToDo;





const option = document.getElementById('projects')
// option.getElementsByTagName("option")[0].innerHTML = "";

// var element = option.getElementsByTagName("option"), index;

// for (index = element.length - 1; index >= 0; index--) {
//    element[index].parentNode.removeChild(element[index]);
// }

function removeProjectDropdown() {

    var selectobject = document.getElementById("projects");
    for (var i = 0; i < selectobject.length; i++) {
        // console.log(createdProjects[obj].id);
        if (selectobject.options[i].value == createdProjects[obj].title)
            selectobject.remove(i);
    }

};


console.log(createdProjects);

let count = 0;
createdProjects.forEach(proj => {
    let opt = document.createElement('option')
    opt.innerHTML = proj.title
    console.log(createdProjects);
    opt.setAttribute('value', proj.title)
    option.appendChild(opt)
    count++;
})


function createDefaultProjectDropdown() {

    let opt = document.createElement('option');
    opt.innerHTML = createdProjects[0].title;
    opt.setAttribute('value', createdProjects[0].title)
    option.appendChild(opt)


}


document.getElementById("addproject").addEventListener("click", function () {
    document.getElementById('addproject').style.display = 'none';
    document.getElementById('myText').style.display = 'inline';
    document.getElementById('myText').focus();
    document.getElementById('submitAddProject').style.display = 'inline';
});



function submitAddProjectNull() {

    console.log(document.getElementById('myText').value);
    createProject(document.getElementById('myText').value);
    
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
    
    // localStorage.setItem('projects', JSON.stringify(createdProjects))
    
};

document.getElementById('submitAddTodo').addEventListener('click', function () {
    document.getElementById('newTodo').style.display = 'none'
    createdProjects[obj].todolist.unshift(new ToDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, selectedPriority));
    updateLocalstorage();
    render();
})

function displayOptions() {
    let checkboxes = document.querySelectorAll("input[name=checkbox]");
    let checkedCount = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        let thisCheckbox = checkboxes[i];
        thisCheckbox.addEventListener('change', function () {
            if (this.checked) {
                if (this.value === "incomplete") {
                    checkedCount++;
                    document.getElementById("delete").style.display = "inline";
                    document.getElementById("markDone").style.display = "inline";
                } else if (this.value === "completed") {
                    checkedCount++;
                    document.getElementById("undo").style.display = "inline";
                    document.getElementById("delete").style.display = "inline";
                } else if (this.value === "allIncomplete") {
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
    document.getElementById('links').addEventListener('click', function (e) {
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

document.getElementById('addtodo').addEventListener('click', function () {
    document.getElementById('newTodo').style.display = 'block'
})

// let modalBtn = document.getElementById("modal-btn")
// let modal = document.querySelector(".modal")let closeBtn = document.querySelector(".close-btn")modalBtn.onclick = function(){
//     modal.style.display = "block"
//   }closeBtn.onclick = function(){
//     modal.style.display = "none"
//   }window.onclick = function(e){
//     if(e.target == modal){
//       modal.style.display = "none"
//     }
//   }


export { render, submitAddProjectNull, removeProjectDropdown, createDefaultProjectDropdown }