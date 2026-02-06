<?php
// Simple Guestbook - Save Message
// This file saves messages to a text file

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get the message and name from the form
    $name = $_POST['name'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Clean the input (remove dangerous characters)
    $name = htmlspecialchars($name);
    $message = htmlspecialchars($message);
    
    // Check if both fields have content
    if (!empty($name) && !empty($message)) {
        
        // Create the message entry with date
        $date = date("M d, Y");
        $entry = "[$date] | $name: $message\n";
        
        // Save to file (append mode)
        // 'a' means append (add to end of file)
        file_put_contents("guestbook.txt", $entry, FILE_APPEND | LOCK_EX);
    }
}

// Send user back to the guestbook page
header("Location: index.php#guestbook-section");
exit();
?>
