<?php
// Simple Guestbook - Load Messages
// This file reads messages from the text file and displays them

// Name of the file where messages are stored
$filename = "guestbook.txt";

// Check if file exists
if (file_exists($filename)) {
    
    // Read all lines from file
    $lines = file($filename);
    
    // Reverse so newest shows first
    $lines = array_reverse($lines);
    
    // Show each message
    foreach ($lines as $line) {
        $line = trim($line);
        if (!empty($line)) {
            // Split the line into parts: [date] | name: message
            // Format: [Feb 06, 2025] | John: Hello!
            
            // Find the name and message
            $parts = explode(":", $line, 2);
            if (count($parts) == 2) {
                $dateAndName = $parts[0]; // [Feb 06, 2025] | John
                $message = $parts[1];     // Hello!
                
                // Extract date and name
                $dateNameParts = explode("|", $dateAndName);
                $date = trim($dateNameParts[0]); // [Feb 06, 2025]
                $name = trim($dateNameParts[1] ?? "Anonymous"); // John
                
                // Display the entry
                echo '<div class="guestbook-entry">';
                echo '<div class="entry-header">';
                echo '<span class="avatar">👤</span>';
                echo '<div class="entry-info">';
                echo '<strong>' . htmlspecialchars($name) . '</strong>';
                echo '<span class="date">' . htmlspecialchars($date) . '</span>';
                echo '</div>';
                echo '</div>';
                echo '<p>' . htmlspecialchars($message) . '</p>';
                echo '</div>';
            }
        }
    }
    
} else {
    // If no messages yet
    echo '<div class="guestbook-entry empty">';
    echo '<p>📭 No messages yet. Be the first to sign!</p>';
    echo '</div>';
}
?>
