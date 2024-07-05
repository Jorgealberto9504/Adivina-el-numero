 let numeroAzar =Math.floor(Math.random()*100 + 1)

let mensaje = document.getElementById('mensaje')




document.getElementById('boton').addEventListener("click",() => {
    let input = document.getElementById('numeroEntrada').value

    if(input < 0 || input > 100){
        mensaje.innerText = 'Porfavor ingrese un numero entre 1 y 100'
    }

    else if(input == numeroAzar){
        mensaje.innerText = '¡Felicitaciones! Acertaste'
        mensaje.style.color = 'green'
    }else if(parseInt(input) < numeroAzar){
        mensaje.innerText = 'No acertaste, el numero es mayor'
        mensaje.style.color = 'red'

    }else if(parseInt(input) > numeroAzar){
        mensaje.innerText = 'No acertaste, el numero es menor'
        mensaje.style.color = 'red'

    }
   else{
        mensaje.innerText = 'Porfavor ingrese una opcion valida'

    }
}) 

let counter = 0
let intentos = document.getElementById('try')
document.getElementById('boton').addEventListener("click", () => {
    counter++
    intentos.innerText = `Intentos: ${counter}`
})