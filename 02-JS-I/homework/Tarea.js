// var nombre = "aura";
// var arrayname = nombre.split('');
// var may1 = arrayname.shift();
// var may = may1.toUpperCase();
// arrayname = arrayname.toString();
// console.log (arrayname);

// var nombre = "aura";
// var name = nombre.charAt(2);
// console.log (name.slice(1));

//var numeros = [1, 2, 3, 4, 5];
// var sumaTotal = 0;
// var suma = numeros.reduce( function(sumaTotal, item, i){
//   // sumaTotal = sumaTotal + item;
//   // console.log (sumaTotal);
//   return sumaTotal + item;
// })

// console.log (suma);
//var numeros = [1, 4, 9, 16, 25];

// var number = numeros.forEach( function(num){
//   console.log(num);
// })

// console.log (number);
// var n = [];
// function recorrido(num){
//   n = num.push();
// } 

// numeros.forEach(recorrido);

// console.log(n);
// const arr = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
// const nuevoArr = arr.map((e) => e);

// console.log(nuevoArr); 
var array = [1, 4, 9, 16, 25];
var num = [];
   for (let i = 0; i < array.length; i++) {
     var b = array[i];
    num.push(b);
   }

   console.log (num);
