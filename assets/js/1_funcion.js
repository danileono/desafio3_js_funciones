//EJERCICIO 1: //EJERCICIO 1: //EJERCICIO 1: //EJERCICIO 1: //EJERCICIO 1:

//Declaracion de funcion
function fun1(num1, num2, num3){
    return num1 + num2  + num3
}
console.log(fun1(2, 3, 5))


//Transformada a Funcion de expresion
const fun2 = function(num1, num2, num3) {
    return num1 + num2 + num3
}
console.log (fun2(2, 3, 5)) 




//EJERCICIO 2: //EJERCICIO 2: //EJERCICIO 2: //EJERCICIO 2: //EJERCICIO 2:

//Ejemplo Funcion 
let suma1 = function (num1, num2){
    return num1 + num2
}
console.log(suma1(5, 6))


//Funcion transformada a Fucion Arrow de una linea
let suma2 = (num1, num2) => num1 + num2

console.log(suma2(5, 6)) 


