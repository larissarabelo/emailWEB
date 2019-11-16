$(document).ready(function(){
    
    $("#bEntrar").click(function(){
        login();
    });

    $("#bCadastro").click(function(){
        location.replace("./paginas/Cadastro.html");
    });

    $("#bCadastrar").click(function(){
        cadastro();
    });
       
    function login(){
        var ajax_email      = $("#tEmail").val();
        var ajax_senha      = $("#tSenha").val();

        if(ajax_email==""||ajax_senha==""){
            alert("Preencha todos os campos!");
        }

        else{
            alert();
            $.ajax({
                type:       "POST",
                dataType:   "json",
                url:        "php/listarXML.php",
                data:{
                    "email": email,
                    "senha": senha

                },

                success:function(retorno){
                    if(retorno == true){
                        alert("Bem vindo!");
                        location.replace("./paginas/Email.html");
                    }
                    else{
                        alert("Email ou Senha incorretos!");
                    }
                    
                }                     
            });
        }
    };

    function cadastro(){
        var ajax_email      = $("#tEmail").val();
        var ajax_senha      = $("#tSenha").val();
        var ajax_confSenha  = $("#tConfSenha").val();

        if(ajax_email==""||ajax_senha==""||ajax_confSenha==""){
            alert("Preencha todos os campos!");
        }

        else if(ajax_senha!=ajax_confSenha){
            alert("Senha e Confirmar Senha não condizem!");
        }

        else{
            $.ajax({
                type:       "POST",
                dataType:   "json",
                url:        "../php/gravarXML.php",

                data:{
                    "email": email,
                    "senha": senha
                },

                success:function(retorno){
                    alert(retorno);
                    location.replace("../Index.html");
                }
            });
        }   
    };
});