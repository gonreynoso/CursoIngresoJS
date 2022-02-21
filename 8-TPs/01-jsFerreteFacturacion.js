/*
Tp 1
Enunciado:
1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).

*/

function Sumar() //Punto A

{   

	let precioIngresadoUno;
	let precioIngresadoDos;
	let precioIngresadoTres;
	let suma;

	

	precioIngresadoUno=document.getElementById('txtIdPrecioUno').value;
	precioIngresadoUno=parseInt(precioIngresadoUno);
	
	precioIngresadoDos=document.getElementById('txtIdPrecioDos').value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=document.getElementById('txtIdPrecioTres').value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	suma=precioIngresadoUno+precioIngresadoDos+precioIngresadoTres;

	mensaje='La suma de los tres productos es de $' + suma;

	alert(mensaje);

}

function Promedio ()  //Punto B

{
	let precioIngresadoUno;
	let precioIngresadoDos;
	let precioIngresadoTres;
	let suma;
	let promedio;

	precioIngresadoUno=document.getElementById('txtIdPrecioUno').value;
	precioIngresadoUno=parseInt(precioIngresadoUno);
	
	precioIngresadoDos=document.getElementById('txtIdPrecioDos').value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=document.getElementById('txtIdPrecioTres').value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	suma=precioIngresadoUno+precioIngresadoDos+precioIngresadoTres;

	promedio=suma/3;

	mensaje='El promedio de los tres productos es de $' + promedio;

	alert(mensaje);

}

function PrecioFinal () // Punto C

{
	let precioIngresadoUno;
	let precioIngresadoDos;
	let precioIngresadoTres;
	let suma;
	let precioFinal;

	precioIngresadoUno=document.getElementById('txtIdPrecioUno').value;
	precioIngresadoUno=parseInt(precioIngresadoUno);
	
	precioIngresadoDos=document.getElementById('txtIdPrecioDos').value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=document.getElementById('txtIdPrecioTres').value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	suma=precioIngresadoUno+precioIngresadoDos+precioIngresadoTres;

	iva=21/100

	precioFinal= suma + (suma * iva) ;

	mensaje= 'El precio final a pagar con iva es de $' + precioFinal;

	alert(mensaje);

}












































/*

function Sumar()

{
	let precioUno;
	let precioDos;	
	let precioTres;
	let suma;

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById("txtIdPrecioTres").value;
	precioTres=parseInt(precioTres);

	
	suma= precioUno + precioDos+ precioTres;

	alert("la suma es " + suma );

}


function Promedio () 

{
	
		let precioUno;
		let precioDos;
		let precioTres;
    	let promedio;
		let suma;

		precioUno=document.getElementById("txtIdPrecioUno").value;
		precioUno=parseInt(precioUno);

		precioDos=document.getElementById("txtIdPrecioDos").value;
		precioDos=parseInt(precioDos);

		precioTres=document.getElementById("txtIdPrecioTres").value;
		precioTres=parseInt(precioTres);
	
		suma= precioUno + precioDos+ precioTres;

		promedio= suma / 3;

		alert("el promedio es " + promedio );


}


function PrecioFinal () 

{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioFinal;
	let iva;
	let suma;
	let mensaje

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById("txtIdPrecioTres").value;
	precioTres=parseInt(precioTres);

	suma= precioUno + precioDos+ precioTres;

	iva= suma*21/100

	precioFinal= suma + iva 


	mensaje= "El precio final con IVA 21% es  " + precioFinal

	alert(mensaje)

	
	}

	//Gonzalo Reynoso*/