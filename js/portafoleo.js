//funcion que muestra el menu responsive
function responsivemenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}