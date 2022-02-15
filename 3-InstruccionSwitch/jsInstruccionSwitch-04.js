/* Ejercicio 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

Gonzalo Reynoso*/

function mostrar()
{
	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Estos meses tienen 30 dias"
		break;
		default:
			mensaje="Estos meses tienen 31 dias";
		break;
	}
	
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN