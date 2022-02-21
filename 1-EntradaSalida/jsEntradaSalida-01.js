/*Ejercicio 1 (Podes usar el ejercicio E/S 01 del curso de ingreso)

Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos),
el promedio de los precios y el precio final total más iva(21%),
pedir un porcentaje de descuento y aplicarlo al precio final ,
mostrar todos los datos calculados e ingresados ​​por alerta. 
(solo una alerta en el código). 

Los datos se piden por prompt.*/

function mostrar()

{
	let productoUno;
	let productoDos;
	let productoTres;
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;
	let mensaje;
	let descuentoIngresado
	let precioConDescuento;
	let precioConIva;
	let precioFinal;


	productoUno=prompt('Indique el producto Uno');
	precioUno=prompt('Indique su precio por favor');
	precioUno=parseInt(precioUno);

	productoDos=prompt('Indique el producto Dos');
	precioDos=prompt('Indique su precio por favor');
	precioDos=parseInt(precioDos);

	productoTres=prompt('Indique el producto Tres');
	precioTres=prompt('Indique su precio por favor');
	precioTres=parseInt(precioTres);

	descuentoIngresado=prompt('Coloque su descuento por favor');
	descuentoIngresado=parseInt(descuentoIngresado);
	
	suma = precioUno + precioDos + precioTres;

	promedio = suma/3;

	precioConIva= (suma * 21/100) + suma;

	precioConDescuento= suma * descuentoIngresado/100;

	precioFinal= precioConIva - precioConDescuento;

	mensaje = 'La suma de los productos es $' + suma + ' y el promedio es de $ ' + 
	promedio + ' el precio final con Iva es de $' + precioConIva + 
	' Usted tuvo un descuento de $' + precioConDescuento
	+ ' y el precio final a pagar es de $' + precioFinal;


	alert(mensaje);

}




/*
function mostrar()

{
	let productoUno;
	let productoDos; 
	let productoTres;
	let precioBruto;
	let promedio;
	let precioConIva;
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let descuento;
	let precioFinal

	productoUno=prompt("Coloque el producto uno");
	precioUno=prompt("Coloque el precio");

	productoDos=prompt("Coloque el producto dos");
	precioDos=prompt("Coloque el precio");
	
	productoTres=prompt("Coloque el producto tres");
	precioTres=prompt("Coloque el precio");
	
	descuento=prompt("Coloque el descuento de su voucher");

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	descuento=parseInt(descuento);

	suma= (precioUno+precioDos+precioTres);

	promedio= (suma / 3);

	precioConIva= (suma*121/100);

	precioFinal= (suma - descuento) + precioConIva;

	mensaje=("La suma de los productos es " + suma + " El promedio es " + promedio 
	+ " El precio con iva 21% final es de " + precioConIva + " El descuento aplicado es de " 
	+ precioFinal + "El precio final es de " + precioFinal);*/























/*
Al presionar el botón, se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"


function mostrar()

{
	let mensaje;

	mensaje = "Esto funciona de maravilla";

	alert(mensaje);
}
*/
