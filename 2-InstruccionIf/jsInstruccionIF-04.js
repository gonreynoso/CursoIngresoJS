/*Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive).*/

function mostrar()
{
	
	let edadIngresada;
	let mensaje;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>12 && edadIngresada<18)
	{
		mensaje='Usted es adolescente';
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN


















/*let edadIngresada
	

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>13 && edadIngresada<18)
	{
		alert("Usted es adolescente");
	}*/