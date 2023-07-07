// en estos apuntes quizas se vean temas repetidos de otros archivos pero con la diferencia que en este archivos veo mas en profundidad el tema :ARBOLES Y RECORRIDOS

// los arboles en javascript son principalmente estructuras de datos compuesta por distintos nodos ,cada uno con valores asignados diferentes, y con distintas jerarquias.

// por ejemplo los arboles simples (que son los que vamos a ver ahora) son arboles con un maximo de dos nodos, que de manera particular van a interactuar con el nodo principal dependiendo los datos que posean. si se crean dos nodos , uno mayor y uno menor, el nodo menor va a posicionarse a la izquierda del nodo principal en cambio si el otro nodo creado es mayor al nodo principal este se va a posicionar en el lado derecho del nodo principal

// //Los arboles tienen distintas formas de ser recorridos: >pre-order(nodo-izq-der)
//                                                          >post-order(izq-der-nodo)
//                                                          >in-order(izq-nodo-der)

//PASO A PASO PARA CREAR ARBOL

//vamos a ver la estructura de un arbol
// El nodo principal se va a llamar raiz

function BinarySearchTree(){
    this._raiz=null;//---> aca creamos el primer nodo del arbol y le asignamos "null" para señalar que esta vacio
}

//Un arbol puede tener diferentes metodos, estos metodos cambian el funcionamiento del arbol dependiendo cual se use (size-contains-insert-DepthFirstForEach)

// el metodo insert nos va a permitir añadir un nodo al nodo principal esta se divide en dos funciones, UNA QUE CREA UN NODO Y OTRA FUNCION QUE LA POSICIONA DE MANERA RECURSIVA EN EL ARBOL DEPENDIENDO SU DATO(SI ES MENOR O MAYOR)

function BinarySearchTree(){
    this._raiz=null;
}

var nod



