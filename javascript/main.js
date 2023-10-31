
//1-
//obtenerMenor(numeros)
//Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

//obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2


// const obtenerNumeroMenor = [5, 7, 99, 34, 54, 2, 12];

// let obtenerMenor = 1000 //esto es para que se guarde el valor que busco, comparando

// for ( let aSingleNumber of obtenerNumeroMenor)    {
//     if (obtenerMenor > aSingleNumber)
//     obtenerMenor = aSingleNumber
// }

// console.log(obtenerMenor)

//2-
// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// sumarNumeros([5, 7, 10, 12, 24]) // 58

// const numeros = [5, 7, 10, 12, 24]

// const sumarNumeros = (numeros) =>   {
//     let acc = 0
//     for (const numero of numeros)   {
//         acc += numero
//     }
//     return acc
// }

// console.log(sumarNumeros(numeros))

//3-
// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

//const numberValues = [5, 7, 99, 3, 4, 54, 2, 12]

//const value = 54

//const value = 103

// const contiene = (value, numberValues) =>  {

//       if (numberValues.includes(value))     {
//         return true
//       } else{
//         return false
//       }

     
// }

// console.log(contiene(value, numberValues))

//4-
// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'

//const frase = "Ada Lovelace"

//const frase = "feliz cumple"

//const frase = "jAvAsCrIpT"

// const invertirCaso = (frase) => {
//     let changedFrase = " "
//     for (let i = 0; i < frase.length; i++) {
//         const letters = frase[i];

//         if (letters === letters.toLowerCase())  {
//             changedFrase += letters.toUpperCase()
//         } else{
//             changedFrase += letters.toLowerCase()
//         }
        
//     }
//        return changedFrase    
// }

// console.log(invertirCaso(frase))

//5-

// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
//gano (["estrella", "estrella", "estrella", "sol", "luna"])
// gano(['💫', '💫', '💫', '💫', '💫']) // true
//gano (["sol","sol","sol","sol", "sol"])
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
//gano(["sol","sol","sol","sol","sol", "estrella"])

//const tragamonedas = ["estrella", "estrella", "estrella", "sol", "luna"]

// const tragamonedas = ["sol","sol","sol","sol", "sol"]

// const palabra = "sol"
// //const palabra = "estrella"

// const gano =(palabra, tragamonedas) =>  {
//     let count = 0
//     for (let i = 0; i < tragamonedas.length; i++)   {
//         if (tragamonedas[i].includes(palabra))  {
//             count++ 
//         }
// }  
// return count 
// }

// console.log(gano(palabra, tragamonedas))




//6-
// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //true

//const personajes = ['Sam', 'Frodo', 'Legolas']
//const personajes = ['Aragorn', 'Frodo', 'Frodo']
//const personajes = ["Sam", "Orco", "Frodo"]
//console.log(personajes.indexOf("Sam"))

//  const estanJuntos = (personajes) => {
//       if (personajes.indexOf("Sam") < personajes.indexOf("Frodo") || personajes.indexOf("Sam") > personajes.indexOf("Frodo") && personajes.indexOf("Frodo") === 2){    
//          return true
//      } else if (personajes.indexOf("Sam") === -1){
//          return false
//      }
//  }

// console.log(estanJuntos(personajes))

//7-
// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'

// separar("perro", "gato", "perro", "gato", "gato", "perro", "perro")

// const perrosYGatos = ["perro", "gato", "perro", "gato", "gato", "perro", "perro"]

// const separar = (perrosYGatos) =>   {
//     return perrosYGatos.sort().reverse()
// }

// console.log(separar(perrosYGatos))

//8-
//obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:

// obtenerChatStatus(['Ada']) // 'Ada está conectada'
// obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
// obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'

//const usuaria = ["Ada"]

//const usuarias = ['Ada', 'Grace']

//const usuarias = ['Ada', 'Grace', 'Marie']

//funciona para 1 user
// for (const user of usuarias) {
//         console.log(`${user} está conectada`)
// }

//funciona para 2 users

// for (let i = 0; i < usuarias.length; i++) {
//     let nombre = " "
//     const user = usuarias[i];
//     for (const user of usuarias) {
//         nombre ++
//         console.log(`${usuarias.join(" y ")} están conectadas`)
//     }
    
// }

//funciona para 3 users :)

// for (let i = 0; i < usuarias.length; i++) {
//     let nombre = " "
//     const user = usuarias[i];
//     for (const user of usuarias) {
//         nombre ++
//         let onlyTwoUsers = usuarias.slice(0,2)
//         console.log(`${onlyTwoUsers.join(", ")} y 1 persona(s) más están conectadas`)
//     }
// }

//9-

// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

const plantines = ["tulipan", "plantín", "girasol", "plantín", "sakura", "plantín", "tulipan", "plantín", "girasol", "plantín", "sakura", "plantín"]
//const plantines = ["tulipan", "plantín", "plantín", "plantín", "girasol", "plantín","plantín", "sakura", "plantín","plantín","plantín","plantín",]
//const plantines = ["girasol", "sakura", "plantín", "tulipan", "girasol", "plantín","plantín", "tulipan", "tulipan", "plantín","plantín","plantín",]

for (planta of plantines)   {
    if (planta.indexOf("tulipan") < planta.indexOf("plantín")){    
        console.log(planta.replace("plantín", "tulipan"))
    } else if (planta.indexOf("girasol") < planta.indexOf("plantín"))  {
        console.log(planta.replace("plantín", "girasol"))
    } else if (planta.indexOf("sakura") < planta.indexOf("plantín"))   {
        console.log(planta.replace("plantín", "sakura"))
    }
}










// const simbolo1 = "sol"

// let acc= ""

// for (let i = 0; i < tragamonedas.length; i++) {
//    // if (tragamonedas[i] == "sol")   {
//     if (tragamonedas[i] == 1)   {
//         acc += " sol"
//     }
    
// }

// console.log(acc)