function displayProfile()
{
    var username=localStorage.getItem("username");


    $.ajax({
        type: "GET",
        url: "http://localhost/Guvi/php/profile.php",
        data: {
            username: username
        },
        success: function(data)
        {
            console.log(data);
            if(data.firstname!=null) document.getElementById("firstname").value=data.firstname;
            if(data.lastname!=null) document.getElementById("lastname").value=data.lastname;
            document.getElementById("username").value=data.username;
            document.getElementById("email").value=data.email;
            document.getElementById("phonenumber").value=data.phoneNumber;
            document.getElementById("password").value=data.password;
            if(data.dob!=null) document.getElementById("dob").value=data.dob;
        },
        error: function(xhr, status, error)
        {
            console.log(error);
        },
    });

    document.getElementById("username").value=username;
    document.getElementById("password").value=password;
}

function updateData(e)
{
    e.preventDefault();

    var username=$("input[id='username']").val();
    var firstname=$("input[id='firstname']").val();
    var lastname=$("input[id='lastname']").val();
    var password=$("input[id='password']").val();
    var email=$("input[id='email']").val();
    var phoneNumber=$("input[id='phonenumber']").val();
    var dob=$("input[id='dob']").val();

    $.ajax({
        type: "GET",
        url: "http://localhost/Guvi/php/updateProfile.php",
        data: {
            firstname: firstname,
            lastname:lastname,
            username: username,
            password: password,
            email: email,
            phoneNumber: phoneNumber,
            dob:dob
        },
        success: function(data)
        {
            console.log(data);
            document.getElementById("status-bar").classList.add("activate");
            setTimeout(function()
            {
                document.getElementById("status-bar").classList.remove("activate")
            }, 1000
            );
        },
        error: function(xhr, status, error)
        {
            console.log(error);
        },
    });
}

function clearStorage()
{
    console.log("Cleared");

    // // clear the local storage data
    window.localStorage.clear();

    // // redirect to login page
    window.location.replace("./login.html");

    // localStorage.setItem("username", "Sahithya");
}

// Function Controls 

window.onload=displayProfile();
document.getElementById("profile-form").addEventListener("submit", updateData);

// password reveal

document.getElementById('showMe').addEventListener('click', function()
{
    document.getElementById('showMe').classList.remove("fa-eye-slash");
    document.getElementById('showMe').classList.add("fa-eye");
    document.getElementById('password').type="text";
})