<?php

// Establish Database connection
$mysqli = new mysqli("localhost", "root", "1234", "users_details",3307);
    
// check for errors
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

var_dump($_POST);

if (isset($_POST['username'])) {
    $username = $_POST["username"];
 }
 else{
    echo "Username not found";
 }

 if (isset($_POST['password'])) {
    $password = $_POST["password"];
 }
 else{
    echo "Password not found";
 }

// $username = isset( $_POST["username"] ) ? $_POST["username"] : "hi" ;
// $password = isset( $_POST["password"] ) ? $_POST["password"] : "hi" ;

// Check form data
var_dump($username,$password);

// Prepare and execute Insert statement
$stmt = mysqli_prepare($mysqli, "INSERT INTO registered_users(username,password) VALUES(?,?)");

mysqli_stmt_bind_param($stmt,"ss",$username,$password);

if(mysqli_stmt_execute($stmt)){
    echo "User Registered Successfully!";
}
else{
    echo "Error: ".mysqli_error($conn);
}

// Close statement and connection

mysqli_stmt_close($stmt);
mysqli_close($mysqli);
?>