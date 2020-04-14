import { render, submitAddProjectNull, removeProjectDropdown, createDefaultProjectDropdown } from './projectViewer.js'
import { format } from 'date-fns';
let obj = 0;

function storeProjects(){
    let projects;
    if(localStorage.getItem('projects')){
        projects = JSON.parse(localStorage.getItem('projects'))
    } else {
        projects = []
    }
    return projects;
}

// const projects = storeProjects()
class Project {
    constructor(title) {
        this.title = title;
        this.todolist = [];
        this.completed = [];
        this.id = title;
    }
}

console.log(storeProjects()[4]);

let createdProjects = storeProjects();

console.log(storeProjects());

function createProject(title) {
    createdProjects.push(new Project(title))
    localStorage.setItem('projects', JSON.stringify(createdProjects))
    return createdProjects
}

console.log(storeProjects());
if(createdProjects.length === 0) {

    console.log("yes");

createProject('Default_New');
createProject('Family Stuff');



{
    obj = 0;
    createdProjects[obj].todolist.unshift({ name: "Homework", description: "English homework", dueDate: "01-01-2021", priority: "2", itemId: 1, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Cleaning", description: "Clean my room", dueDate: "01-01-2021", priority: "1", itemId: 2, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Washing dishes", description: "Washing dishes from previous day", dueDate: "01-01-2021", priority: "1", itemId: 3, project: obj });

    obj = 1;
    createdProjects[obj].todolist.unshift({ name: "Help Mum", description: "some stuff", dueDate: "01-01-2021", priority: "3", itemId: 1, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Help Grandpa", description: "more stuff", dueDate: "01-01-2021", priority: "2", itemId: 2, project: obj });
    createdProjects[obj].todolist.unshift({ name: "Go to work", description: "finish my work", dueDate: "01-01-2021", priority: "2", itemId: 3, project: obj });
}

updateLocalstorage(); 

}

obj = 0;

document.getElementById("projects").addEventListener("change", (event) => {
    console.log(event.target.value);
    console.log(document.getElementById("projects"));
    for(let e = 0; e < createdProjects.length; e++) {
        if (createdProjects[e].title === event.target.value) {
            obj = e;
        }
    }
    render();
});




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
    submitAddProjectNull();
    obj = document.getElementById('projects').options.length - 1;

    render();

});

document.getElementById('deleteproject').addEventListener("click", function() {
    removeProjectDropdown();
    createdProjects.splice(obj, 1);
    obj = 0;

    console.log("createdProjects length: " + createdProjects.length);
    if (createdProjects.length === 0) {
        createProject('Test');
        createDefaultProjectDropdown();
        obj = 0;

    }

    updateLocalstorage();

    render();
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

    updateLocalstorage();

    render();
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
    updateLocalstorage();
    render();

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

    updateLocalstorage();
    render();
    // checkboxes.forEach()
    //  for(let i = 0; i < createdProjects.length; i++){
    //    for(let j = 0; j < createdProjects[i].todolist.length; j++){

    //  }
    // }
})

function updateLocalstorage() {
    localStorage.setItem('projects', JSON.stringify(createdProjects))
}

export { Project, createProject, createdProjects, obj, ToDo, updateLocalstorage }