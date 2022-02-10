/*
Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los precios y el precio final total más iva(21%),
pedir un porcentaje de descuento y aplicarlo al precio final , 
mostrar todos los datos calculados e ingresados por alerta. (solo una alerta en el código). 
Los datos se piden por prompt.)*/

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
	+ precioFinal + "El precio final es de " + precioFinal);


	alert(mensaje);

	}