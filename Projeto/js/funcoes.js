$(document).ready(function(){
    
    $("#bEntrar").click(function(){
        loguin();
    });

    $("#bCadastrar").click(function(){
        cadastro();
    });
       
    function loguin(){
        var ajax_email      = $("#tEmail").val();
        var ajax_senha      = $("#tSenha").val();

        if(ajax_email==""||ajax_senha==""){
            alert("Preencha todos os campos!");
        }

        else{

            var ajax_emailLido = null;
            var ajax_senhaLida = null;
            var loginOK=false;

            $.ajax({
                type:       "POST",
                dataType:   "json",
                url:        "../php/listarXML.php",

                success:function(retorno){

                    for(var i=0;i<retorno.length;i++){
                    ajax_emailLido = retorno[i].email;
                    ajax_senhaLida = retorno[i].senha;
                    
                    if(ajax_emailLido==ajax_email && ajax_senhaLida==ajax_senha){
                            loginOK=true;
                            console.log("ajax_email"+ajax_email);
                            console.log("ajax_senha"+ajax_senha);
                    } 
                }                    
                    
                }
            });

            if(loginOK==true){
               
                alert("Bem vindo!");
                location.replace("../paginas/Email.html");
            }
            else{
                alert("Email ou Senha incorretos!");
            }
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
                    email:              ajax_email,
                    senha:              ajax_senha
                },

                success:function(retorno){
                    for(var i=0; i < resposta.length; i++){
                        alert(resposta[i].email);
                        alert(resposta[i].senha);
                    }
                    
                    alert(retorno);
                }
            });
        }   
    };
});