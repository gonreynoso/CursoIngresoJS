/* Ejercicio 2
//tomo el mes
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

Gonzalo Reynoso*/


function mostrar()
{
	

	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	let mensaje;

	switch(mesDelAño)
	{	
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio";
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Ya pasamos el frio, hace calor";
		break;
		default:
			mensaje="Falta para el invierno";
		break;
		
	}	


	alert(mensaje);



}//FIN DE LA FUNCIÓN