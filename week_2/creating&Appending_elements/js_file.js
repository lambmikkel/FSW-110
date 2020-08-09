//Header
var h1 = document.createElement('h1');
var content = document.createTextNode('Welcome to my JS site');
h1.appendChild(content);
document.body.appendChild(h1);

var newLi = document.createElement("li");
var myList = document.getElementById("my_list");
myList.append(newLi);


