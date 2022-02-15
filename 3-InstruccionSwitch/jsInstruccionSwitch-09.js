/* Ejercicio 9
una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno:
bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano:
bariloche tiene un descuento del 20%
cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10%
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10%
Cordoba tiene el precio sin descuento

Gonzalo Reynoso*/

function mostrar()
{
	let destinoIngresado;
	let estacionDelAñoIngresada;
	let mensaje;
	let precioBase;
	let porcentaje;
	let precioFinal;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionDelAñoIngresada=document.getElementById("txtIdEstacion").value;
	precioBase=15000;
	porcentaje=0;
	
	switch(estacionDelAñoIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=-10;
				break;
				case "Mar del plata":
					porcentaje=-20;
				break;
			} 

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=10;
				break;
				case "Mar del plata":
					porcentaje=20;
				break;
			} 

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=10;
				break;
				case "Cordoba":
					porcentaje=0;
				break;
			} 
			break;
	}
	
	precioFinal=(precioBase*(porcentaje+100))/100;
	mensaje="El precio final a pagar es $" + precioFinal;

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN
