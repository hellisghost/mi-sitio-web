//funcion que se aplica el estilo a la opcion seleccionada en el menu quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo repositive
    var x = document.getElementById("nav");
    x.className = "";

}


//funcion que muestra el menu responsive
function responsivemenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}