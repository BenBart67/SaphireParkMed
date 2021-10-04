<?php

if( isset($_GET['firstName']) && isset($_GET['lastName']) )
{
/*
	$sanitizedata['firstName']      = filter_var($_GET['firstName'], FILTER_SANITIZE_ADD_SLASHES);
	$sanitizedata['lastName']       = filter_var($_GET['lastName'], FILTER_SANITIZE_ADD_SLASHES);
	$sanitizedata['email']   = filter_var($_GET['email'], FILTER_SANITIZE_EMAIL);
	$sanitizedata['phone']   = filter_var($_GET['phone'], FILTER_SANITIZE_ADD_SLASHES);
*/
	// The message
$message = "Request from: ".$_GET['firstName']." ".$_GET['lastName']."\r\n";
$message .= "Address: ".$_GET['address'].", ".$_GET['city']." CA"."\r\n";
$message .= "Email: ".$_GET['email']."\r\n";
$message .= "Phone: ".$_GET['phone']."\r\n";
		

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
mail('ben@benbart.com', 'Appointment Request', $message);
}
	  

?>