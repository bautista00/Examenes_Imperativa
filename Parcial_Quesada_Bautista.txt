
// Ejercicio 1:
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su triple. 

function primera(num) {
    return num * 3
}
console.log(primera(3))

// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.

function segunda(num1, num2) {
    if (num1 != 0 && num2 != 0) {
        return num1 / num2
    }
}
console.log(segunda(2,2))


// Que reciba por parámetro dos números enteros y si ambos son pares retorne la multiplicación de ambos, de lo contrario que retorne su suma.

function tercera(num3, num4) {
    if (num3 % 2 == 0 && num4 % 2 == 0) {
        return num3 * num4
    } else {
        return num3 + num4
    }
}
console.log(tercera(3,4))


// Ejercicio 2:
// Realizar una función que nos ayude a determinar si estamos listos para viajar o no.
//  La misma recibirá por parámetro una edad y un booleano que indica si tiene pasaje o no. Se deberá evaluar lo siguiente: 

// Si es mayor de edad y tiene pasaje, entonces retornaremos un mensaje que diga “Puede viajar”
// Si es mayor de edad pero no tiene pasaje, debemos retornar un mensaje que diga “Necesita comprar un pasaje”
// Si es menor de edad y tiene pasaje se deberá retornar “Puede viajar solo con permiso legal”
// Si es menor de edad y no tiene pasaje entonces se deberá retornar “No puede viajar”


function viajar(edad, pasaje) {
    if (edad >= 18 && pasaje == true) {
        return ("Puede Viajar")
    } else if (edad >= 18 && pasaje == false) {
        return ("Necesita comprar un pasaje")
    } else if (edad < 18 && pasaje == true) {
        return ("Puede viajar con permiso legal")
    } else {
        ("No puede viajar")
    }
}
console.log(viajar(21, false))


// Ejercicio 3:
// Dado el siguiente array de objetos:
let ciudades = [
    {
        nombre: "Mar del Plata",
        mesesDeTurismo: 4,
        cantDeTuristasPorMes: 10000
    },
    {
        nombre: "Medellin",
        mesesDeTurismo: 6,
        cantDeTuristasPorMes: 15000
    },
    {
        nombre: "Rio de Janeiro",
        mesesDeTurismo: 8,
        cantDeTuristasPorMes: 320000
    },
    {
        nombre: "Paris",
        mesesDeTurismo: 12,
        cantDeTuristasPorMes: 12000000
    }
]

// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las ciudades cuya cantidad de turista por mes sea mayor a 90.000.
// La función deberá retornar un nuevo arreglo con las ciudades que cumplan con la condición antes mencionada.

function filtrado(array) {
    let total = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].cantDeTuristasPorMes > 90000) {
            total.push(array[i]);

        }
    }
    return total  
}

// Ejecutar el correspondiente llamado a la función realizada 
// en el inciso anterior para mostrar su correcto funcionamiento.

console.log(filtrado(ciudades));