/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

    alert("la suma es " + suma); //el signo + se usa para concatenar o sumar 
}

function restar()
{
	let numeroUno
	let numeroDos
	let restar

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;
    numeroUno= parseInt(numeroUno); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    numeroDos= parseInt(numeroDos);

    restar = numeroUno-numeroDos;

    alert("la resta es " + restar);
}

function multiplicar()
{ 
	let numeroUno
	let numeroDos
	let multiplicar

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;
    numeroUno= parseInt(numeroUno); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    numeroDos= parseInt(numeroDos);

    multiplicar = numeroUno*numeroDos;

    alert("la multiplicacion es " + multiplicar);
}

function dividir()
{
	let numeroUno
	let numeroDos
	let dividir

    numeroUno = document.getElementById("txtIdNumeroUno").value;
    numeroDos = document.getElementById("txtIdNumeroDos").value;
    numeroUno= parseInt(numeroUno); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    numeroDos= parseInt(numeroDos);

    dividir = numeroUno/numeroDos;

    alert("la division es " + dividir);
}

//Gonzalo Reynoso