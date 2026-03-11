// data store
let users = [];

// form submit
document.getElementById("registrationForm").onsubmit = function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

let attendance = document.querySelector('input[name="attendance"]:checked');

// simple validation
if(name.length < 6){
alert("Name must be at least 6 characters");
return;
}

if(email.indexOf("@") == -1){
alert("Invalid Email");
return;
}

if(attendance == null){
alert("Select attendance type");
return;
}

// store data
users.push(attendance.value);

alert("Registration Done");

}
document.getElementById("analyticsBtn").onclick = function(){

let virtual = 0;
let inperson = 0;

for(let i=0;i<users.length;i++){

if(users[i] == "Virtual"){
virtual++;
}else{
inperson++;
}

}

alert(
"Total: " + users.length +
"\nVirtual: " + virtual +
"\nInPerson: " + inperson
);

}