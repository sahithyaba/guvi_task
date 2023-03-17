// console.log("Fnc Called");
// console.log(localStorage.length);
$(document).ready(function(){
    $("#login-form").submit(function (e){

        e.preventDefault();

        // Retriving the username and password
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        // alert(username);

        $.ajax({
            url: "php/login.php",
            method: "POST",
            data: {
                username: username,
                password: password,
            },
            success: function (resp) {
                // alert(data);
                var res = JSON.stringify(resp);
                var res_status = JSON.parse(res);
                // alert(res_status[33] + "   " +res_status);
                if(res_status[33]=='t'){
                    alert("User Successfully Login");
                    var url = "./profile.html";
                    $(location).attr('href',url);
                }
                else{
                    alert("Invalid Credentials");
                }
                
            },
            error: function(xhr, textStatus, errorThrown){
                console.log(xhr.responseText);
            },
            
        });

    });
});

function storeData(){

    // clear the local storage data
    window.localStorage.clear();

    // storing the current data in local storage
    let username,password;
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;

    localStorage.setItem("username",username)
    localStorage.setItem("password",password)

}