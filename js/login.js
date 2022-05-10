function entrar(){
    if(document.form.usuario.value == 'Admin' && document.form.password.value == 'Kuepa2022') {
        document.form.submit();
    }
    else{
        alert("Ingrese nombre de usuario y contraseña correctos.");
    }
}