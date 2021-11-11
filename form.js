var email= document.getElementById("inputEmail4");
var error= document.getElementById("error");
function validate(){
    var regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/

if(regexp.test(email.value)){
    error.innerHTML =""
    return true;
}
else{
    error.innerHTML ="Invalid email";
    error.style.color="red";
    return false;
}
}
var phno= document.getElementById("phno1");
var error1= document.getElementById("error1");
function phvalidate(){

    var regexp1= /^[0-9]{10}$/
    var regexp2= /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
    var regexp3= /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/
    var regexp4= /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/

if(regexp1.test(phno.value)||regexp2.test(phno.value)||regexp3.test(phno.value)||regexp4.test(phno.value)){
    error.innerHTML =""
    return true;
}
else{
    error1.innerHTML ="Invalid phone number";
    error1.style.color="red";
    return false;
}
}


 function password(){
    var passw1=document.getElementById("exampleInputPassword1");
    var pass=document.getElementById("pass");
    
    
    var regexp1=/^[a-z]{8,20}$/
    var regexp2=/^([a-zA-z]{8,20})$/
    var regexp3=/^([a-zA-Z0-9]{8,20})$/
    
    if(regexp1.test(passw1.value))
    {
    pass.innerHTML="Poor password";
    pass.style.color="red";
    return false;
    }
    else if(regexp2.test(passw1.value))
    {
    pass.innerHTML="Average password";
    pass.style.color="orange";
    return false;
    
    } 
    else if(regexp3.test(passw1.value))
    {
        pass.innerHTML="Strong password";
        pass.style.color="green";
        return true;
    }
    else
    {
    pass.innerHTML="poor password";
    pass.style.color="red";
     return false;
    }
}
