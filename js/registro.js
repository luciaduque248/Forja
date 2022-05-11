let save = document.getElementById("guardar");
save.addEventListener("click", () => {
    validarInfo();
});

function validarInfo() {
    let date = document.getElementById("date").value;
    let registro = document.getElementById("registro").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let identificacion = document.getElementById("identificacion").value;
    let nacimiento = document.getElementById("dateNac").value;
    let edad = document.getElementById("edad").value;
    let eps = document.getElementById("eps").value;
    let quienLoVacuno = document.getElementById("quienLoVacuno").value;
    let idProfesional = document.getElementById("idProfesional").value;
    let dosis = document.getElementById("dosis").value;
    let biologico = document.getElementById("biologico").value;

    if (date == "") {
        alert("Campos incompletos: Fecha de registro")
    }
    else if (registro == "") {
        alert("Campos incompletos: No. de Registro");
        return false;
    }
    else if (nombre == "") {
        alert("Campos incompletos: Nombre");
        return false;
    }
    else if (apellidos == "") {
        alert("Campos incompletos:Apellidos");
        return false;
    }
    else if (identificacion == "") {
        alert("Campos incompletos: Identificacion");
        return false;
    }
    else if (nacimiento == "") {
        alert("Campos incompletos: Fecha de nacimiento");
        return false;
    }
    else if (edad == "") {
        alert("Campos incompletos: Edad");
        return false;
    }
    else if (eps == "") {
        alert("Campos incompletos: E.P.S");
        return false;
    }
    else if (quienLoVacuno == "") {
        alert("Campos incompletos: ¿Quien lo vacuno?");
        return false;
    }
    else if (idProfesional == "") {
        alert("Campos incompletos: ID del Profesional");
        return false;
    }
    else if (dosis == "") {
        alert("Campos incompletos: Dosis");
        return false;
    }
    else if (biologico == "") {
        alert("Campos incompletos: Datos de los biologicos");
        return false;
    } else {
        alert("Datos guardados exitosamente")
    }
}