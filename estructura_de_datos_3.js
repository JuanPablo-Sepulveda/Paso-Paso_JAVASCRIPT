function BinarySearchTree(value){
    this.value=value;
    this.left=null;
    this.right=null;
}

BinarySearchTree.prototype.insert=function(value){
    if(value < this.value){
        if(!this.left){
            this.left=new BinarySearchTree(value);
            return value;
        }else{
            this.left.insert(value);

        }

    }else{
        if(!this.right){
            this.right=new BinarySearchTree(value);
            return value;
        }else{
            this.right.insert(value);
        }
    }
}

BinarySearchTree.prototype.size= function(){
    var count= 1;
    if(this.left)count += this.left.size();
    if(this.right)count += this.right.size();
    return count;
}







var miArbol = new BinarySearchTree(10)


miArbol.insert(7)
console.log(miArbol)

miArbol.insert(5)
console.log(miArbol)

miArbol.insert(4)
console.log(miArbol)

miArbol.insert(2)
console.log(miArbol)

//CON NUMEROS MAYORES 
miArbol.insert(15)
console.log(miArbol)

miArbol.insert(13)
console.log(miArbol)

console.log(miArbol.size())



//!METODO INSERT SIRVE PARA INSERTAR METODOS AL ARBOL

// PASO 1: me pregunto si es mayor o menor y en base a eso se si mirar a la izquerda o derecha (izquierda menores---derecha  mayores)
//PASO 2 miro hacia la izquierda y miro si hay algo , si no hay nada inserto el nodo nuevo

// -SI ES MAYOR-
// PASO 1 se fija si es mayor o menor y se fija hacia donde ir ( izquierda o derecha)
//PASO 2 mira hacia derecha y si no hay nada inserta el nuevo nodo

//Si hay algo a la hora se insertar un nuevo nodo ,se le pregunta al nodo que sigue si es mayor o menor para saber donde mirar, una vez que se donde mirar observo si hay algo e inserto


//METODO DepthFirstForEach-este metodo sirve para buscar el recorrido de un nodo especifico en tres ordenes diferentes
//POST-ORDER=> Izqquierda--Derecha--Nodo
//PRE-ORDER=>  Nodo--Izquierda--Derecha
//IN-ORDER=> Izquierda--Nodo--Derecha

W
function tukis(value){
    console.log(value);
}

BinarySearchTree.prototype.depthFirstForEach = function (cb){
    //POSTORDER
    this.left.depthFirstForEach(cb);
    this.right.depthFirstForEach(cb);
    cb(this.value);

    //
    cb(whis.value);
    this.left.depthFirstForEach(cb);
    this.right.depthFirstForEach(cb);
    
}

miArbol.depthFirstForEach(tukis)


