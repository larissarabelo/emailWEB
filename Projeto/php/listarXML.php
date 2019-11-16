<?php

    $xml_string = file_get_contents("../xml/dados.xml");

    $xml_objeto = simplexml_load_string($xml_string);

    $retorno["email"] = trim($xml_objeto->$email);
    $retorno["senha"] = trim($xml_objeto->$senha);

    echo json_encode($retorno);

?>