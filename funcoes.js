$(document).ready(function(){
    
    $("#bEntrar").click(function(){
        
        var ajax_email      = $("#tEmail").val();
        var ajax_senha      = $("#tSenha").val();

        if(ajax_email==""||ajax_senha==""){
            alert("Preencha todos os campos!");
        }

        else{

            var ajax_emailLido = null;
            var ajax_senhaLida = null;

            $.ajax({
                type:       "POST",
                dataType:   "json",
                url:        "../PHP/listarXML.php",

                success:function(retorno){
                    ajax_emailLido = retorno.email;
                    ajax_senhaLida = retorno.senha;
                }
            });

            alert("Email = "+ajax_emailLido+"Senha = "+ajax_senhaLida);

            if(ajax_email!=ajax_emailLido||ajax_senha!=ajax_senhaLida){
                alert("Email ou Senha incorretos!");
            }
            else{
                alert("Bem vindo!");
            }
        }
    });

    $("#bCadastrar").click(function(){

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
                url:        "../PHP/gravarXML.php",

                data:{
                    email:              ajax_email,
                    senha:              ajax_senha
                },

                success:function(retorno){
                    alert(retorno);
                }
            });
        }   
    });
});