// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // function sumararrays(array){
  //   console.log (array+1);
  // }

  // for (var array of arrays) {
  //   sumararrays(array);
  // }
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // var frase = palabras.join(" ");
  // return frase;
  var string = '';
  for (let i = 0; i < palabras.length; i++){
    if(i === palabras.length - 1){
      string = string + palabras[i];
    } else string = string + palabras[i] + " ";
  }
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
  if (elemento === element) return true
  }
  return false; //Se deja afuera porque primero se debe recorrer el arreglo y luego realizar el retorno.
   
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var a = 0;
  for (let i = 0; i < numeros.length; i++) {
    a = a + numeros[i];
  }
  return a;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var a = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    a = a + resultadosTest[i];
  }
  return a/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > a) {
      a = numeros[i];
    }
  }
  return a;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var a = [];

  for (let i = 0; i <= 10; i++) {
    var b = 6 * i;
    a.push(b)
  }
  return (a);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var a = 1;
  if(arguments.length === 0) return 0;
    else {
      for (let i = 0; i < arguments.length; i++) {
        a = a * arguments[i];
      }
      return a;
    }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // var a = 0;
  // var b = [];

  // for (let i = 0; i < arreglo.length; i++) {
  //   if (arreglo[i] > a) {
  //     a = numeros[i];
  //     b = arreglo.push(a)
  //   }
  // }
  // return b;
  var contador = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if(arreglo[i] > 18){
      contador++
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí   
  // for (let i = 0; i < numeroDeDia.length ; i++) {
  //   var a = numeroDeDia[i];
  // }
  //     if (a === 1) return "Es fin de semana";
  //      else if (a === 7)  return "Es fin de semana";
  //       else return "Es dia Laboral";
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // if (n[0] === 9) return true;
  //   else return false;
  var entero = 10;
  while (entero > 9) {
    entero = Math.trunc(n / 10)
  }
  if(entero === 9 || n === 9) return true;
    else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  // for (let i = 1; i < arreglo.length ; i++) {
  //   var a = arreglo[0];
  //   if (a === arreglo[i]) return true;
  //     else return false
  // }
  let elemento = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != elemento) return false;
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var a = [];
  
  for (let i = 0; i < array.length ; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      a.push(array[i]);
    } 
  }
  if (a.length < 3) return "No se encontraron los meses pedidos";
    else return a;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var a = []
  for (let i = 0; i < array.length ; i++) {
    if (array[i] > 100) {
      a.push(array[i])
    }
  }
  return a;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  // var a = [];
  // for (let i = 0; i < 10; i++){
  //   var b = numero + 2;
  //   a.push(b);
  //   if (b === i) {
  //     break;
  //   }
  //   return "Se interrumpió la ejecución"
  // }
  // return a;
  let a = [];
  for (let i = 0; i < 10; i++) {
      numero = numero + 2;
      if(numero === i){
        return "Se interrumpió la ejecución";
      }
    a.push(numero);
  }
  return a;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let a = [];
  for (let i = 0; i < 10; i++) {
      if(i === 5){
        continue;
      } else {
        numero = numero + 2;
        a.push(numero);
      } 
  }
  return a;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
