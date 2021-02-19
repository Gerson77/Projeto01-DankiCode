

$(function(){

	$('input[type=submit]').hover(function(){
		$('input[type=submit]').css('background-color','#323665');
	},function(){
		$('input[type=submit]').css('background-color','#363A6D');
	});

	/*funçoes do formulário*/

	$('input[type=text]').focus(function(){
		resetarCampos($(this));
	})

	$('.form').submit(function(e){

		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var telefone = $('input[name=telefone]').val();

		var splitStr = nome.split(' ')

		var amount = nome.split(' ').length;

		if(amount >= 2){
			for(i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
					console.log('Verdadeiro')
				}else{
					return false;
				}
			}
			//return false;
		}else{
			console.log('ERRO')
			campoInvalido($('input[name=nome]'));
			//return false;
		}
		//
		if(email == ''){
			campoInvalido($('input[name=email]'));
		}else{
			email.match(/^[a-z]{1,}@[a-z].{1,}$/)
			console('email correto')
		}

	})
	
	function campoInvalido(el){
		el.css('border','1px solid red')
		el.data('invalido','true')
		el.val('*Campo Invalido')
	}

	function resetarCampos(el){
		el.css('border','1px solid #ccc')
		el.val('')
	}
	
	
});
