<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = ""; // default XAMPP password is empty
$database = "hogwarts_bookstore";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data and sanitize
$firstname = $conn->real_escape_string($_POST['signup-firstname']);
$lastname = $conn->real_escape_string($_POST['signup-lastname']);
$gender = $conn->real_escape_string($_POST['signup-gender']);
$age = (int)$_POST['signup-age'];
$email = $conn->real_escape_string($_POST['signup-email']);
$password = password_hash($_POST['signup-password'], PASSWORD_DEFAULT); // hashed for security

// Insert into database
$sql = "INSERT INTO users (firstname, lastname, gender, age, email, password)
        VALUES ('$firstname', '$lastname', '$gender', $age, '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  echo "Registration successful!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
