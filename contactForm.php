<?php  
    // getting user data
$name = $_POST['fullName'];
$surname = $_POST['surname'];
$idNumber = $_POST['identity'];
$address = $_POST['address'];
$number = $_POST['cellNumber'];
$fromEmail = $_POST['submitEmail'];
$arrival = $_POST['arrival'];
$departure = $_POST['departure'];
$pax = $_POST['guests'];
$enquiry = $_POST['accommodation'];
$indemnity = $_POST['indemnity'];

// recipient email
$mailTo = 'rosflpbo@gmail.com';
$mailTo .= ', '.$fromEmail .' ';

// email subject
$subject = ' Availability Enquiry for Misgunst Farm.';

// email message body
$htmlContent = '<h2> Custome Run Reservation </h2>
<p> <b>Client Name: </b> '.$name . '</p>
<p> <b>Client Surname: </b> '.$surname . '</p>
<p> <b>Client ID or Passport: </b> '.$idNumber . '</p>
<p> <b>Client Address: </b> '.$address . '</p>
<p> <b>Contact Number: </b> '.$number . '</p>
<p> <b>Email: </b> '.$fromEmail . '</p>
<p> <b>Possible Arrival Date: </b> '.$arrival . '</p>
<p> <b>Possible Departure Date: </b> '.$departure . '</p>
<p> <b>Number of Visitors: </b> '.$pax . '</p>
<p> <b>Unit Interested In: </b> '.$enquiry . '</p>
<p> <b>I do accept all term and Conditions and Consent to the Indemnity: </b> '.$indemnity . '</p>
<br>
<h3>Thank you so much for enquiring about availability. We will get in touch with you as soon as possible.</h3>';

// header for sender info
$headers = "From: rosalyn <rosalyn@vitapp.co.za>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// PHP mailer function
mail($mailTo, $subject, $htmlContent, $headers);

    // error Checking
    if($result) {
        $success = "The message was sent successfully!";
    } else {
        $failed = "Error: Message was not sent, Try again Later";
    }

    // Redirect to
header("Location:thank-you.html");
?>