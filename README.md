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

### Operadores lógicos

Permiten combinar valores booleanos y retornan también un valor booleano

- AND (&&): todos los valores deben evaluar como `true` para que el resultado sea `true`.
- OR (||): al menos un valor debe evaluar como `true` para que el resultado sea `true`.
- NOT (!): niega la condición, si era `true`será `false` y viceversa.

## Funciones

Una función es un bloque de código que nos permite agrupar una funcionalidad para usarla todas las veces que necesitemos.
Normalmente, realiza una tarea específica y retorna un valor como resultado.

### Declaración y estructura

Existen dos formas de declarar las funciones. Declarándolas y expresándolas. Ambos tipos son muy similares pero presentando diferencias con respecto al Hoisting.
Los _componentes_ de una función son:
- Palabra reservada (function)
- Nombre de la función 
- Parámetros
- Cuerpo 
- Retorno (con la palabra clave return)

#### Funciones declaradas

Usan la estructura básica y pueden llevar un nombre luego de la palabra reservada function.
```
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```
#### Funciones expresadas

Se asignan como valor a una variable. No tienen nombre en sí, son funciones _anónimas_.
```
const = function(nombre) {
  return `Hola, ${nombre}`;
}
```

### Invocación

Podemos imaginar las funciones como si fueran máquinas. Durante la declaración nos ocupamos de construir la máquina y durante la invocación la ponemos a funcionar.

A tener en cuenta:
- En caso que la función tenga parámetros, se deben pasar lo argumentos en el orden correcto.
- Es posible utilizar **valores por defecto** en caso de obviar algún parámetros.:point_down:
```
function saludar(nombre = 'visitante', 
	apellido = 'anónimo') {
	return 'Hola ' + nombre + ' ' + apellido;
}
```

Llamamos parámetros a las variables que escribimos cuando definimos la función. Llamamos argumentos a los valores que enviamos cuando invocamos la función.

### Scope

El scope o ámbito se refiere al alcance que tiene una variable, es decir, desde dónde podemos acceder a ella. En JavaScript los scopes son definidos principalmente por las funciones.

#### Scope global

Las variables con scope global pueden ser accedidas desde cualquier parte del programa. Deben ser definidas fuera de función.

#### Scope local

Las variables con scope local sólo son accedidas dentro del bloque de código o función donde fueron definidas.

### Arrow functions

Corresponden a una manera más resumida de escribir las típicas funciones. Vinieron con la versión ES6 de 2015.
Algunas de sus particularidades son:
- No utilizan la palabra function. En su lugar utilizan el operador arrow (fat arrow).
- Debe ser guardadas como valores de variables
- Cuando tienen un único parámetro no es necesario encerrarlo en paréntesis.
- Si el cuerpo de la función se desarrolla en una sola línea se puedo obviar la palabra return.

## Condicionales

- If
- Else/if
- Else
- If ternario
- Switch

## Ciclos

Los ciclos nos permiten repetir instrucciones de manera sencilla. Podemos hacerlo una cantidad determinadas de veces o mientras se cumpla una condición.

### Ciclo for

Tiene tres partes. En el **inicio**, se define el valor inicial de nuestro contador. Luego en la **condición** se define el valor en el cual se debe detener la ejecución y por último, el **modificador** indica si el contador crece o decrece.

```
for (inicio; condición; modificador) {
    //código que se ejecuta
}
```

### Ciclo while

Presenta una estructura similar al condicional if, usando una palabra reservada _while_ y unos paréntesis que encierran una condición. El código dentro de las llaves se ejecutará hasta que la condición deje de cumplirse.

```
while (condición) {
    //código que se ejecutará
    //modificación de la condición
}
```

### Ciclo do while

Similar al ciclo while pero **siempre se ejecutará al menos una vez**.

```
do {
   //código que se ejecutará
   //modificación de la condición
} while (condición)
```
