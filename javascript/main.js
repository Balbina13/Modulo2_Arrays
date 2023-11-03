//EJERCICIOS ARRAYS:
//1- SI
//2- SI
//3- SI
//4- SI
//5- SI
//6- SI
//7- SI
//8- SI
//9- NO RESUELTO. CONSIGO QUE LA PALABRA PLANTIN SE CAMBIE A UN MISMO VALOR, PERO NO QUE ADOPTE LOS VALORES DE LA FLOR PRÓXIMA. AUN VIENDO SI DEBO REFORMULAR. QUIERO VER SI BUSCANDO MAS INFO LO LOGRO. 
//10- NO RESUELTO. CONSIGO QUE PARTE DE LOS ELEMENTOS QUE SE DEBEN ELIMINAR NO FIGUREN, PERO QUEDA COLGADO UN CONEJO EN UNA DE LAS OPCIONES. AUN VIENDO QUÉ DEBO CAMBIAR EN EL CODIGO. O REFORMULARLO
//11- SI
//12- NO RESUELTO. NO CONSIGO QUE LOS RESULTADOS PUSHEEN EN UN NUEVO ARRAY
//13- SI
//14- SI
//15- AUN RESOLVIENDO
//16- PENDIENTE
//17- PENDIENTE
//18- PENDIENTE
// ARRAY + DOM: TODO PENDIENTE


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

//estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //true

//const personajes = ["Sam", "Frodo", "Legolas"]
//const personajes = ["Aragorn", "Sam", "Frodo"]
//const personajes = ['Aragorn', 'Frodo', 'Frodo']
//const personajes = ["Sam", "Orco", "Frodo"]
//console.log(personajes.indexOf("Frodo"))

// const estanJuntos = (personajes) => {
//       if (personajes.indexOf("Sam") === 0 && personajes.indexOf("Frodo") === 1 || personajes.indexOf("Sam") === 1 && personajes.indexOf("Frodo") === 2 || personajes.indexOf("Sam") === 2 && personajes.indexOf("Frodo") === 2) {    
//        return "están juntos"
//      }  else (personajes.indexOf("Sam") === -1); {
//          return "no están juntos"
//      }
//  }

//  console.log(estanJuntos(personajes))

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

/////////////////////////////////////////////////////AUN NO SALE EL 9//////////////////////////////////////////////////////////

//9-

// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

//const plantas = ["tulipan", "plantín", "girasol", "plantín", "sakura", "plantín", "tulipan", "plantín", "girasol", "plantín", "sakura", "plantín"]
//const plantines = ["tulipan", "plantín", "plantín", "plantín", "girasol", "plantín","plantín", "sakura", "plantín","plantín","plantín","plantín",]
//const plantines = ["girasol", "sakura", "plantín", "tulipan", "girasol", "plantín","plantín", "tulipan", "tulipan", "plantín","plantín","plantín",]

//const plantass = plantas.join(", ").toString()

// const germinar = (plantas) =>   {
//     const tulipan = plantas.indexOf("tulipan")
//     const plantin = plantas.indexOf("plantín")
//     for (let planta of plantas){    
        
//     }
// }

// for (let planta of plantas) {
//     if (plantas.indexOf("plantín") === 1 && plantas.indexOf("tulipan") === 0)   {
//     console.log(planta.replace("plantín", "pito"))
// }
// }

//console.log(plantas)

// const germinar = (plantass) =>   {
//     if (plantass.indexOf("plantín") === 1 && plantass.indexOf("tulipan") === 0 && plantass.indexOf("plantín") === 7 && plantass.indexOf("tulipan") === 6){    
//                 let borron = plantass.replace("plantín","alienigena")

//                 return borron
// }
// }

//console.log(germinar(plantass))


// const germinar = (plantas) =>  {
//
//     if (plantines.indexOf("plantín") === 1 && plantines.indexOf("tulipan") === 0){    
//        let borron = plantines.replace(1, 2,"puton")
//        return borron
//     }
    
// }

// console.log(germinar(plantines))

// const germinar = planta.replace("plantín", "tulipan")
// const germinar = (plantines) => {
    
// for (let i = 0; i < plantines.length; i++) {
//     const planta = plantines[i];
    
// }

// }
//console.log(germinar(plantines))

////////////////////////////////////////////////////////////////////////AUN NO SALE EL 10//////////////////////////////////////////////////////////////

//10-

// comer(plantas)
// Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// comer('🐰🥕🥬🥕🚫') // ''
// comer('🥕🥬🐰🥕🥕🥕🚫') // '🥕🥬'
// comer('🐰🥕🥬🥕🚫🥕') // '🥕'
// comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') // '🌱🥕🌱🌷'

//const plantas = ["conejo","zanahoria","puerro", "zanahoria", "cartel"]
//const plantas = ["zanahoria", "puerro", "conejo", "zanahoria", "zanahoria", "zanahoria", "cartel"]
//const plantas = ["rabanito", "zanahoria", "rabanito", "conejo", "rabanito", "puerro", "rabanito", "rabanito", "cartel", "tulipan"]

//array 1
// const comer = (plantas) =>  {
//     plantas.join(" ")
//     for (conejo of plantas) {
//        const p = plantas.splice(0,2)
//     }
//     return plantas
// }

// console.log(comer(plantas))

//array 2
// const comer = (plantas) =>  {
//     plantas.join(" ")
//     for (conejo of plantas) {
//        const p = plantas.splice(2,6)
//     }
//     return plantas
// }

