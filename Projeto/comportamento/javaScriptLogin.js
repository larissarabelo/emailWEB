$(document).ready(function(){
	
	$("#bLog").click(function(){
		logar();
	});
});
	
function logar(){
	ajax_email = $("#email").val();
	ajax_senha = $("#senha").val();
	ajax_confSenha = $("#confSenha").val();
	
	if (ajax_email=="" || ajax_senha==""||ajax_confSenha==""){
		alert("Preencha todos os campos!");
	}
	else if (ajax_senha!=ajax_confSenha){
		alert("Senha e Confirmar Senha precisam ser iguais!");
	}
	else{


		$.ajax({
		 type:"POST",
		 dataType:"json",
		 url:"php/realizarCadastro.php",
		 data:{
			 
			 email:ajax_email,
			 senha:ajax_senha,
			 confirmarSenha:ajax_confSenha
				 
		 },
		success:function(retorno){
		 alert(retorno);
		}
		});


		alert("Login criado com sucesso!");
		location.replace("./paginas/caixaDeEntrada.html");
	}
}