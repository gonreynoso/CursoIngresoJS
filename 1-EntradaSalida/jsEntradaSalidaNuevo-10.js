/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO" */

function mostrarAumento()
{
	let importe;
	let importeConDescuento;
    let mensaje;

    importe = document.getElementById("txtIdImporte").value;
    importe= parseInt(importe); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school

    importeConDescuento = importe-(importe*25/100);
    importeConDescuento=parseInt(importeConDescuento);

    document.getElementById("txtIdResultado").value = mensaje;

    mensaje=("El importe con un descuento del 25% es " + importeConDescuento);

}
/*
10 bis
en el ejercicio 10 e/s
lo anterior mas
se debe pedir el % por prompt

*/

/*
function mostrarAumento()
{
	let importe;
	let resultado;
	let importeConDescuento;
    let mensaje;

    importe = document.getElementById("txtIdImporte").value;
    importe= parseInt(importe); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
    importe= prompt("Coloque su descuento aqui")

    importeConDescuento = importe-(importe*25/100);

    document.getElementById("txtIdResultado").value = mensaje;

    mensaje=importeConDescuento;

    }

    //Gonzalo Reynoso

    */