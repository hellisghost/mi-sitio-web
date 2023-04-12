let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgseleccionada = document.getElementById("img");
let modeloseleccionado = document.getElementById("modelo");
let descripseleccionada = document.getElementById("descripcion");
let precioseleccionado = document.getElementById("precio");


function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgseleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloseleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripseleccionada.innerHTML = "descripción del modelo";

    precioseleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none"
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.whith = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}