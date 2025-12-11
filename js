// script.js
document.getElementById("year").textContent = new Date().getFullYear();


function submitForm(){
const name = document.getElementById("name").value;
const msg = document.getElementById("msg");
if(name.trim()===""){
msg.textContent = "Please enter your name.";
return;
}
msg.textContent = "Thanks, " + name + "!";
}