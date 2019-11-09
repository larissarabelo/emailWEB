<?php

    
    $email=$_POST["email"];
    $senha=$_POST["senha"];
    $confirmarSenha=$_POST["confirmarSenha"];
    

    $xml=new DOMDocument("1.0");

    $xml_usuarios=$xml->createElement("usuarios");
    $xml_usuario=$xml->createElement("usuario");

 
    $xml_email=$xml->createElement("email",$email);
    $xml_senha=$xml->createElement("senha",$senha);
    $xml_confirmarSenha=$xml->createElement("confirmarSenha",$confirmarSenha);
   



    $xml_usuario->appendChild($xml_email);
    $xml_usuario->appendChild($xml_senha);
    $xml_usuario->appendChild($xml_confirmarSenha);
    $xml_usuarios->appendChild($xml_usuario);
    $xml->appendChild($xml);

    $xml->save("listUsers.xml");
    echo json_encode("gravado com sucesso!");
?>

