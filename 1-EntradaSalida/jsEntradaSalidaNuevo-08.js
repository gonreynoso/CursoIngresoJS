/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno
	let numeroDos
	let resto

    numeroUno = document.getElementById("txtIdNumeroDividendo").value;
    numeroDos = document.getElementById("txtIdNumeroDivisor").value;
    numeroUno= parseInt(numeroUno); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    numeroDos= parseInt(numeroDos);

    resto= 2%10;//el signo + se usa para concatenar o sumar 
    resto= 10%2;

    alert("el resto es 0");
}

//Gonzalo Reynoso