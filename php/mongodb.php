<?php

header('Access-Control-Allow-Origin: *');

require '../vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");

$profiledb = $client -> profiledb;

$userCollection = $profiledb -> usersProfile;

$insertOneResult = $userCollection->insertOne(
    ['username'=>$_GET["username"],
    'password'=>$_GET["password"],
    'phoneNumber'=>$_GET["phoneNumber"],
    'email'=>$_GET["email"],
    'firstname'=>null,
    'lastname'=>null,
    'dob'=>null,
    ]
);

printf("Inserted %d documents\n",$insertOneResult->getInsertedCount());
var_dump($insertOneResult->getInsertedId());

?>