//add task with a check box (and a br)
var newCheck = document.createElement("input");
newCheck.setAttribute("type", "checkbox")
newCheck.setAttribute("value", "finished")

var newTask = document.createElement("label");
var node = document.createTextNode("This is new.");
newTask.appendChild(node);

var newBreak = document.createElement("br");

var element = document.getElementById("topLeft");
element.appendChild(newCheck);
element.appendChild(newTask);
element.append(newBreak);




