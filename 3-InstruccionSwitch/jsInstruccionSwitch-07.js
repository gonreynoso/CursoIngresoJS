/* Ejercicio 7
Al selecionar un destino, 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur,
Este u Oeste

Gonzalo Reynoso*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":				
			mensaje="Norte";
		break;
		case "Mar del plata":
			mensaje="Este";
		break;	
		case "Bariloche":
			mensaje="Oeste";
		break;	
		case "Ushuaia":
			mensaje="Sur";
		break;

	}

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN