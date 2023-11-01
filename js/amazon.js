var abrirModal = document.getElementById("abrirModal");
var miModal = document.getElementById("miModal");
var cerrarModal = document.getElementById("cerrarModal");
var imagenModal = document.getElementById("imagenModal");
var num1 = document.querySelector(".num1")
var num2 = document.querySelector(".num2")
var num3 = document.querySelector(".num3")
var num4 = document.querySelector(".num4")
var num5 = document.querySelector(".num5")

abrirModal.addEventListener("click", function () {
  miModal.style.display = "block";
});

cerrarModal.addEventListener("click", function () {
  miModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == miModal) {
    miModal.style.display = "none";
  }
});

function setActive(img){
    var imagenes = document.querySelectorAll(".img");
    imagenes.forEach(function(imagenes){
        imagenes.classList.remove("activado");
    });
    img.classList.add("activado");
}

num1.addEventListener("click", function(){
    imagenModal.src = ""
    imagenModal.src = num1.src
    setActive(num1)
})
num2.addEventListener("click", function(){
    imagenModal.src = ""
    imagenModal.src = num2.src
    setActive(num2)
})
num3.addEventListener("click", function(){
    imagenModal.src = ""
    imagenModal.src = num3.src
    setActive(num3)
})
num4.addEventListener("click", function(){
    imagenModal.src = ""
    imagenModal.src = num4.src
    setActive(num4)
})
num5.addEventListener("click", function(){
    imagenModal.src = ""
    imagenModal.src = num5.src
    setActive(num5)
})