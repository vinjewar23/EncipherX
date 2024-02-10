<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo json_encode(array('status' => 'success', 'message' => 'Thank you! Your message has been sent.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Sorry, an error occurred. Please try again later.'));
    }
} else {
    http_response_code(403);
    echo json_encode(array('status' => 'error', 'message' => 'Forbidden'));
}
?>
