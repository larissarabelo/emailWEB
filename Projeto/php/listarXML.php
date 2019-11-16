<?php
    if($_POST){
        extract($_POST);
            
        $xml_string = file_get_contents("../xml/dados.xml");
        $xml_objeto = simplexml_load_string($xml_string);

        if($xml_objeto->email == $email && $xml_objeto->senha == $senha){
            echo json_encode(true))
        }
        else{
            echo json_encode(false);
        }
    }
    else{
        echo json_encode(false);
    }
?>