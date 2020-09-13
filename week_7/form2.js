function submitForm() {
  let nameInput = document.getElementById("name1").value;
  let emailInput = document.getElementById("email1").value;
  let messageInput = document.getElementById("message1").value;
  alert(
    "Name : " +
      nameInput +
      "\nE-mail : " +
      emailInput +
      "\nMessage : " +
      messageInput +
      ""
  );
  document.contact - form.submit();
}

function clearText() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// document.getElementById("add").onclick = function() {
//   //First things first, we need our text:
//   var text1 = document.getElementById("name1").value;
//   var text2 = document.getElementById("email1").value;
//   var text3 = document.getElementById("message1").value;
//   var text4 = document.getElementById("submit").value; //.value gets input values

//   //Now construct a quick list element
//   var li = "<li>" + text + "</li>";

//   //Now use appendChild and add it to the list!
//   document.getElementById("list").appendChild(li);
// }
// function total() {
//   var a = document.myForm.name1.value;
//   var b = document.myForm.email1.value;
//   var c = document.myForm.message1.value;
//   var d = document.myForm.submit.value;
//   //alert(a+b+c+d)
//   var display = document.getElementById("display");
//   display.innerHTML = a + b + c + d;
//   alert("display")
// }
