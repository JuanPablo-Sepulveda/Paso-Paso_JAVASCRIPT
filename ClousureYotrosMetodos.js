//SE EMPIEZA CON CLOUSURE

const { createTestScheduler } = require("jest")
const { cacheFunction } = require("./homework")


function saludar(saludo){//hola
    return function(nombre){
        console.log(saludo+" "+nombre)
     }
}

var saludarHola=saludar("hola")

saludarHola("juan")

/* La variable var saludarHola devuelve el interior , Es decir una funcion (y dentro de esa funcion el console.log(hola))
    Y saludarHola ejecuta el interior de la primera funcion es decir el mensaje 
    
    el dato exterior por mas que se destruya los contextos por el orden los valores siguen quedando asociados a los valores finales como el caso de "HOLA" donde podemos ver que su contexto sigue aportando datos por mas que el codigo ya no lo lea*/

var crearFuncion=function(){
    var array=[]

    for (var i = 0; i < 3; i++) {
        array.push(
            function(){
                console.log(i)
            }
        )
        
    }

    return array
}

var arr= crearFuncion()

 (arr[0]);//3
(arr[1]);//3
(arr[2]);//3

//tema bastante complejo pero una vez entendi los contextos de creacion y ejecucion es un mundo aparte,mucho mas didactico

//AHORA BIND,CALL Y APLY

var alumno={
    name:"ian",
    last:"gere"
}
var logueaName=function() {
    console.log(this.name);//IAN  
}

var logNameAlumno=logueaName.bind(alumno)


logNameAlumno()


//EJEMPLO 2



var persona={
    nombre:"sepulveda",
    saludar:function(){
      console.log( "hola soy " + this.nombre)//"HOLA SOY SEPULVEDA"
    }
  };
  
  var saludarPersona=persona.saludar.bind(persona);
  saludarPersona();
  


/* ME COSTO QUINCE MINUTOS PERO LOGRE EJEMPLIFICAR UN EJERCICIO DE BLIND Y ENTENDERLO.
ESTE ENLAZA UNA FUNCION DENTRO DEL CONTEXTO Y MEDIANTE EL METODO THIS PODEMOS ASIGNARLE QUE PARAMETRO UTILIZAREMOS A NUESTRA CONVENIENCIA*/


/*METODO CALL

ESTE METODO FUNCIONA IGUAL QUE EL BIND CON LA DIFERENCIA QUE ESTE SIMPLEMENTE NOS RETORNA EL VALOR OURO DEL THIS POR EJEMPLO 
SI LO APLICAMOS AL CODIGO QUE LOGRE REALIZAR CON BIND RETORNARIA ABSOLUTAMENTE LO MISMO CON LA DIFERENCIA QUE EN EL ENUNCIADO 
SIMPLEMENTE REPASAMOS CALL POR BIND ,Y OPERATIVAMENTE ESTE PASARIA A IGNORAR LA FUNCIONES HASTA LLEGAR AL THIS
. ES DECIR QUE EL CALL NO VA A NECESITAR EJECUTAR NINGUNA FUNCION PARA OBTENER EL RESULTADO ESPERADO.

var persona={
    nombre:"sepulveda",
    saludar:function(){
      console.log( "hola soy " + this.nombre)     RETORNO CON BIND "HOLA SOY SEPULVEDA"
                                                RETORNO CON CALL "HOLA SOY SEPULVEDA"
    }
  };
  
  var saludarPersona=persona.saludar.bind(persona);
  saludarPersona();*/
  

  var alumno={
    name:"ian",
    last:"gere"
}
var logueaName=function() {
    console.log(this.name);//IAN  
}

logueaName.call(alumno)


let logNombre=function(arg1,arg2){
    console.log(arg1 + " "+ this.name+ " "+ arg2)
}
logNombre.call(alumno, "hola", "comoestas?!")


/* METODO APPLY realiza exactamente lo mismo que el metodo call pero con la facilidad qie podemos enviar 
argumentos de manera
mucho mas   directa
*/
/*la diferencia entre bind ,call y apply simplemente es la forma de trabajar con los argumentos y como enviar 
y realizar los mismos*/

