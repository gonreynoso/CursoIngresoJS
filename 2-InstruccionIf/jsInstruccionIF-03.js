/*Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.*/

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
	else
	{
		mensaje='Usted es menor de edad';
	}
		
	alert(mensaje);

}//FIN DE LA FUNCIÓN
















/*let edadIngresada
	

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}else
	{
		alert("Usted es menor de edad");
	}
*/ 