<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "your-email@example.com"; // Replace with your email address

    // Set email subject
    $subject = "New message from $name";

    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Thank you! Your message has been sent.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Sorry, an error occurred. Please try again later.'));
    }
} else {
    // If not a POST request, return an error
    http_response_code(403);
    echo json_encode(array('status' => 'error', 'message' => 'Forbidden'));
}
?>
