
var totaltodo = document.querySelector("#totaltodo")
var resultado = document.querySelector("#resultado")
var uno = document.querySelector("#uno")
var dos = document.querySelector("#dos")
var tres = document.querySelector("#tres")
var cuatro = document.querySelector("#cuatro")
var cinco = document.querySelector("#cinco")

var barrauno = document.querySelector("#estrellauno")
var barrados = document.querySelector("#estrellados")
var barratres = document.querySelector("#estrellatres")
var barracuatro = document.querySelector("#estrellacuatro")
var barracinco = document.querySelector("#estrellacinco")

totaltodo.addEventListener("click", function () {
    solucion = parseInt(uno.value) + parseInt(dos.value) + parseInt(tres.value) + parseInt(cuatro.value) + parseInt(cinco.value)
    resultado.innerHTML = `total de numero encuestas: ${solucion}`

    var estrellacinco = parseInt(cinco.value) * 100 / solucion
    barracinco.style.width = `${estrellacinco}%`

    var estrellacuatro = parseInt(cuatro.value) * 100 / solucion
    barracuatro.style.width = `${estrellacuatro}%`

    var estrellatres = parseInt(tres.value) * 100 / solucion
    barratres.style.width = `${estrellatres}%`

    var estrellados = parseInt(dos.value) * 100 / solucion
    barrados.style.width = `${estrellados}%`

    var estrellauno = parseInt(uno.value) * 100 / solucion
    barrauno.style.width = `${estrellauno}%`

})