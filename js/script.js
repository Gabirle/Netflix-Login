var login = document.getElementById('login')
var senha = document.getElementById('senha')

login_cred = 'root'
senha_cred = 'root'

submit.addEventListener('click',()=>{
    if (login.value == "" || senha.value == ""){
        alert('Campos vazios')
    }
    else{
        if (login.value == login_cred && senha.value == senha_cred){
            alert("Logado")
        }
        else{
            alert("Acesso negado")
        }
    }
})
