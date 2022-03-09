# Programación imperativa

## Pensamiento computacional

Este aparece como el paso previo a programar y consiste en adaptar nuestra forma de razonar para poder resolver un problema lógico.

Tiene 4 etapas:
- :hammer:Descomposición: desarticular el problema en parte más pequeñas.
- :chart_with_downwards_trend:Patrón: buscar similitudes o series que se repiten
- :art:Abstracción: simplificar eliminando datos irrelevantes.
- :runner:Algoritmo: pasos ordenados necesarios para la solución del problema.

¿Cómo se aplica a un problema concreto?

1. Analizar el problema o desafío.
2. Tomar decisiones.
3. La solución no es única.


 <div align="center"> “El pensamiento computacional implica resolver problemas, diseñando sistemas, y entender el comportamiento humano a partir de los conceptos fundamentales a la informática. Pensamiento computacional incluye una gama de herramientas mentales que reflejan la amplitud del campo de la informática”. -Jeanette Wing </div>
 
 
 ## Diagramas de flujo
 
 Es la representación gráfica de un algoritmo o proceso. Nos permite establecer los pasos para realizar una tarea o proceso.
 
 ### Elementos de un diagrama de flujo
 
![elementos-diagrama-de-flujo](https://user-images.githubusercontent.com/75231007/156471378-1403b932-896d-4288-ba38-8b6e0ca25019.png)

 ## Paradigmas de programación
 
 Se trata de los diferentes estilos de usar la programación para resolver un problema.
 
 ### Programación Imperativa
 
 Se caracteriza por contar con una sucesión de instrucciones claramente definidas. El código fuente de los lenguajes imperativos encadena instrucciones una detrás de otra que determinan lo que debe hacer el ordenador en cada momento para alcanzar un resultado deseado. Los valores utilizados en las variables se modifican durante la ejecución del programa. [Ver más](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/programacion-imperativa/) 

Tiene 3 enfoques principales:
 
 #### Programación Estructurada
 
 El flujo de control se define mediante bucles anidados, condicionales y subrutinas.
 
 #### Programación Procedimental
 
 Se basa en un número muy reducido de expresiones repetidas las cuales se engloban en procedimientos o funciones y se llaman según la necesidad de ejecución.
 
 #### Programación modular
 
 Se divide el programa en módulos o subprogramas, haciéndolo más legible y manejable. Es una evolución de la programación estructurada. Cada uno de los componentes de programa se diseñan, desarrollan y prueban con total independencia los unos de los otros.
 
 ### Programación Declarativa
 
 En pocas palabras, programación declarativa consiste en decirle a un programa lo que tiene que hacer en lugar de decirle cómo debería hacerlo. Este enfoque implica proporcionar un lenguaje específico de dominio (DSL) para expresar lo que el usuario quiere. El DSL resguarda a los usuarios de construcciones de bajo nivel, al tiempo que materializa el estado final deseado. [Ver más](https://www.toptal.com/software/la-programacion-declarativa-de-verdad-existe).
 
 #### Programación Lógica
 
Gira en torno al qué, no al cómo: se trabaja de forma descriptiva, estableciendo relaciones entre entidades, lo que obliga a los que los lenguaje tengan un alto nivel de abstracción. Este paradigma se basa en la fórmula "algoritmos = lógica + control" (la llamada Ecuación Informal de Kowalski), lo que significa que un algoritmo se crea especificando conocimiento mediante axiomas (lógica) y el problema se resuelve mediante un mecanismo de inferencia que actúa sobre el mismo (control). [Ver más](https://www.genbeta.com/desarrollo/lenguaje-prolog-ejemplo-paradigma-programacion-logica).
 
 #### Programación funcional
 
 La programación funcional se caracteriza por dividir la mayor cantidad posible de tareas en funciones, de esta forma estas tareas pueden ser usadas por otras funciones con diferentes objetivos. En este estilo de programación las funciones son ciudadanas de primera clase, porque sus expresiones pueden ser asignadas a variables como se haría con cualquier otro valor; además de que pueden crearse funciones de orden superior. [Ver más](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional) 

### Programación Orientada a Objetos

Se construyen modelos que representan objetos de forma similar a cómo lo haríamos en la vida real. Dichos objetos tienen características (atributos) y comportamientos (métodos). Permite separar y jerarquizar los componentes de un programa.

### Programación Reactiva

Se basa en observar cambios en el flujo de datos (según los eventos que ocurren) y reaccionar o tomar acciones de acuerdo al cambio recibido.

Deben ser:

- Responsivos
- Resilientes
- Elásticos
- Orientados a mensajes

## Variables

Las **variables** son espacios de memoria en la computadora donde podemos almacenar distintos tipos de datos.

En JavaScript exiten tres formas de definir una variable:

- var: Es una forma poco usada actualmente. Las variables tiene un scope global y por tanto utilizar el mismo nombre para una variable definida con var hará que se pisen los valores entre sí. Se puede redefinir y modificar.
- let: Tiene un scope o alcance de bloque. Se puede modificar pero no redeclarar.
- const: Tiene un scope de bloque. No se puede modificar ni redeclarar.

Como buena práctica se recomienda:
- Usar camelCase para nombrar las variables.
- Usar MAYÚSCULAS con guiones bajos entre palabras para declarar constantes.
- 

## Tipos de datos

Los tipos de datos le permiten a JavaScript conocer las características y funcionalidades que estarán disponibles para ese dato.

### Datos primitivos

- number
- string
- boolean
- undefined 
- null
- NaN

### Datos complejos

- Object literal
- Array

## Operadores

Los operadores nos permiten manipular el valor de las variables, realizar operaciones y comparar sus valores.
Los operadores aritméticos siempre devolverán el resultado numérico de la operación que se esté realizando.
Los operadores de comparación siempre devolverán un booleano, es decir, true o false, como resultado.


Existen diferentes tipos de operadores en JavaScript, entre esos están:

- De asignación: (=)
- Aritméticos: (+,-,*,/,++,--,%)
- De concatenación (símbolo + usado entre strings)
- De comparación (>,>=,<,<=)
- De comparación simple (==, !=)
- De comparación estricta (===, !==)
- Lógicos (&&, ||)
 
