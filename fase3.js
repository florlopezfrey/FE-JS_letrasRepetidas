$miNombre = ["F","L","O","R","L","O","P","E","Z"];

var mapa = $miNombre.reduce(function(a, b) { //a es el acumulador y b es el valor de cada elemento del array
  a[b] = (a[b] || 0) + 1;
  return a;
}, {});
console.log(mapa);