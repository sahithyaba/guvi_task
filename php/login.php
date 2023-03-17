<?php

    session_start();
    // connect to the MySQL database
    $mysqli = new mysqli("localhost", "root", "1234", "users_details",3307);
    
    // check for errors
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }
    echo "Connected successfully";

    // $error = array();
    // $res = array();

    // // retriving contents of the table
    $statement = mysqli_prepare($mysqli,"select * from registered_users where username = ?");
    mysqli_stmt_bind_param($statement,"s",$username);

    $result = mysqli_query($mysqli,"select * from registered_users where username = '".$username."'");

    $count = mysqli_num_rows($result);

    echo $count;
    if ($count>=0) {
        // $resp['redirect'] = 'profile.php';
        $resp['status'] = true;
        echo json_encode($resp);        
        exit;

    } else {
        // $error[] = "Invalid Username or Password";
        // $resp['msg'] = $error;
        $resp['status'] = false;
        echo json_encode($resp);
        exit;
    }

    // create a Redis instance for session storage
    $redis = new Redis();
    $redis->connect('localhost', 6379);

    // generate a unique session ID and store it in Redis
    $sessionId = uniqid();
    $redis->setex('session:' . $sessionId, 3600, $user['username']);

    // return the session ID to the client
    echo json_encode(array('sessionId' => $sessionId));
?>