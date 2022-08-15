// validation code for inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventlistner('textInput', email_Verify);
password.addEventlistner('textInput', password_Verify);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red"
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red"
        password_error.style.display = "block";
        password.focus();
        return false;
    }
} 
function email_Verify(){
    if(email.value.length >= 8){
    email.style.border = "1px solid green"
        email_error.style.display = "none";
        return true;
    }
}

function password_Verify(){
    if(password.value.length >= 6){
        password.style.border = "1px solid green"
        password_error.style.display = "none";
        return true;
    }
}