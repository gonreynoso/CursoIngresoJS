/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroIngresadoUno;
    let numeroIngresadoDos;
    let suma;
    let mensaje;

    numeroIngresadoUno=document.getElementById("txtIdNumeroUno").value;
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=document.getElementById("txtIdNumeroDos").value;
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    suma=numeroIngresadoUno+numeroIngresadoDos;

    mensaje= "La suma es de " + suma;

    alert(mensaje);


}

function restar()
{
	let numeroIngresadoUno;
    let numeroIngresadoDos;
    let resta;
    let mensaje;

    numeroIngresadoUno=document.getElementById("txtIdNumeroUno").value;
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=document.getElementById("txtIdNumeroDos").value;
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    resta=numeroIngresadoUno-numeroIngresadoDos;

    mensaje= "La resta es de " + resta;

    alert(mensaje);
}

function multiplicar()
{ 
	let numeroIngresadoUno;
    let numeroIngresadoDos;
    let multiplicar;
    let mensaje;

    numeroIngresadoUno=document.getElementById("txtIdNumeroUno").value;
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=document.getElementById("txtIdNumeroDos").value;
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    multiplicar=numeroIngresadoUno*numeroIngresadoDos;

    mensaje= "El resultado es " + multiplicar;

    alert(mensaje);
}

function dividir()
{
	let numeroIngresadoUno;
    let numeroIngresadoDos;
    let dividir;
    let mensaje;

    numeroIngresadoUno=document.getElementById("txtIdNumeroUno").value;
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=document.getElementById("txtIdNumeroDos").value;
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    dividir=numeroIngresadoUno/numeroIngresadoDos;

    mensaje= "El resultado es " + dividir;

    alert(mensaje);
}

//Gonzalo Reynoso