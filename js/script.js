
var tag = document.querySelector('.input')
var botao = document.getElementById('botao')
let tel = document.getElementById('telefone')
var email = document.getElementById('email')


//funções
function formName(){
        
        function validNome(){
        var nome = document.getElementById('nome').value;
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    return true;
                }else{
                    
                    return false;
                }
            }
        }else{
            alert('Campo do Nome incorreto, Digite o nome completo!')
            amount = document.getElementById('nome').style.border = '1px solid red'
        }  
    }
    
    validNome();

    function validEmail(){
        
        if(email.value == ''){
            alert(`Campo do Email incorreto`)
		}else{
			email.value.match(/^[a-z]{1,}@[a-z].{1,}$/)
            return true;
		}
    }
    validEmail();

    function validTel(){
        
        let = telL = tel.value.length;
        if(telL== '' || telL == null || telL >= 12 || telL <= 10){
            alert(`     Número de telefone invalido 
            contém ${telL} digitos, digite no mínimo 11 com o DDD 
            Exemplo: (99)9999-9999`)
            telL = document.getElementById('telefone').style.border = '1px solid red'
        
        }else{
            tel.value.match(/^[0-9]{1,}-[0-9]{1,}$/)
            telL = document.getElementById('telefone').style.border = '1px solid #ccc'
        }
        
    }
    validTel();

    function validCampo(){

        let y, i, valid = true;
        y = document.getElementsByTagName("input")
        for(i = 0; i < y.length; i++){
            if(y[i].value == ""){
                //y[i].className += " invalid" aplica as propriedades pela class css
                y[i].style.border = '1px solid red'
                valid = false;
            }
        }
    }   
    validCampo();
}

//eventos:

tag.addEventListener('click', resetarCampo)
email.addEventListener('click', resetarCampo)
tel.addEventListener('click', resetarCampo)

botao.addEventListener('click', formName)

function resetarCampo(){

    tag.style.border = '1px solid #ccc';
    email.style.border = '1px solid #ccc';
    tel.style.border = '1px solid #ccc';
    
}
