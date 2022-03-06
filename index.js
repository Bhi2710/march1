function validation(){
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirm_password').value;

    if(password == confirmpassword){
        document.write("Password match.👍")    
    }
    else if(password != confirmpassword){
        document.write("Incorrect Password.👎")
    }
    else if(password == ""){
        document.write("Not Same")
    }
    else{
        document.write("wrong password")
    }

}