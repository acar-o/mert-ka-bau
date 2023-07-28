<?php
    if (isset($_POST['submit'])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];

        $to = "caydenti@gmail.com"; 
        $subject = "New Contact Form Submission";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n";
        $email_content .= "Message: $message\n";

        $headers = "From: $email\r\n";

        mail($to, $subject, $email_content, $headers);
        header("Location: index.html?MessageSent")
    }
?>