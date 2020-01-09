$miNombre = ["F","1","O","R","L","O","P","3","Z"];

$numeros = /\d+/;// busca todos los digitos

for (i = 0; i < $miNombre.length; i++) { 
    if ($miNombre[i].match($numeros)) {
		console.log("Els noms de persones no contenen el número: "+$miNombre[i]);
	} else if ($miNombre[i]=="A" || $miNombre[i]=="E" || $miNombre[i]=="I" || $miNombre[i]=="O" || $miNombre[i]=="U") {   
        console.log("He trobat la VOCAL: "+$miNombre[i]);
    } else {
    	console.log("He trobat la CONSONANT: "+$miNombre[i]);
    }
}