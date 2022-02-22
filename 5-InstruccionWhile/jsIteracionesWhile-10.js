/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	//declarar contadores y variables 

	var sumaPositivos;	

	var numeroIngresado;

	var sumaNegativos;

	var respuesta;

	var contadorPositivos

	var contadorNegativos

	var contadorCeros;
	
	var contadorPares;

	var promedioPositivos;

	var promedioNegativos;

	var diferencia

	respuesta=true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	while(respuesta=="true")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt( numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado; //suma negativos
			contadorNegativos++;
		}
		else 
		{
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}	

		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}




		respuesta = confirm("quiere ingresar otro numero? si o no");


	}//fin del while

	diferencia

	
	

	document.write("la suma de negativos es :"+ sumaNegativos + "<br>");
	document.write("la suma de positivos es :"+ sumaPositivos + "<br>");
	document.write("la cantidad de los negativos es :"+ contadorNegativos + "<br>");
	document.write("la cantidad de los positivos es :"+ contadorPositivos + "<br>");
	document.write("la cantidad de ceros es :"+ contadorCeros + "<br>");
	document.write("la cantidad de pares es :"+ contadorPares + "<br>");
	
	

	if(contadorPositivos>0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("el promedio de los positivos es :"+ promedioPositivos + "<br>");
	}
	else
	{
		document.write("no se ingresaron numeros positivos para calcular el promedio :" + "<br>");
	}

	if(contadorNegativos>0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("el promedio de los negativos es :"+ promedioNegativos + "<br>");
	}
	else
	{
		document.write("no se ingresaron numeros negativos para calcular el promedio :" + "<br>");
	}

}//FIN DE LA FUNCIÓN
