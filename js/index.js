function Redirect(){
    var len = localStorage.length;

    if(len==2){
        window.location.replace("./profile.html");   
    }
    else{
        window.location.replace("./login.html");
    }
}