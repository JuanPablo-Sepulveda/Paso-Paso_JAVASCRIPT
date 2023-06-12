//METODOS FUNCIONALES (forEach;filter;reduce;every;find;findIndex;some;sort)--->estos metodos nos sirben en parte para remplazar de algunos  problemas los bucles

//ForEach--->

//el forEach se utiliza para recorrer los distintos puestos de un arreglo es decir, recorrer un puesto a la vez por ejemplo en una lista

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum);
// 1
// 2
// 3
// 4
// 5

// se puede usar para recorrer todo el array y luego realizar una operacion con la misma por ejemplo una suma:

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));

console.log(sum);//--->recurre todo el array en  su posicionamiento(1 , 2 , 3 , 4 , 5)
                                                                 // 0   1   2   3   4
// y los suma consecutivamente para obtener como resultado 15                                                                


//MUY UTIL  PARA HACER LISTAS

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));
// FINLAND
// DENMARK
// SWEDEN
// NORWAY
// ICELAND

//METODO MAP---> El  metodo map cumple la misma funcion que el metodo forRach con la diferencia mas grande que el metodo map nos permite ALMACENAR los datos o resultados de la operacion realizada mientras que el metodo forEach solo nos permite visualizar el resultado de la operacion pero no reutilizarlos. por ejemplo

const numeros=[1,3,5,7,9];

//forEach

const respuesta1=numeros.forEach(x=>x*5);
console.log(respuesta1);//---> error(ya que el metodo forEach no nos permite guardar el dato de la respuesta y  reutilizarlo)


//map
const respuesta2=numeros.map(x=>x*5);
console.log(respuesta2;)//--->[5,15,25,35,45]

//practica

const nombres = ["Asabeneh", "Mathias", "Elias", "Brook"];
const nombresToUpperCase = nombres.map((nombres) => nombres.toUpperCase());
console.log(nombresToUpperCase);//---> Devuelve a los strings en mayusculas

//METODO FILTER--->

//este metodo filtra elementos siempre y cuando cumplan con las condiciones que imponemos a la horade utilizarlo, devolviendo un array completamente nuevo. Podemos utilizarlo para filtrar palabras o partes explicitas de algunas palabras o numeros con condiciones especiales Por Ejemplo en estos ejercisios que practique podemos notar las diferentes funciones del  metodo filter acompañado con otra propiedad para que los arreglos tengan diferente comportamiento:

const paises=["ireland","albania","argentina","finland","japan","kenya","canada"]

//PAISES QUE CONTIENEN LAND
const paisesQueContienenLand = paises.filter((paises)=>paises.includes("land"));
console.log(paisesQueContienenLand);//--->["ireland",findland]

//PAISES QUE TERMINAN CON LA LETRA A
const paisesQueTerminanConA= paises.filter((paises)=>paises.endsWith("a"));
console.log(paisesQueTerminanConA);//--->["albania","argentina","kenya","canada"]

//paises que contienen 5  letras

const paisesQueTienenCincoLetras= paises.filter((paises)=>paises.length===5)
console.log(paisesQueTienenCincoLetras)//--->["Japan","Kenya"]

const puntos=[
    {nombre: "adrian", punto:24},
    {nombre: "juan", punto:35},
    {nombre: "pedro", punto:74},
    {nombre: "jose", punto:82},
    {nombre: "papo", punto:58}
]

const puntosMayoresVeinte = puntos.filter((punto)=>punto.punto>20);
console.log(puntosMayoresVeinte);
// {nombre: "adrian", punto:24},
// {nombre: "juan", punto:35},
// {nombre: "pedro", punto:74},
// {nombre: "jose", punto:82},
// {nombre: "papo", punto:58}

const puntossMayoresVeinteMenorCincuenta = puntos.filter((punto)=>punto.punto>20 && punto.punto<50)
// [
//     { nombre: 'adrian', punto: 24 },
//     { nombre: 'juan', punto: 35 }
//   ]

//METODO REDUCE-->Toma una función de devolución de llamada (callback) y aplica esa función a cada elemento de la matriz, acumulando un valor resultante.

const numeros =[1,2,3,4,5];

const suma= numeros.reduce((acumulador,current)=>acumulador+current,0);
console.log(suma)//---> 15

//el metodo reduce funciona de una menra particular ,diferente que si sumaramos con forEach o Map ya que el metodo reduce funciona con un acumulador y un current que se ejecutan en forma consecutiva como un vagon de tren ej:
item 1--->acumulador = 0 current = 1 //se suma el current y el a cumulador teniendo en cuenta que el acumulador de la suiguiente operacion sera el resultado del current y acumulador de la primera operacion
item 2--->acumulador = 1 current = 2
item 3--->acumulador = 3 current = 3
item 4--->acumulador = 6 current = 4
item 5--->acumulador = 10 current = 5
// suma = 10+5

//propiedad bastante complicada  pero creo que entendiendo bien la logica y conocer donde posicionarlo dependiendo de la misma se puede llegar a hacer facil


//METODO EVERY--->
//el metodo every sirve para comprobar si todos los elementos son iguales en aspecto respondiendo unicamente con booleanos

const nombres = ["juan","pepe","marcos","lucas"]
const somosString = nombres.every((nombres)=>typeof nombres==="string")



