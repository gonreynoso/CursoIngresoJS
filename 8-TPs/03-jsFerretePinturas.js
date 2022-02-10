/*
Tp3. Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en 
Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
	let temperatura;
	let resultado;
	let formulaCentigrados;
	let mensaje

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseInt(temperatura);

	formulaCentigrados= (temperatura-32) *5/9;

	resultado = formulaCentigrados;

	mensaje=("La temperatura en farenheit convertida a centígrados es de "
	+ resultado.toFixed(1));

	alert(mensaje)
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let resultado;
	let formulaFarenheit;
	let mensaje;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura= parseInt(temperatura);
	formulaFarenheit=(temperatura*9/5) +32;
	resultado = formulaFarenheit;

	mensaje=("La temperatura en centígrados convertida a grados farenheit es de " 
	+ resultado.toFixed(1));

	alert(mensaje);

}

//Gonzalo Reynoso