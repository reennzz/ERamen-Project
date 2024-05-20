var form = document.getElementById("form");
var Name = document.getElementById("names");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var ramen = document.getElementById("ramen");
var dry = document.getElementById("dryramen");
var agree = document.getElementById("agreement");

function checkInputs(){
    if(Name.value.length < 5){
        alert("Name must be at least 5 character");
    }else if(!email.value.endsWith('@gmail.com')){
        alert('Email must end with @gmail.com');
    }else if(phone.value < 2){
        alert("Phone number must only numeric");
    }else if(!ramen.checked && !dry.checked){
        alert("Must select at least 1 preference");
    }else if(!agree.checked){
        alert("Agreement box must be checked");
    }else{
        confirm("Submission Complete");
    }
}
