//Header
var h1 = document.createElement('h1');
var content = document.createTextNode('Welcome to my JS site');
h1.appendChild(content);
document.body.appendChild(h1);

//Paragraph Tag
var para = document.createElement("p");
var node = document.createTextNode("All of this was created with Javascript");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);


//List
function createListItem(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
// get the ul#menu
const menu = document.querySelector('#list');
// add menu item
menu.appendChild(createListItem('Home'));
menu.appendChild(createListItem('Services'));
menu.appendChild(createListItem('About Us'));