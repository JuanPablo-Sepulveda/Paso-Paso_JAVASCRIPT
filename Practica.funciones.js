//FUNCIONES-------------------------------------------------------------

// Una función en JavaScript se define utilizando la palabra clave function, seguida de un nombre para la función, paréntesis 
// que pueden contener parámetros y un bloque de código encerrado entre llaves.


function miFuncion(parametro1, parametro2) {
// Código a ejecutar
//Puede devolver un valor utilizando la palabra clave
'return'
// de acceder a los parámetros y hacer otras operaciones
}
// En el ejemplo anterior, miFuncion es el nombre de la función, y puede tener uno o más parámetros separados por comas.
//  Los parámetros son variables que aceptan valores que se pasan a la función cuando se invoca. Dentro del bloque de código de 
//  la función, puedes realizar cualquier tipo de operación, como cálculos, manipulación de datos, llamadas a otras funciones, 
//  entre otros.Para invocar o llamar a una función, simplemente usas su nombre seguido de paréntesis y, si es necesario,
//  pasas los valores de los argumentos correspondientes a los parámetros definidos en la función. 
//  Aquí tienes un ejemplo de cómo se invoca una 
 
 
 functión miFunction(valor1, valor2);


// Algunas funciones pueden devolver un valor utilizando la palabra clave return. Cuando se ejecuta la instrucción return, 
// la función se detiene y devuelve el valor especificado. Aquí tienes un ejemplo:

function suma(a, b) {
  return a + b;
}
var resultado = suma(3, 5);
console.log(resultado); // Imprime: 8

// En este ejemplo, la función suma toma dos parámetros y devuelve la suma de los valores pasados. El valor devuelto por la función se
// almacena en la variable resultado y luego se imprime en la consola.Las funciones en JavaScript también pueden ser anónimas,
// es decir, no tienen un nombre definido y se asignan a una variable o se utilizan directamente. Esto es útil cuando solo necesitas 
// utilizar la función en un lugar específico sin necesidad de reutilizarla en otros lugares.
// Espero que esta explicación te haya ayudado a comprender qué son las funciones en JavaScript.



//OBSERVACIONES Y ANALISIS--------------------------------------------------------------------

function sumar(x, y) {
  let suma = x + y
}

console.log(x)

sumar(10,4)
//esto genera un error ya que los parametros solo pueden ser accedidos dentro de la funcion


function intentarCambiar(x) {
  x = 100//---X=100
}

let x = 1
intentarCambiar(x)
console.log(x)//---> X=!

// este ejercicio pude resolverlo mas que nada por tener algo visto acerca del tema de contextos. el valor entro del contexto global va a ser 1 , pero si pedimos un console.log(x)dentro de la funcion la x pasaria  a valer 100 ya que el contexto donde operamos sera la que va a marcar la diferancia

//si sumamos un valor numerico y un string el resultado va a ser un string
function sumar(valor1,valor2) {
  const suma=valor1+valor2
  console.log(suma)//--->"10Hola"
}

sumar(10,'Hola')

//A la hora de realizar una operacion con un booleano estos pasan a tener un valor numerico En el caso de TRUE=1, En el caso de FALSE=0

function sumar(valor1,valor2) {
  const suma=valor1+valor2
  console.log(suma)//---> 11
}

sumar(10,true)
//Hice para practicar

function operar() {
  const op=true + 5+ true + false - true + 3
  console.log(op)//---> 9
}

operar()

//Juntando el metodo for E if se pueden realizar una especie de filters pero para cosas puntuales

function cantidadLetrasA(palabra) {
  let cant = 0
  for (let letra of palabra) {
    if (letra === 'a' || letra === 'A') {
      cant++
    }
  }
  console.log(cant)//---> tiene 5 letras A
}

cantidadLetrasA('cazafantasmas')

//EMPIEZO CON FUNCIONES FLECHAS---------------------------------------------------------------


// En lugar de la palabra clave function, utilizamos una flecha => para definir la función.

//FUNCION 1 Declaración de función regular
function sumar(a, b) {
  return a + b
}

// FUNCION 2 Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

//FUNCION 3 Función flecha con return implícito
const sumarFlecha = (a, b) => a + b



//aca podemos observar como progresivamente la funcion se va modificando hasta quedar en una version de la funcion mas explicita donde  al final(funcion 3) podemos observar el resultado de la funcion flecha en su maxima ejecuccion, generando que la sintaxis quede mucho mas corta y con el mismo resultado

//Las funciones flechas nos sirven principalmente para tener una sintaxis mas explicita ,un return implicito dondela orden del return no existe pero al tener solo una linea implicitamente le ordenamos el return de X cosa



