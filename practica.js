// objeto:player 1 
//nombre: maraio
//color sombrero: rojo
//metodos: correr, saltar; saludar

//objeto:player 2
//nombre: luigi
//color sombrero: verde
//metodos: saoltar, correr, saludar


//METODO CORTO
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);

    }
}

let persona1 = new Persona("juan" , 20);
persona1.saludar();

//METODO LARGO 
class Player{
    constructor (nombre , colorSombrero){
     this._nombre=nombre;
     this._colorSombrero=colorSombrero
    }
    saltar(){}
    correr(){}
    saludar(){
     return `hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }
 }
 
 let player1 = new Player('MARIO', 'ROJO')
 let player2 =new Player('LUIGI', 'VERDE')
 
 console.log(player1)
 console.log(player2)
 
 console.log(player2.saludar())

 //FILTER, MAP, REDUCE

 //MAP 
//(DEVUELVE LOS VALORES MULTIPLICADOS X2)
 const numeross = [3, 10, 20,50];
const  dobles = numeros.map(function(numero){
  return numero * 2;
});

//(UN ARRAY DE OBJETOS CON PRODUCTOS Y SUS DESCUENTOS)

const producto =[
    {id: 'producto1',nombre:'camiseta',precio:500},
    {id:'producto2',nombre:'zapatillas',precio:2000},
    
    {id:'producto3', nombre:'pantalon',precio: 1500},
  ];
  
  const productosConDescuento= productos.map(function(producto){
    if (producto.precio < 1000){
      return producto;
    }
    return {
      ...producto,
      precio: producto.precio *0.9
    };
  });
  
  productosConDescuento
  
//FILTER 

//(FILTRADO DE PRODUCTOS CAROS Y BARATOS)

const productos =[
    {id: 'producto1',nombre:'camiseta',precio:500},
    {id:'producto2',nombre:'zapatillas',precio:2000},
    
    {id:'producto3', nombre:'pantalon',precio: 1500},
  ];

const esBarato = producto => producto.precio< 1000;
const esCaro = producto => !esBarato(producto);


const productosBaratos = 
  productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);


//(NUMEROS REPETIDOS)

const numero = [1, 2, 3, 4, 3, 1];

const numerosUnicos = numeros.filter((numero,posicion,numeros)=>{
  return posicion === numeros.indexOf(numero);
})
numerosUnicos

//REDUCE

//(REDUCIR TODO EL ARRAY RETORNANDO UN NUEVO OBJETO)

const numeros =[3, 10, 20, 50];
let total = numeros.reduce((acumulador, numero)=>{
  return acumulador + numero;
},0);



/* hoy aprendi a utilizar if*/

const edad=16;                                    
if(edad>=18){
  console.log("es mayor de edad")
} 
else if(edad>=10){
  console.log("es casi mayor de edad")
} 
else{
  console.log("es menor de edad")
}


const edadd=18
const tieneCarnet= true

if(edadd>=18){
  console.log("puede conducir")
}else if(tieneCarnet= false){
  console.log("no puede manejar")
}else{
  console.log("no puede irse")
}
 

// APRENDIENDO CICLO WHILE//
let cuentaAtras = 15
while (cuentaAtras>0){
  cuentaAtras=cuentaAtras-1
  console.log(cuentaAtras+"resultado")
}

//Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break//


let cuentaAtrass = 10

while (cuentaAtrass > 0) {
  console.log(cuentaAtras)
  cuentaAtrass = cuentaAtrass - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtrass === 5) {
    break // <---- salimos del bucle
  }
}

//Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue//

let cuentaAtrasss = 10

while (cuentaAtras > 0) {
  cuentaAtrasss = cuentaAtrasss - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtrasss % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtrasss)
}

//aprendiendo a usar for

let numerosss=[10,20,30,40,50,60,70,80,90,100]
for (let i = 0; i < numerosss.length; i++) {
  console.log(numerosss[i]);
  
}

let numeros =[1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < numeros.length; i++) {
  console.log( numeros[i]);
  
}

let socios=["maria","adrian","juan","luca","marcos"]

for (let i = 0; i < socios.length; i++) {
  console.log(socios[i]);
  
}

//SWIHT

let dia= 3

switch (dia) {
  case 0:
    console.log("domingo");
    break;
    case 1:
    console.log("lunes");
    break;
    case 2:
      console.log("martes");
    break;
    case 3:
      console.log("miercoles");
    break;
    case 4:
      console.log("jueves");
    break;
    case 5:
      console.log("viernes");
    break;
    case 6:
      console.log("sabado");
    break;
  default:
    break;
    
}


// vamos con otro mas 

var edad = 24

switch (true) {
  case (edad>=18 && edad<=25):
    console.log("todavia estas joven")
    break;
    case (edad>=26 && edad<=50):
      console.log("estas pasandote")
    
    break;
    case (edad>=51 && edad<=99):
      console.log("estas viejo")
    
    break;

  default:
    break;
}


const precio= 1534
switch (true) {
  case (precio>=1000 && precio<=2000):
    console.log("esta barato me lo llevo")
    break;
    case (precio>=2001 && precio<=10000):
    console.log("no es lo que esperaba ,pero me lo llevo")
    break;
    case (precio>=10000 && precio<=20020):
    console.log("esta demasiaco caro ,no gracias")
    break;

  default:
    break;
}

let dia = lunes
switch (tareasRealizadas) {
  case lunes :
    console.log(nombre="martin",tarea="Realizada con exito",tipoDearea="acomodar la mercaderia")
    break;
    case martes:
    
    break;
    case miercoles:
    
    break;
    case jueves:
    
    break;
    case viernes:
    
    break;
    case sabado:
    
    break;
    case domingo:
    
    break;

  default:
    break;
}
//impresionante lo que pueden hacer los comandos de bucles es hermoso