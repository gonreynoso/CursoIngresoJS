/* Ejercicio 8
Al seleccionar un destino informar
si hace FRIO o CALOR en ese destino

Gonzalo Reynoso*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje="Calor";
		break;
		case "Mar del plata":
			mensaje="Calor";
		break;	
		case "Bariloche":
			mensaje="Frio";
		break;	
		case "Ushuaia":
			mensaje="Frio";
		break;

	}

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN