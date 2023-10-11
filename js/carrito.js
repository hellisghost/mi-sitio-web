let boxminus =  document.getElementById("boxminus");
let boxcantidad  = document.getElementById("boxcantidad");
let boxplus = document.getElementById("boxplus");
let valorproducto  = 37000000;
let auxvalorproducto = new Intl.NumberFormat("de-DE").format(valorproducto);
document.getElementById("preciounidad").innerHTML = auxvalorproducto;


boxplus.addEventListener("click",function(){
    let auxcantidad = boxcantidad.innerHTML;
    if(auxcantidad < 10){
        auxcantidad++;
        boxcantidad.innerHTML = auxcantidad;
        Calcularsubtotal()
        cantidad()
    };
});

boxminus.addEventListener("click",function(){
    let auxcantidad = boxcantidad.innerHTML;
    if(auxcantidad > 0){
        auxcantidad--;
        boxcantidad.innerHTML = auxcantidad;
        Calcularsubtotal()
        cantidad()
    };
});

function Calcularsubtotal(){
    let auxcantidad = valorproducto * Number(boxcantidad.innerHTML);
    let auxcantid = Intl.NumberFormat("de-DE").format(auxcantidad);
        document.getElementById("subtotal").innerHTML= "$" + auxcantid;
}

function cantidad(){
    let auxcantidad = boxcantidad.innerHTML;
    document.getElementById("numeroproductos").innerHTML  = auxcantidad
}