// En este ejemeplo podemos observar a grandes rasgos las diferencias principales de el contexto de ejecucion.
//¿Que es el contexto de ejecucion? Es el código que se está ejecutando actualmente y todo lo que lo rodea que lo ayuda a ejecutarlo. Puede haber muchos Ámbitos Léxicos disponibles, pero el Contexto de Ejecución administra el código que se está ejecutando actualmente. Por ejemplo: Podemos plantear al contexto de ejecucion como unas especies de cajas dentro de otras cajas. Supongamos que tengo 5 cajas,una dentro de la otra y cada una con un color diferente adentro. Si deseara descubrir el color que contiene la ultima caja tendria que  abrir antes las 4 primeras.
//____________________________________________________________________________________________________//
                       /*CAJA 1*/ x = 1;
                       /*CAJA 1*/ var a = 5;
                       /*CAJA 1*/ var b = 10;
                       /*CAJA 1*/ var c = function (a, b, c) {
                                     /*CAJA2*/var x = 10;
                                     /*CAJA2*/console.log(x);//valor 10
                                     /*CAJA2*/console.log(a);//valor 8
                                     /*CAJA2*/var f = function (a, b, c) {
                                       /*CAJA2*/b = a;//"b" toma el valor de "a"
                                       /*CAJA2*/console.log(b);//valor 8
                                       /*CAJA2*/b = c;//"b" toma el valor de "c"
                                       /*CAJA2*/var x = 5;
                                    /*CAJA2*/};
                                    /*CAJA2*/f(a, b, c);
                                    /*CAJA2*/console.log(b);//valor 9
                                 /*CAJA2*/};
                       /*CAJA 1*/c(8, 9, 10);// parametro globALES
                       /*CAJA 1*/console.log(b);// valor 10
                       /*CAJA 1*/console.log(x);// valor 1
//_________________________________________________________________________________________________//                       