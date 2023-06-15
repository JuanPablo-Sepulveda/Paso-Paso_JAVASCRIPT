// los algoritmos son secuencias de instrucciones lógicas que permiten resolver problemas o realizar tareas específicas. Un algoritmo es una serie de pasos bien definidos y ordenados que se siguen para lograr un objetivo determinado.

//En el contexto de JavaScript, los algoritmos se implementan utilizando el lenguaje de programación y se utilizan para realizar diversas operaciones, como ordenar datos, buscar elementos en una lista, realizar cálculos matemáticos complejos y más.

//Los algoritmos en JavaScript se basan en la lógica y las estructuras de control del lenguaje para tomar decisiones y repetir acciones. Las estructuras de control como las instrucciones condicionales (if, else) y los bucles (for, while) son herramientas fundamentales para diseñar algoritmos eficientes.

//Los algoritmos nos ayudan a hacer que nuestro codigo funcione de manera mas efectiva y eficaz haciendo que se accione si cumple ciertos parametos, por ejemplo...

 BinarySearchTree.prototype.contains= function(value){
     if(this.value===value)return true;
     if(this.left && this.left.contains(value))return true
     if(this.right && this.right.contains(value))return true
     return false;
    }

 //Este codigo sirve para bscar un numero dentro de un arbol binario ,si la raiz del arbol es 10 y busco un 11, este codigo va a ejecutar primero todo el lado izquierdo buscando al 11 y luego empezara por el lado derecho hasta encontrarlo(a que como sabemos al lado izquierdo estan los menores a 10 y al lado derecho estan los mayores a 10). pero esto podria ser vas efectivo si le ordenamos al codigo que si el numero que  buscamos es mayor, directamente busque en el lado derecho agregando un simple value </>.

  BinarySearchTree.prototype.contains= function(value){
     if(this.value===value)return true;
     if(value < this.left && this.left.contains(value))return true
     if(value > this.right && this.right.contains(value))return true
     return false;
    }

 

 //ejemplo

 var arr1=[1,2,3,4,5];
var arr2=["a","b","c","d"]
 for (let i = 0; i< arr1.length; i++) {
  console.log(arr1[i]);
  for (let j = 0; j < arr2.length; j++) {
    console.log(arr2[j]);
    
  }
     } 


// Algoritmos de ordenamientos

// BUBBLE SORT--> El algoritmo de Bubble Sort compara elementos adyacentes y los intercambia si están en el orden incorrecto. Este proceso se repite hasta que todos los elementos estén en su posición correcta. El algoritmo recibe su nombre debido a que los elementos más grandes "burbujean" hacia la parte posterior de la lista en cada iteración.(DE PRINCIPIO AL FINAL)

// INSERTION SORT-->El algoritmo de Insertion Sort construye una lista ordenada tomando uno de los elementos no ordenados a la vez e insertándolo en la posición correcta dentro de la lista ordenada. Comienza considerando que la primera posición de la lista es una lista ordenada de un solo elemento y luego inserta cada elemento subsiguiente en la posición correcta dentro de la lista orden(DEL FINAL AL PRINCIPIO)

// SELECTION SORT-->El algoritmo de Selection Sort busca el elemento más pequeño en cada iteración y lo coloca en la posición correcta. Comienza encontrando el elemento más pequeño en toda la lista y lo intercambia con el elemento en la primera posición. Luego, busca el segundo elemento más pequeño y lo coloca en la segunda posición, y así sucesivamente hasta que todos los elementos estén ordenados(INTERCAMBIA)


