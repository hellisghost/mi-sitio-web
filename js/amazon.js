const cerrarmodal = document.getElementById("close");
const modal = document.getElementById("modal");
const abrirmodal = document.getElementById("imagenabrir");

abrirmodal.addEventListener("click", function(){
    modal.style.display  = "block";
});

cerrarmodal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event){
    if (event.target = modal){
        modal.style.display = "none";
    };
});