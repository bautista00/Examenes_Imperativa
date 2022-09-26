// EJERCICIO 1

let personas = [
    {
        nombre: "Raul",
        edad: 25
    },
    {
        nombre: "Jose",
        edad: 9
    },
    {
        nombre: "Mina",
        edad: 7
    },
    {
        nombre: "Lucas",
        edad: 15
    },
    {
        nombre: "Jorge",
        edad: 32
    },
    {
        nombre: "Luciano",
        edad: 26
    },
    {
        nombre: "Lucrecia",
        edad: 75
    },
]

// Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array con los objetos 
// cuya edad sea mayor o igual a 26

function nombres(array) {
    let nuevo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad >= 26) {
            nuevo.push(array[i])
        }
    }
    return nuevo
}
// console.log(nombres(personas));

// Ejercicio 2

// Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un String. 
// Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort 
// según su edad de forma ascendente o descendente según lo indique el string recibido por parámetro, 
// teniendo en cuenta los siguientes criterios:

// Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
// Si el String es “DESC” o “desc” entonces ordenar de mayor a menor

function ejercicio2(array, string) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (string.toUpperCase() === "ASC") {
                if (array[j].edad > array[j + 1].edad) {
                    let aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
            }
            else if(string.toUpperCase() === "DESC"){
                if (array[j].edad < array[j + 1].edad) {
                    let aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
            }

        }

    }
    return array
}

// console.log(ejercicio2(personas,"asc"));


// Ejercicio 3
// Dada la siguiente matriz: 

let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

// Desarrollar una función que retorne la suma de todos los valores de la fila 2.

function suma(mat){
    let sumatoria=0
    for (let i = 0; i < mat[1].length; i++) {
        sumatoria += mat[1][i];
    }
    return sumatoria
}

// console.log(suma(matriz));

// Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares 
// que se encuentren dentro de la matriz.

function elementosPares (mat){
    let nuevaMatriz=[]
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if(mat[i][j] % 2 == 0){
                    nuevaMatriz.push(mat[i][j])

                }

            }
           
            
        }
        return nuevaMatriz
    }
// console.log(elementosPares(matriz));