var boton = document.getElementById('btn-menu')
var barra = document.querySelector('.cuadro')

function toggleBarra() {
    barra.classList.toggle("close")
}

barra.classList.add("close")

boton.addEventListener('click', toggleBarra)