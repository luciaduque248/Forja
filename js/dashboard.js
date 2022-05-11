let caso1 = "52368795";
let caso2 = "1001235478";
let caso3 = "25413574";
let caso4 = "1007203506";

let modalCaso1 = document.getElementById("modalCaso1");
let modalCaso2 = document.getElementById("modalCaso2");
let modalCaso3 = document.getElementById("modalCaso3");
let modalCaso4 = document.getElementById("modalCaso4");


let btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario").value;
    let noRegistrado = document.getElementById("modalNoRegistrado");

    if(caso1 == usuario){
        document.getElementById("btn-search").href = "#modalCaso1";
    }else if(usuario == ""){
        document.getElementById("btn-search").href = "#modalNoRegistrado";
    }else if(caso2 == usuario){
        document.getElementById("btn-search").href = "#modalCaso2";
    }else if(caso3 == usuario){
        document.getElementById("btn-search").href = "#modalCaso3";
    }else if(caso4 == usuario){
        document.getElementById("btn-search").href = "#modalCaso4";
    }
})



