function submitForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let Age = document.getElementById("age_1").value;
  let male = document.getElementById("gender-1").value;
  let female = document.getElementById("gender-2").value;
  let location = document.getElementById("location").value;
  let restrict = document.getElementsByClassName("checkBox1").checked;
  
  
  alert("First Name : "+firstName+"\nLast Name : "+lastName+"\nAge : "+Age+"\nGender : "+male+"\nLocation : "+location+"\nDietary Restriction : "+restrict)

  }
 
  // function printChecked(){
	// 	var items=document.getElementsByName('acs');
	// 	var selectedItems="";
	// 	for(var i=0; i<items.length; i++){
	// 		if(items[i].type=='checkbox' && items[i].checked==true)
	// 			selectedItems+=items[i].value+"\n";
	// 	}
	// 	alert(selectedItems);
 
  
  // function showValue(){
  //   let show1 = document.getElementById("kosher").value;
  // }