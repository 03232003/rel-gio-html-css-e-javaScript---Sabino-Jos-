// vams fazer o nosso codigo de javascript
const PontHora = document.querySelector('.pont-hora'),
PontMinutos = document.querySelector('.pont-minutos'),
PontSegundo = document.querySelector('.pont-segundos')

function rotaPont(){
    const data = new Date()
    const segundos = data.getSeconds() / 60
    const minutos  = (segundos + data.getMinutes()) / 60
    const hora     = (minutos + data.getHours()) / 12

    movePont(PontHora, hora)
    movePont(PontMinutos, minutos)
    movePont(PontSegundo, segundos)
}

function movePont(elemento, rotador){
    elemento.style.setProperty('--rotacao', rotador * 360)
}

setInterval( rotaPont, 1000)


