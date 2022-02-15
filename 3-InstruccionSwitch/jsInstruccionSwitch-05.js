/* Ejercicio 5
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

Gonzalo Reynoso*/

function mostrar()
{
	let horaDelDiaIngresada;
	let mensaje;

	horaDelDiaIngresada=document.getElementById("txtIdHora").value;
	horaDelDiaIngresada=parseInt(horaDelDiaIngresada);
	

	switch(horaDelDiaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:					
			mensaje="Es de mañana";
		break;

	}
	
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN