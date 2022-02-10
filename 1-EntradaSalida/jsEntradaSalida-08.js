/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	  let numeroIngresadoUno;
    let numeroIngresadoDos;
    let divisionResultado;
    let mensaje;
    let resto;

    numeroIngresadoUno=document.getElementById("txtIdNumeroDividendo").value;
    numeroIngresadoUno=parseInt(numeroIngresadoUno);

    numeroIngresadoDos=document.getElementById("txtIdNumeroDivisor").value;
    numeroIngresadoDos=parseInt(numeroIngresadoDos);

    divisionResultado=numeroIngresadoUno/numeroIngresadoDos;

    resto=numeroIngresadoUno-numeroIngresadoDos*divisionResultado;

    mensaje= "La division es de " + divisionResultado.toFixed(1);
    mensaje= mensaje + " y el resto es de " + resto;
    //mensaje= "El resto es " + resto;
    alert(mensaje);


}
    //2127-27*78 formula para obtener el resto de una division. Dividendo - divisor * el cociente

    




//Gonzalo Reynoso