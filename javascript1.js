// en estos apuntes quizas se vean temas repetidos de otros archivos pero con la diferencia que en este archivos veo mas en profundidad el tema : CLOSURES, METODOS DE CONTEXTO,SINGLE THREADED Y SINCRONICO

Javascript//(Clousures)

//el closure captura el estado de las variables en el momento de su creación


function exterior() {
    var mensaje = 'Hola';
  
    function interior() {
      console.log(mensaje);
    }
  
    return interior;
  }
  
  var closure = exterior();
  closure(); // Imprime "Hola"

//   En resumen, los closures en JavaScript son funciones que mantienen acceso a variables en su entorno léxico incluso después de que su función externa haya terminado de ejecutarse. Son una característica poderosa que permite la creación de funciones flexibles y reutilizables, y son ampliamente utilizados en la programación JavaScript.
  
//practica--->

var saludar = function(nombre){
    return "hola" + nombre
}
saludar("pedro") // devuelve "hola pedro"

//-----------------------------------------
const a = " hey ";

function global(){
  const b = "como estas "
  function local(){
    const c = "todo bien ??"
    return a + b + c;
  }
  return local;
}

global()
global()()
const clousure = global()();
clousure
//---------------------------------------
const miContador = (function(){
    let _contador = 0;
    
    function incrementar(){
      return _contador++;
    }
    function decrementar(){
      return _contador--;
    }
    function valor(){
      return _contador;
    }
    return {
      incrementar,
      decrementar,
      valor
    }
    
  })();
  
  miContador.valor()// deuvelve 0
  miContador.incrementar()// deuvelve 0
  miContador.incrementar()// deuvelve 1
  miContador.incrementar()// deuvelve 2
  miContador.valor()// deuvelve 3
  miContador.decrementar()// deuvelve3 
  miContador.valor()// deuvelve 2
  miContador.decrementar()// deuvelve 2
  miContador.decrementar()// deuvelve 1
  miContador.valor()// deuvelve 0

  // aca usamos los clousures para crear una orden de numeros de menor a mayor y de mayor a menor iteractuando con las operaciones como la suma o la resta para realizarlo de la manera mas eficiente y que ayude a entender el funcionamiento del codigo. Tambien podemos ver como remarque a las funciones como global y local ya que la local integra a la global es decir la funcion local esta dentro de la funcion global desde ese punto podemos observar como la funcion local trabaja con los parametros que global les ofrece o los parametros que nosotros le ofrecemos desde afuera
  //En resumen trabajar con metodos clousures nos ayuda bastante ya que trabajamos de adentro hacia afuera



  //Saque los ejercicios de una paguina de programacion para practicalos con sus respectivas consignas

 // Ejemplo 1: Closure simple
 function saludo (nombre){
    var mensaje="hola como estas ?"
    function saludando (){
      console.log(mensaje + nombre)
      
    }
    return saludando;
  }
  
  var hola = saludo ("juan")
  hola()//---> devuelve hola como estas ? juan
  
  // Ejemplo 2: Closure con contador
  function contador() {
    var cuenta = 0;
    return function() {
      cuenta++;
      console.log(cuenta);
    }
  }
  
  var increment = contador();
  increment(); // Devolverá "1"
  increment(); // Devolverá "2"
  
  // Ejemplo 3: Closure con parámetros
  function adder(x) {
    return function(y) {
      return x + y;
    }
  }
  
  var add5 = adder(5);
  console.log(add5(3)); // Devolverá "8"
  console.log(add5(7)); // Devolverá "1
  //Esto nos permite trabajar con uhna funcion dentro de otra funcion y asignarle mas de un parametro a una funcion sin terminar de declararla permanentemente, sino dejandole lugar para  poder definir mas de una vez otro parametro tal como puede ser un nombre o cualquier tipo de dato.

  // sumar factoriales 
  function sumaFactorial (n,m){
    if(n>=m)return "INVALID"
    
    var sumar = 0
    for(var i = n; i<m;i+=n){
      sumar +=i
    }
      return sumar
  }
  
  sumaFactorial(2,9)


  //METODO DE CONTEXTO (Metodos Call,Apply y bind)


  const persona1= {
    name : "juan"
    Say(){
      console.log(`mi nombre es ${this.name}`)
    }
    Come(comida){
      console.log(`${this.name} come ${comida}`)
    }
  }

  const persona2= {
    name : "jose"
  }

  persona1.say()//---> devuelve mi nombre es juan
  persona1.Come("atun")//---> juan come atun

  // Si yo pidiera la devolucion de persona1.say(), Esta devolveria "Mi nombre es juan" ya que si bien hay una funcion dentro de una constante el metodo this llama a el dato que tenga asignado sin importar el scope o su contexto de ejecucion para asignarselo asi mismo como le fue ordenado mediante el codigo. Este metodo es muy util ya que nos permite asignar un dato si nnecesidad de repetirlo por cada linea de codigo y es muy versatil ya que podemos remplazar el dato simplemente cambiando el valor asignado de una variable sin alterar lineas de codigos inecesariamente 

  //El metodo call se puede utilizar para apuntar el contexto de ejecucion hacia donde sea necesario o a alguna funcion especifica
  // Por ejemplo si yo quisiera usar a la persona 2 con la misma funcion de la persona 1(en este caso say), Para decir su nombre ,simplemente rediriguiria la funcion en el contexto de la persona dos

  const persona1= {
    name : "juan",
    say(){
      console.log(`mi nombre es ${this.name}`)
    },
    come(comida){
      console.log(`${this.name} come ${comida}`)
    }
  }

  const persona2= {
    name : "jose"
  }
  
persona1.say()//--->"mi nombre es juan"
persona1.come("atun")//---> "juan come atun"
persona1.say.call(persona2)//---> "mi nombre es juan"
persona1.come("arroz").call(persona2)//---> "juan come arroz"

//EL METODO CALL SIRVE PARRA REDIRECCIONAR EL CONTEXTO

//el metodo apply sirve de igual manera pero con una diferencia, la diferencia es simplemente como ellos reciben los parametros
//por ejemplo

persona1.come.call(persona2,"hamburgesa")//---> devuelve "jose come hamburgesa"
persona2.come.apply(persona2,["hamburgesa"])//---> devuelve "jose come hamburgesa"

//con ambos metodos se devuelvelo mismo con la diferencia de que apply devuelve los parametros como un arreglo y el metodo call no


//BIND

//bind nos devuelve una funcion nueva con el contexto que le asignemos 



// ARBOLES Y RECORRIDOS CON RECURSION INCLUIDA 

//FORMULA BASE DE UN ARBOL SIMPLE 

function BinarySearchTree ( value){
  this.value=value;
  this.left=null;
  this.right=null;
}

//este codigo se usa para marcar los parametros del arbol ( valor,derecha o izquierda)

BinarySearchTree.prototype.insert=function(value){
  if(value<this.value){
    if(!this.left){
      this.left=new BinarySearchTree(value)
      return value
    }else{
      this.left.insert(value)
    }
  }else{
    if(!this.right){
      this.right=new BinarySearchTree(value)
      return value
    }else{
      this.right.insert(value)
    }
  }
}
// esta es la formula que se usa para determinar el posicionamiento de los nodos y como van a desplazarse dependiendo de sus valores(si son menores a la izquierda de l nodo principal y si son mayores a la derecha del nodo principal)



 var miArbol= new BinarySearchTree(20)
miArbol.insert(18)
miArbol.insert(22)
miArbol.insert(15)
miArbol.insert(25)
console.log(miArbol)

//esta ultima estructura de codigo determina la creacion de los nodos y sus valores