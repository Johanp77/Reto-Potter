import { personajes } from './data.js'; //Trayendo información de otro archivo

let button = document.getElementById('button')
const ventana = document.getElementById('emergente')


//Función del botón
button.addEventListener('click', () => {
    mostrarPersonajes(personajes)
    aleatorio()

})


function aleatorio() {
    let a = Math.floor(Math.random() * 21)
    console.log(a)
    personajes.forEach(index => {

        if (a === index.id) {
            console.log(index)
            mostrarPersonajes(index)
        }
    })

}


//Función pintar personajes
const mostrarPersonajes = (personas) => {

    ventana.innerHTML = ``
    const { estandarte, foto, name, casa } = personas
    const contenido = document.createElement('div')
    contenido.innerHTML = `
    <div class ="container_super">
    <div class="mini_super">
    <img class="logo" src="${estandarte}">
        </div>
        <div class="foto_cont">
    <img class="foto" src="${foto}">
    </div>
    <div class="texto">
    <h3>${name}</h3>
    </div>
    <div class="texto"><p>${casa}</p></div>

    <div class="btn_centrado">

    <button id="btn2" class="nuevo" onclick="mostrarPersonajes(), aleatorio()">Nuevo Personaje</button>

    </div>
    </div>

    `
    ventana.appendChild(contenido)
        ;

    let button2 = document.getElementById('btn2')
    button2.addEventListener('click', () => {

        mostrarPersonajes(personajes)
        aleatorio()
    })

}




