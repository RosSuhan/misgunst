<?php  
    // getting user data
$date = $_POST['date'];
$time = $_POST['time'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$identity = $_POST['identity'];
$address = $_POST['address'];
$cellNumber = $_POST['cellNumber'];
$email = $_POST['email'];
$makeOfCar = $_POST['makeOfCar'];
$yearModel = $_POST['yearModel'];
$carColor = $_POST['carColor'];
$numberPlate = $_POST['numberPlate'];
$indemnity = $_POST['indemnity'];

// recipient email
$mailTo = 'rosflpbo@gmail.com';
// $mailTo .= ', '.$email .' ';
// $mailTo .= ', vleesbaai4x4@misgunstfarm.co.za';

// email subject
$subject = ' 4x4 Booking and Indemnity.';

// email message body
$htmlContent = '<h2> 4x4 Activity Booking </h2>
<p> <b>Client Name: </b> '.$name . '</p>
<p> <b>Client Surname: </b> '.$surname . '</p>
<p> <b>Client ID or Passport: </b> '.$identity . '</p>
<p> <b>Client Address: </b> '.$address . '</p>
<p> <b>Contact Number: </b> '.$cellNumber . '</p>
<p> <b>Email: </b> '.$email . '</p>
<p> <b>Date: </b> ' .$date . '</p>
<p> <b>Time: </b> ' .$time . '</p>
<p> <b>Possible Arrival Date: </b> '.$makeOfCar . '</p>
<p> <b>Possible Departure Date: </b> '.$yearModel . '</p>
<p> <b>Number of Visitors: </b> '.$carColor . '</p>
<p> <b>Unit Interested In: </b> '.$numberPlate . '</p>
<p> <b>I do accept all term and Conditions and Consent to the Indemnity: </b> '.$indemnity . '</p>
<br>
<h3>Thank you so much for enquiring about availability. We will get in touch with you as soon as possible.</h3>';

// header for sender info
$headers = "From: No Reply <noreply@.co.za>\r\n";
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