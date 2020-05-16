let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
let boton = document.getElementById("boton")
let texto = document.getElementById("texto")
let respuesta = document.getElementById("respuesta")


const cambio = () =>{
    titulo.innerHTML = "Titulo Cambiado"
    parrafo.innerHTML = "Parrafo"
    respuesta.innerHTML = texto.value
    texto.value=""

}

boton.addEventListener('click',cambio)