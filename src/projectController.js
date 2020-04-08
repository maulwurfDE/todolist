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

{
    let obj = createdProjects[0];
obj.todolist.unshift({ name: "Homework", description: "English homework", dueDate: "01-01-2021", priority: "2" });
obj.todolist.unshift({ name: "Cleaning", description: "Clean my room", dueDate: "01-01-2021", priority: "1" });
obj.todolist.unshift({ name: "Washing dishes", description: "Washing dishes from previous day", dueDate: "01-01-2021", priority: "1" });

obj = createdProjects[1];
obj.todolist.unshift({ name: "Help Mum", description: "some stuff", dueDate: "01-01-2021", priority: "2" });
obj.todolist.unshift({ name: "Help Grandpa", description: "more stuff", dueDate: "01-01-2021", priority: "1" });
obj.todolist.unshift({ name: "Go to work", description: "finish my work", dueDate: "01-01-2021", priority: "1" });
}


console.log(createdProjects[0])
console.log(createdProjects[1])

document.getElementById("projects").addEventListener("change", (event) => {
    obj = createdProjects[event.target.value];
    render();
});


let obj = createdProjects[0];

class ToDo {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = obj;
        this.itemId = obj.todolist.length;
    }
}


document.getElementById("submitAddProject").addEventListener("click", function() {
    submitAddProjectNull();
    obj = createdProjects[document.getElementById('projects').options.length - 1];
    render();

});

document.getElementById('markDone').addEventListener("click", function() { 
    let checkboxes = document.querySelectorAll("input[name=checkbox]");
    for (var i = 0; i < checkboxes.length; i++) {

if(checkboxes[i].value === "allIncomplete") {

    if (checkboxes[i].checked) {
        obj.completed.push(createdProjects[obj.todolist[checkboxes.length-i-1]]);
        obj.todolist.splice(checkboxes.length-i-1,1);
        console.log(obj.completed);
  //    console.log(obj.completed);
  //    console.log(obj.completed);
  //    console.log(obj.completed);

    }


}

else {
    if (checkboxes[i].checked) {
        obj.completed.push(obj.todolist[checkboxes.length-i-1]);
        obj.todolist.splice(checkboxes.length-i-1,1);
        console.log(obj.completed);

    } else {
        
    }

}
    }
    render();

})

export {Project, createProject, createdProjects, obj, ToDo}
