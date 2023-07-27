function validate(){
    var validUser = 'Coder';
    var validPwd = 'asdasd123';
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;
    console.log(user);
    console.log(pwd);
    if(validUser == user && validPwd == pwd){
        window.location = '../index.html';
        console.log('Bienvenido!')
        alert('¡Bienvenido ' + user + '!');
    }
    else{
        alert('Usuario o contraseña invalida.');
        window.location.reload();
    }
}