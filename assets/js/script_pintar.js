//EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3: //EJERCICIO 3:

//3.2 y 3.3

const ele = document.getElementById("ele1")

//funcion modificada para seleccionar elemento fuera de la funcion
function pintar (id, color = "green"){
    const elemento = document.querySelector(id)
    elemento.style.backgroundColor = color
}

pintar ("#ele1",)

//evento click cambia a color amarillo
ele.addEventListener("click", () => pintar("#ele1", "yellow"))



