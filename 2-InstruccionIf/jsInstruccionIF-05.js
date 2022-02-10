/* Ejercicio 5
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Gonzalo Reynoso*/
					
function mostrar()

{
	//tomo la edad por ID y parseo
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>18)
	{
		if(edadIngresada<12)
		{
			alert("Usted no es adolescente");   

		}   		/* para que se cumpla la conidicion tiene que estar en el mismo bloque de if
						y correctamente identado dentro de las primeras llaves del if lo que lo diferencia
						del ejercicio 03 que esta separado en 2 bloques.*/
	}

} //FIN DE LA FUNCIÓN