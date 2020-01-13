$miNombre = ["F","L","O","R","L","O","P","E","Z"];

$letrasRepetidas = {};

$miNombre.forEach(function(elemento){
  $letrasRepetidas[elemento] = ($letrasRepetidas[elemento] || 0) + 1; // a || b : si a es true, lo devuelve, sino devuelve b
});

console.log($letrasRepetidas);