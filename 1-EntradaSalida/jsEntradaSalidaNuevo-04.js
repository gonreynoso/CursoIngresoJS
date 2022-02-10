/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let nombreIngresado;
	let mensaje;


	nombreIngresado=prompt("Nombre por favor");
	mensaje= document.getElementById("txtIdNombre").value;
	document.getElementById("txtIdNombre").value=nombreIngresado;

}

//Gonzalo Reynoso