// console.log(comer(plantas))

//array 3 (queda el conejo, no salio)
// const comer = (plantas) =>  {
//     plantas.join(" ")
//     for (conejo of plantas) {
        
//        plantas.splice(-2,1)
       
//     }
//     return plantas
// }

// console.log(comer(plantas))

//11-
//multiplicar(multiplicador, numeros)
//Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

//multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
//multiplicar(10, [2, 5, 77]) // [20, 50, 770]

//const numerillos = [5, 7, 15, 22, 40]

// const numerillos = [2, 5, 77]

// //const multiplicador = 2
// const multiplicador = 10
    
    
// for (let numero of numerillos)  {
//     console.log(numero*multiplicador)
   
// }

///////////////////////////////////////////////////////////////AUN NO SALE EL 12//////////////////////////////////////////////////////////////////////

//12-

//filtrarPorLongitudMayorA(longitud, palabras)
//Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

//filtrarPorLongitudMayorA(4, [
//  'dia',
//  'remolacha',
//  'azul',
//  'sorpresa',
//  'te',
//  'verde',
//]) // ['remolacha', 'sorpresa', 'verde']

//  const longitud = [4]
//  const palabras = ["dia", "azul", "remolacha", "sorpresa", "te", "verde"]

//  const filtrarPorLongitudMayorA = (longitud, palabras) =>    {
//      const newWords = []
//      for (let palabra of palabras)  {
//          if(palabra.length > longitud ) 
                 
//             console.log(palabra)
//              console.log(newWords.push(palabra))
         
         
//     }
//   }

//console.log(filtrarPorLongitudMayorA(longitud, palabras)) 

// for (let i = 0; i < palabras.length; i++) {
//    //const newWords = []
//    const palabra = palabras[i];
//    if (palabra.length > longitud)   {
//       //console.log(newWords.push(palabra))
//       console.log(palabra)
//    }
  
// }



//13-

//recortar(cantidadLetras, palabras)

//const palabras = ["elefante", "dinosaurio", "chocolate", "avion", "america"]

//const palabras = ["algoritmo", "bug", "compilador"] 

//const cantidadLetras = [4]

//const cantidadLetras = (palabra) => palabra.slice(0,4)

//const cantidadLetras = (palabra) => palabra.slice(0,1)

//  const recortar = (palabras, callback) =>   {
//    const newArr = []
//    for (const palabra of palabras){ 
//       const modWord = callback(palabra)
//       newArr.push(modWord)
//    }
//    return newArr
//  }

//  console.log(recortar(palabras, cantidadLetras))

//  const recortar = (palabras, cantidadLetras) =>{   
//     const newArr = []
//     for (const palabra of palabras){   
//       const modWord = cantidadLetras(palabra)
//       newArr.push(modWord)
//     }
//    return newArr
//    }

//    console.log(recortar(palabras, cantidadLetras))

//14-

//sonIguales(a,b)

//const a = [10, 25, 6, 33, 48, 105]
//const b = [10, 25, 6, 33, 48, 105]

//const a = [10, 25, 6, 33, 48, 105]
//const b = [11, 25, 6, 33, 48, 105]

//const a = [10, 25, 33, 48, 105]
//const b = [25, 10, 6, 33, 48, 105]

//const sonIguales = (a,b) => a.toString()=== b.toString()

//console.log(sonIguales(a,b))

//////////////////////////////////////////////AUN RESOLVIENDO EL 15////////////////////////////////////////////////////////////////////////////////////

//15-

//obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)

const jugadoraA = "Ada"
const jugadoraB = "Grace"

const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

//puntajesA[0] vs. puntajesB[0] -> Gana B
//puntajesA[1] vs. puntajesB[1] -> Gana B
//puntajesA[2] vs. puntajesB[2] -> Empate

const resultadoEmpate = (puntajesA, puntajesB) => puntajesA[0] === puntajesB[0] || puntajesA[1] === puntajesB[1] || puntajesA[2] === puntajesB[2]
const resultadoGanaA = (puntajesA, puntajesB) => puntajesA[0] > puntajesB[0] || puntajesA[1] > puntajesB[1] || puntajesA[2] > puntajesB[2]
const resultadoGanaB = (puntajesA, puntajesB) => puntajesA[0] < puntajesB[0] || puntajesA[1] < puntajesB[1] || puntajesA[2] < puntajesB[2]


const obtenerPuntajeGanador = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {   

    if(resultadoEmpate(puntajesA, puntajesB)){
      return "Empate"   

      }else if  (resultadoGanaA(puntajesA, puntajesB)){
           return jugadoraA
      } else if (resultadoGanaB(puntajesA, puntajesB)){
        return jugadoraB
     }
        

  }

  console.log(obtenerPuntajeGanador(jugadoraA, jugadoraB, puntajesA, puntajesB))
// }

// console.log(puntajesA[i])

// const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) =>{  
//      if (puntajesA.charAt(0)===puntajesB.charAt(0))
//      return "empate"
// }





//////////////////////////////////////////////////////////////ejercicio reservado para examinar luego////////////////////////////////////////////////

//console.log(sonIguales(a,b))

// const simbolo1 = "sol"

// let acc= ""

// for (let i = 0; i < tragamonedas.length; i++) {
//    // if (tragamonedas[i] == "sol")   {
//     if (tragamonedas[i] == 1)   {
//         acc += " sol"
//     }
    
// }

// console.log(acc)