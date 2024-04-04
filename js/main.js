import { lista_de_componentes } from "./data.js";
let divComponentes = document.querySelector(".root");
let cambio_borde = document.querySelector(".contenedor")

function cargarDiv (){

    lista_de_componentes.forEach((cada_componente) => {
        console.log(lista_de_componentes);
        let div_componente = document.createElement("div");
    
        div_componente.innerHTML = `

            <div class="contenedor">
                <div class="header">
                <h2 class="titulo">${cada_componente.nombre}</h2>
                <button>boton</button>
                </div>

                <p class="texto">${cada_componente.descripcion}</p>
            </div>
        `;
        divComponentes.appendChild(div_componente);
    });

    cambio_borde.forEach((cada_componente)=>{
        cambio_borde.classList.add("cambioBorde")
        cambio_borde.addEventListener("click", cambio_borde)
    })
}

cargarDiv();