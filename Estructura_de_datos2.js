// Hoy toca ver Estructura de datos comenzando por Lista de datos y Hash Table.
// Una lista enlazada funciona como una especie de vagones de tren ,cada vagon(en este caso estructura de datos) esta enlazada con dos partes que consta de nodos, donde cada nodo contiene un valor y un enlace al siguiente nodo en la lista. A diferencia de las listas de datos convencionales, como los arreglos, una lista enlazada no almacena elementos en ubicaciones contiguas de memoria. En cambio, cada nodo tiene una referencia al siguiente nodo en la lista
// para empezar debemos identificar a la primera ubicacion dentro de la memoria que vendria a ser el head que va a estar  dentrro de una funcion constructora

function LinkedList(){
    this.head = null;  //{data:5 next:{data:2,next:null}}
}

function Node(value){
    this.data = value;
    this.next = null;
}

LinkedList.prototype.add = function(value){ // 3
    let node = new Node(value)// aca se crea un objeto que  tiene data:3 y un next=null
    let current = this.head // {data:5 next:{data:2,next:null}}

    if(!current){
        this.head = node
        return node
    }
    while(current.next){
        current = current.next // con este comando el current deja de mirar esto {data:5 next:{data:2,next:null}} para mirar solo al next //-{data:5next://-----{data:2,next:null}}
    }
    current.next = node
    return node;
}

// para devolver los valores que se guardan en DATA
LinkedList.prototype.getAll=function(){
    let current = this.head;

    if(!current){
        console.log("la lista esta vacia");
        return;
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return
}

let newList = new LinkedList()
newList.add(1)
newList.add(2)
newList.add(3)
newList.add(4)
newList.add(5)
//newList.getAll()

console.log(newList)

/* esto devuelve la lista enlazada: 

Node {
  data: 1,
  next: null,
  __proto__: { constructor: ƒ Node() }
}
Node {
  data: 2,
  next: null,
  __proto__: { constructor: ƒ Node() }
}
Node {
  data: 3,
  next: null,
  __proto__: { constructor: ƒ Node() }
}
Node {
  data: 4,
  next: null,
  __proto__: { constructor: ƒ Node() }
}
Node {
  data: 5,
  next: null,
  __proto__: { constructor: ƒ Node() }
}
LinkedList {
  head: Node {
    data: 1,
    next: Node {
      data: 2,
      next: Node {
        data: 3,
        next: Node {
          data: 4,
          next: Node { data: 5, next: null }
        },
        */





// El Head vendria a ser la locomotora de la lista enlazada y cada head y node consta de dos parte:DATA Y NEXT. Si el primer vagon osea head no contiene valor hay que crear un PROTOTYPE para que la data del head sea la misma  que la del nodo siguiente. ya que sin data el head no funciona y si el head no funciona los siguientes nodos tampocos.

// en el suiguiente caso tenemos mas de un nodo


//HASH TABLE

// Una tabla hash, también conocida como hash table o hashmap, es una estructura de datos que utiliza una función hash para mapear claves a valores. Proporciona un acceso rápido a los datos almacenados, ya que se utiliza la clave para calcular la posición en la que se guarda el valor en la tabla.
// la hash table nos permite guardar datos de manera filtrada, estructurando  datos de  manera mas rapido y eficaz

function HashTable(){
    this.table = []
    this.numBuckets = 35
}

HashTable.prototype.hash = function(key){
    let hash = 0

    for(let i = 0; i<key.length;i++){
        hash +=  key.charCodeAt(i)
    }
    return hash % this.numBuckets
}

let newTable = new HashTable()
newTable.hash("dai")

console.log(newTable);


// PRACTICA LISTA ENLAZADA

let locomotora={
  gancho: null
}
let vagon ={
  carga : "palabra",
  gancho:null
}
let vagon2={
  carga:900,
  gancho:null
}
let vagon3={
  carga:[5,6,4],
  gancgo:null
}

locomotora.gancho=vagon
locomotora.gancho.gancho=vagon2
locomotora.gancho.gancho.gancho=vagon3

//forma conceptual para entender a la funcion


function Lista(){
  this.head=null
}
function Nodo (value){
  this.value=value;
  this.next=null;
}

Lista.prototype.add=function(value){
  if(this.head===null)this.head=new Nodo(value)
}

let list = new Lista()
list.add(35)
list

//PASO A PASO PARA CREAR UNA LISTA ENLAZADA


//crear una clase nodo
class Nodo{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

//DEFINIR CLASE DE LISTA ENLAZADA
class LinkedList{
  constructor(){
    this.head =  null// apunta hacia el primer nodo
  }
}

//IMPLEMENTAMOS EL METODO ADD PARA AÑADIR UN NUEVO NODO A LA LISTA.
class LinkedList{
  add(value){
    const newNode = new Node(value)

    if(this.head===null){
      this.head=newNode;//si la lista esta vacia el nuevo nodo se convierte en el primer nodo
    }else{
      let current=this.head;
      while(current.next!==null){
        current=current.next;//recorre la lista hasta el ultimo nodo
      }
      current.next=newNode;//agrega el ultimo nodo al final de la lista
    }
  }
}

class LinkedList{
  print(){
    let current = this.head;
    let result = "";

    while(current!==null){
      result +=current.value +"->"
      current=current.next
    }
    reesult +="null"
    console.log(result)
  }
}

const myLisst = new LinkedList();
myList.add(10);
myList.add(20);
myList.add(30);
myList.print(); 


///EN FUNCIONAMIENTO 

class Node {
  constructor(value) {
    this.value = value; // Almacena el valor del nodo
    this.next = null; // Puntero al siguiente nodo (inicialmente nulo)
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Puntero al primer nodo (inicialmente nulo)
  }

  add(value) {
    const newNode = new Node(value); // Crea un nuevo nodo con el valor proporcionado

    if (this.head === null) {
      this.head = newNode; // Si la lista está vacía, el nuevo nodo se convierte en el primer nodo
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next; // Recorre la lista hasta el último nodo
      }
      current.next = newNode; // Agrega el nuevo nodo al final de la lista
    }
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.value + " -> ";
      current = current.next;
    }

    result += "null"; // Agrega "null" al final para indicar el final de la lista
    console.log(result);
  }
}

const myList = new LinkedList();
myList.add(10);
myList.add(20);
myList.add(30);
myList.print(); 
