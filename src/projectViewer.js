import { obj } from './projectController.js'
import { createdProjects, createProject, ToDo } from './projectController.js'

function render() {
    var mytbl = document.getElementById("myTable");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;

    for (let prop in obj) {

        let count = 0;

        if (obj.hasOwnProperty(prop)) {
            count++;

            let table = document.getElementById("myTable");
            let row = table.insertRow(count);
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "checkbox";
            checkbox.value = "value";
            checkbox.id = "checkbox" + count;
            row.insertCell(0).appendChild(checkbox);
            row.insertCell(1).innerHTML = obj[prop].name;
            row.insertCell(2).innerHTML = obj[prop].description;
            row.insertCell(3).innerHTML = obj[prop].dueDate;
            row.insertCell(4).innerHTML = obj[prop].priority;
        }
    }
}

const option = document.getElementById('projects')
let count = 0;
createdProjects.forEach(project => {
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

    createProject(document.getElementById('myText').value);
    console.log(createdProjects);

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
    obj.unshift(new ToDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('priority').value));
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



export { render, submitAddProjectNull }