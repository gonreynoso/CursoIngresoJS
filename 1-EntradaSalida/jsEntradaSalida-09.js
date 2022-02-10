/*
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO". 

function mostrarAumento()
{

	let sueldo;
	let sueldoconaumento;
    let mensaje;

    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo= parseInt(sueldo); // parseInt transforma texto literal a numero entero y parseFloat a numero con con coma


    sueldoconaumento = sueldo*10/100 + sueldo;

    mensaje=("El sueldo con un aumento del 10% es " + sueldoconaumento);

    document.getElementById("txtIdResultado").value = mensaje;

}

*/


/*
Ejercicio 9 bis
en el ejercicio 9 e/s
lo anterior mas
se debe pedir el % por prompt */


function mostrarAumento()

{

	let sueldo;
	let sueldoConAumento;
    let mensaje;
    let porcentajeVariable;

    sueldo=document.getElementById("txtIdSueldo").value;
    sueldo=parseInt(sueldo); 
	aumentoDelPrompt=prompt("Coloque aqui su porcentaje");
    porcentajeVariable=sueldo*aumentoDelPrompt/100;
    sueldoConAumento= sueldo + porcentajeVariable;

    mensaje=("El sueldo final con el porcentaje establecido es " + sueldoConAumento);
    
	document.getElementById("txtIdResultado").value = mensaje;

    

 }


//Gonzalo Reynoso


