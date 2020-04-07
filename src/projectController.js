import { render, submitAddProjectNull } from './projectViewer.js'

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
    render();
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
    submitAddProjectNull();
    obj = createdProjects[document.getElementById('projects').options.length - 1].todolist;
    render();

});

export {Project, createProject, createdProjects, obj, ToDo}