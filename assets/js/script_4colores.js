const azul = document.getElementById("boxAzul")
const rojo = document.getElementById("boxRojo")
const verde = document.getElementById("boxVerde")
const amarillo = document.getElementById("boxAmarillo")


//Funcion para dar style a los id
const estiloBox = (id, color)=>{
    const elemento = document.querySelector(id)
    elemento.style.backgroundColor = color
    elemento.style.width = "200px"
    elemento.style.height = "200px"
}

estiloBox("#boxAzul", "blue")
estiloBox("#boxRojo", "red")
estiloBox("#boxVerde", "green")
estiloBox("#boxAmarillo", "yellow")


//Eventos cambio color a negro
//los hice en eventos de una linea
azul.addEventListener("click", () => estiloBox("#boxAzul", "black"))
rojo.addEventListener("click", () => estiloBox("#boxRojo", "black"))
verde.addEventListener("click", () => estiloBox("#boxVerde", "black"))
amarillo.addEventListener("click", () => estiloBox("#boxAmarillo", "black"))




//Agregar div con borde
const agregarDiv = ()=>{
    const nuevoDiv = document.createElement("div")
    nuevoDiv.id ="key"

    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = "white";
    nuevoDiv.style.border = "solid black";
    
    document.body.appendChild(nuevoDiv)
}
agregarDiv()


//evento
const nuevoDiv = document.getElementById("key")

document.addEventListener("keydown", function (event){

    if (event.key === "a") {
        nuevoDiv.style.backgroundColor = "pink";
    }
    else if(event.key === "s"){
        nuevoDiv.style.backgroundColor = "orange";

    }
    else if(event.key === "d"){
        nuevoDiv.style.backgroundColor = "lightblue";

    }
    else if(event.key === "q"){
        const purpleBox = document.createElement("div")
        purpleBox.style.backgroundColor = "purple";
        purpleBox.style.width = "200px";
        purpleBox.style.height = "200px";
        document.body.appendChild(purpleBox)
    }
    else if(event.key === "w"){
        const greyBox = document.createElement("div")
        greyBox.style.backgroundColor = "grey";
        greyBox.style.width = "200px";
        greyBox.style.height = "200px";
        document.body.appendChild(greyBox)
    }
    else if(event.key === "e"){
        const brownBox = document.createElement("div")
        brownBox.style.backgroundColor = "brown";
        brownBox.style.width = "200px";
        brownBox.style.height = "200px";
        document.body.appendChild(brownBox)
    }
    
}) 






//DEJE ESTO POR AQUI PARA ACORDARME DE LA OTRA FORMA DE ESCRIBIR LOS EVENTOS

// azul.addEventListener("click", ()=>{
//     azul.style.backgroundColor = "black"
// })