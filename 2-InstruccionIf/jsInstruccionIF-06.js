/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/ //Gonzalo Reynoso


function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");

	}
	else
	{
		if(edadIngresada<13)
		{
			alert("Usted es menor de edad");

		}
		else
		{
			alert("Usted es adolescente");

		}
	}

} //FIN DE LA FUNCIÓN