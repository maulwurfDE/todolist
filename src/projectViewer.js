import { obj } from './projectController.js'
import { createdProjects, createProject, ToDo } from './projectController.js'

function render() {
    var mytbl = document.getElementById("myTable");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;

    let activeTab;
    let checkboxTab;

    if (document.getElementById('incomplete').classList.contains("active")) {
        activeTab = createdProjects[obj].todolist;
        checkboxTab = "incomplete";
    }
    else if (document.getElementById('complete').classList.contains("active")) {
        activeTab = createdProjects[obj].completed;
        checkboxTab = "completed";
    }

    else if (document.getElementById('allTodos').classList.contains("active")) {
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
    if (selectobject.options[i].value == createdProjects[obj].id)
        selectobject.remove(i);
}

    };


    console.log(createdProjects);
    
        let count = 0;
    createdProjects.forEach(proj => {
        let opt = document.createElement('option')
        opt.innerHTML = proj.title
        
        console.log(proj.id);
        opt.setAttribute('value', proj.id)
        option.appendChild(opt)
        count++;
    })

    
function createDefaultProjectDropdown() {

    let opt = document.createElement('option');
    opt.innerHTML = createdProjects[0].title;
    opt.setAttribute('value', createdProjects[0].id)
    option.appendChild(opt)

    
}


document.getElementById("addproject").addEventListener("click", function() {
    document.getElementById('addproject').style.display = 'none';
    document.getElementById('myText').style.display = 'inline';
    document.getElementById('myText').focus();
    document.getElementById('submitAddProject').style.display = 'inline';
});



function submitAddProjectNull() {

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


};

document.getElementById('submitAddTodo').addEventListener('click', function() {
    document.getElementById('newTodo').style.display = 'none'
    createdProjects[obj].todolist.unshift(new ToDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('priority').value));
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


export { render, submitAddProjectNull, removeProjectDropdown, createDefaultProjectDropdown }