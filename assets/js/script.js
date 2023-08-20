//EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3:

//3.2 y 3.3

let ele = document.getElementById("ele1")

//funcion
function pintar (id, color = "green"){
    const elemento = document.querySelector(id)
    elemento.style.backgroundColor = color
}

pintar ("#ele1",)

//evento
ele.addEventListener("click", () => pintar("#ele1", "yellow"))



