#  Array vs Objet

### Inicialización

##### Objet

```js
 a = {}; // Objeto vacioO
 a = new Object(); // Objeto vacio
 a = {clave1: "valor", clave2, 22}; // En a tenemos a.clave1 y a.clave2 con valores "valor" y 22 respectivamente
```

##### Array

```js
 a = []; // array vacio
 a = [1, 'hola', true]; // array con elementos
 a = new Array(); // array vacío
```

### Manipulate

##### Objet

```js

```

##### Array

```js
 a = [1,2,3];
 a.push('hola'); // esto da un array [1, 2, 3, "hola"]
 b = a.pop(); // ahora b tiene el elemento 3 y a vale [1,2]
```

`shift()`, `unshift()`, `slice()`, `every()`, `concat()`, `indexOf()`, `lastIndexOf()`, `join()`, `reverse()`, `sort()`, `splice() `, 

### For

##### Objet

```js
objet = [1,2,3];
for (let oneObjet in objet) { /*Hacer algo con la clave oneObjet*/ }
```

##### Array

```js
objet = [1,2,3];
// sin índice
for (let oneObjet of objet) { /*Hacer algo con la clave oneObjet*/ }
objet.foreach ( function (oneObjet) {/*hacer algo con oneObjet.*/});
// con indice
objet.foreach ( function (oneObjet, index) {/*hacer algo con oneObjet.*/});
```



