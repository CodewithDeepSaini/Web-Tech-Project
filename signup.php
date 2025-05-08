<?php
// Show errors for debugging (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$host = "localhost";
$dbname = "hogwarts_bookstore";
$username = "root";
$password = "";

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve and sanitize input
$firstname = trim($_POST['signup-firstname']);
$lastname = trim($_POST['signup-lastname']);
$gender = $_POST['signup-gender'];
$age = (int) $_POST['signup-age'];
$email = trim($_POST['signup-email']);
$pass = $_POST['signup-password'];

// Hash the password
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Check if email already exists
$check_stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
$check_stmt->bind_param("s", $email);
$check_stmt->execute();
$check_stmt->store_result();

if ($check_stmt->num_rows > 0) {
    echo "Error: Email already exists!";
    $check_stmt->close();
    $conn->close();
    exit();
}
$check_stmt->close();

// Insert into database
$insert_stmt = $conn->prepare("INSERT INTO users (firstname, lastname, gender, age, email, password) VALUES (?, ?, ?, ?, ?, ?)");
$insert_stmt->bind_param("sssiss", $firstname, $lastname, $gender, $age, $email, $hashed_password);

if ($insert_stmt->execute()) {
    echo "Account created successfully!";
} else {
    echo "Error: " . $insert_stmt->error;
}

$insert_stmt->close();
$conn->close();
?>
