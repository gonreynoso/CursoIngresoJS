/* Ejercicio 1
//tomo el mes
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!.

Gonzalo Reynoso*/


function mostrar()
{
	

	let mesDelAño;
	mesDelAño=document.getElementById("txtIdMes").value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Enero":
			 mensaje= "que comiences bien el año!!!."
		break;
		case "Marzo":
			mensaje="a clases"
		break;	
		case "Julio":
			mensaje="se vienen las vacaciones"
		break;
		case "Diciembre":
			mensaje="Felices fiestas!!!"
		break;

	}	


	alert(mensaje);



}//FIN DE LA FUNCIÓN