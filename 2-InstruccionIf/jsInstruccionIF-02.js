/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{
	let edadIngresada;
	let mensaje;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		mensaje='Usted es mayor de edad';

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN






















/*
	let edadIngresada
	

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}
*/