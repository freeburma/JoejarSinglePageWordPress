<?php 
	
	$name = $_POST['name'];
	$name = $_POST['email'];
	$name = $_POST['message'];
	
	$header  = "From: " . $email . "\r\n"; 
	$header .= "X-Mailer: PHP /" . phpversion() . "\r\n"; 
	$header .= "Mime Version: 1.0" . "\r\n"; 
	$header .= "Content Type: text/plain"; 
	
	$comment  = "This message has been sent by " . $name "\r\n"; 
	$comment .= "E-mail it's : " . $email . "\r\n"; 
	$comment .= "Message is : " . $message . "\r\n"; 
	
	$for "hello@gmail.com"; 
	$subject = "Contact from website"; 
	
	mail($subject, utf8_decode($comment), $header); 
	
	echo json_decode(array('Message' => sprintf("Your message has been sent %s", $name))); 
	

?>