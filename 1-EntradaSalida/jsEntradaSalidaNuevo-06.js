/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resultado por medio de "ALERT"*/
function sumar()
{
	let numeroUno
	let numeroDos
	let suma

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;
    numeroUno= parseInt(numeroUno); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    numeroDos= parseInt(numeroDos);

    suma = numeroUno+numeroDos;

    alert("la suma es " + suma);
}

//gonzalo reynoso
//"txtIdNumeroUno"
//"txtIdNumeroDos"