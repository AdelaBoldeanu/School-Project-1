function passWord() {
    var pass1 = prompt('Please Enter Your Password',' ');
    while(pass1 != "student"){
    var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    return "";
}