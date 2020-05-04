import { createdProjects } from "./projectController.js";

function createDefaultProjectDropdown() {
  const option = document.getElementById("projects");
  option.innerHTML = "";
  let opt = document.createElement("option");
  opt.innerHTML = createdProjects[0].title;
  opt.setAttribute("value", createdProjects[0].title);
  option.appendChild(opt);
}

export { createDefaultProjectDropdown };
