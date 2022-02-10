/*
gonzalo reynoso

/*

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;
    alert("su nombre es " + nombreIngresado + " su edad es " + edadIngresada);
    //para "concatenar" se coloca el signo +


}

