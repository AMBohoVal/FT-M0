// Do not change any of the function names

const { functionDeclaration } = require("@babel/types");

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  // return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  var newname = '';
  for (var i = 0; i < nombre.length; i++) {
    if(i === 0){
      newname = newname + nombre[i].toUpperCase();
    } else {
      newname = newname + nombre[i];
    }
  }
  return newname;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // var suma = numeros.reduce( function(sumaTotal, item, i){
  //   return sumaTotal + item;
  // })

  // cb (suma);

  var suma = numeros.reduce( function(sumaTotal, item, i) {
      sumaTotal = sumaTotal + item;
      return sumaTotal;
  }, 0)
  cb (suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // for (let i = 0; i < array.length; i++){
  //   cb (array[i]);
  // }
  array.forEach(function(valor) {
      cb(valor);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // var nuevoArr = array.map(
  //   function(newMap) {
  //     return cb(newMap);
  //   }
  // );
  // return nuevoArr;
  var nuevoArr = array.map( function(newMap) {
      return cb(newMap);
  })
  return nuevoArr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // var nuevoArray = [];
  // for(let i = 0; i<array.length; i++) {
  //   if(array[i][0] === "a") {
  //     nuevoArray.push(array[i])
  //   }
  // }
  // return nuevoArray;
  var nuevoArray = array.filter( function(filtro) {
      if (filtro[0] === 'a'){
        return filtro;
      }
  })
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
