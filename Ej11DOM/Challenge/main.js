let texto = document.getElementById("texto")
let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
let texto3 = document.getElementById("texto3")
let card = document.getElementById('card')
let image = document.getElementById('image')
let image2 = document.getElementById('image2')

const orden = () =>{
    respuesta.innerHTML = 'Nombre: ' + texto.value
    texto.value=""
    respuesta2.innerHTML = 'Direccion: ' + texto1.value
    texto1.value=""
    respuesta3.innerHTML = 'Telefono: ' + texto2.value
    texto2.value=""
    respuesta4.innerHTML = 'Con piña: ' + texto3.value
    
    card.classList.remove('none')

    let pizza = texto3.value
    let pizzaReal = pizza.toLowerCase()
    console.log(pizza)

    if (pizzaReal === 'si'){
        respuesta5.innerHTML = "😁"
        image2.classList.remove('none')
        image.classList.add('none')

    }else if(pizzaReal === 'no' ){
        respuesta5.innerHTML = "😢"
        image.classList.remove('none')
        image2.classList.add('none')
    }else{
        respuesta5.innerHTML = "Datos incorrectos 😆"
    }
    texto3.value=""

}

boton.addEventListener('click',orden)