<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
	$email = $_POST["email"];
	$senha = $_POST["senha"];
	
	$id = uniqid();
	
	$xml = simplexml_load_file("contas.xml");
	
	$login = $xml->addChild('novosLog');
	$login->addAttribute("id", $id);
	$login->addChild('email', $email);
	$login->addChild('senha', $senha);
}
?>