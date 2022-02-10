/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resultado por medio de "ALERT"*/
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

    suma=(numeroIngresadoUno + numeroIngresadoDos);

    mensaje=suma;

    alert("La suma es " + mensaje);

}
//gonzalo reynoso


//"txtIdNumeroUno"
//"txtIdNumeroDos"