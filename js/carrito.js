let boxminus =  document.getElementById("boxminus")
let boxcantidad  = document.getElementById("boxcantidad")
let boxplus = document.getElementById("boxplus")

boxplus.addEventListener("click",function(){
    let auxcantidad = boxcantidad.innerHTML;
    if(auxcantidad < 10){
        auxcantidad++;
        boxcantidad.innerHTML = auxcantidad;
    };
});

boxminus.addEventListener("click",function(){
    let auxcantidad = boxcantidad.innerHTML;
    if(auxcantidad > 0){
        auxcantidad--;
        boxcantidad.innerHTML = auxcantidad;
    };
});