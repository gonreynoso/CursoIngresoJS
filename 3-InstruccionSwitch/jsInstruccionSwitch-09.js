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
	let porcentajeCalculado;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionDelAñoIngresada=document.getElementById("txtIdEstacion").value;
	precioBase=15000;
	
	switch(estacionDelAñoIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=20
				case "Cataratas":
					porcentaje=10
				case "Cordoba":
					porcentaje=10
				case "Mar del plata":
					porcentaje=-20
				break;
			} 

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje-20
				case "Cataratas":
					porcentaje=10
				case "Cordoba":
					porcentaje=10
				case "Mar del plata":
					porcentaje=20
				break;
			} 

		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=10
				case "Cataratas":
					porcentaje=10
				case "Cordoba":
					porcentaje=0
				case "Mar del plata":
					porcentaje=10
				break;
			} 

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=10
				case "Cataratas":
					porcentaje=10
				case "Cordoba":
					porcentaje=0
				case "Mar del plata":
					porcentaje=10
				break;	
			} 	
	}
	
	porcentajeCalculado=(precioBase*porcentaje/100)+precioBase;
	mensaje=porcentajeCalculado;

	alert(mensaje);
	


}//FIN DE LA FUNCIÓN