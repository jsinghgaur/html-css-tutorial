function validate(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    if(username=="janmejai" && password=="janmejai"){
        alert("login successful");
        return false;
    }
    else{
        alert("login failed");
    }
} f