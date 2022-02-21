/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo
 y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/


function Rectangulo () //Punto A
{

    let largoDelTerreno;
	let anchoDelTerreno;
	let radioDelTerreno;
	let areaDelTerreno;
    let alambre;
    let alambreAComprar;
    let mensaje;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	
	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	radioDelTerreno=document.getElementById('txtIdRadio').value;
	radioDelTerreno=parseInt(radioDelTerreno);

	areaDelTerreno=largoDelTerreno*anchoDelTerreno;

    alambre=3;

    alambreAComprar=areaDelTerreno*alambre;

    mensaje= 'El alambre necesario a comprar para el terreno es de ' + alambreAComprar + ' metros';

	alert(mensaje);

}

function Circulo () //Punto B

{
    let largoDelTerreno;
	let anchoDelTerreno;
	let radioDelTerreno;
    let alambre;
    let alambreAComprar;
    let mensaje;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	
	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	radioDelTerreno=document.getElementById('txtIdRadio').value;
	radioDelTerreno=parseInt(radioDelTerreno);

    alambre=3;

    alambreAComprar= (2 * radioDelTerreno* Math.PI)*alambre; //como calcular el radio usando math.PI


    mensaje= 'El alambre necesario a comprar para el radio del terreno es de ' + alambreAComprar.toFixed(0) + ' metros';

	alert(mensaje);
  
}

//Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
//debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

function Materiales () //Punto C
{
    let largoDelTerreno;
	let anchoDelTerreno;
    let mensaje;
    let bolsasDeCemento;
    let bolsasDeCal;
    let bolsaDeCementoAComprar;
    let bolsaDeCalAComprar;
    let areaDelTerreno;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	
	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

    areaDelTerreno=largoDelTerreno*anchoDelTerreno;

    bolsasDeCemento=2
    bolsasDeCal=3

    bolsaDeCementoAComprar=bolsasDeCemento*areaDelTerreno;
    bolsaDeCalAComprar=bolsasDeCal*areaDelTerreno;

    mensaje= 'Para hacer un contrapiso de ' + areaDelTerreno +' metros ' + 'es necesario comprar '
     + bolsaDeCementoAComprar + ' bolsas de cemento y' + bolsaDeCalAComprar + ' de cal';

	alert(mensaje);
}






























/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo
 y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.


function Rectangulo () 
{
    
        let ancho;
        let largo;
        let perimetro;
        let vueltas;
        let alambreNecesario;
        let mensaje;
    
        ancho = document.getElementById("txtIdAncho").value;
        ancho = parseInt(ancho);

        largo = document.getElementById("txtIdLargo").value;
        largo = parseInt(largo);
     
        perimetro = (ancho * largo);
    
        vueltas = 3;
        
        alambreNecesario = vueltas * perimetro;
    
        mensaje = "Se requerirán " + alambreNecesario + " metros de alambre para el perímetro rectangular.";
    
        alert(mensaje);


}
/*B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.

function Circulo () 
{

    let radio;
    let alambreNecesario;
    let mensaje;
    let vueltas;

    
    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);

    vueltas = 3;

    alambreNecesario = (2* radio * Math.PI)*vueltas;

    mensaje="El alambre necesario es de " + alambreNecesario.toFixed(2);

    alert(mensaje);
    

}

/*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

function Materiales () 
{
	let anchoDelTerreno;
	let largoDelTerreno;
	let areaDelTerreno;
	let cantidadCemento;
	let cantidadCal;
	let mensaje;

	anchoDelTerreno = document.getElementById("txtIdAncho").value;
    anchoDelTerreno =parseInt(anchoDelTerreno);

	largoDelTerreno = document.getElementById("txtIdLargo").value;
	largoDelTerreno = parseInt(largoDelTerreno);

	areaDelTerreno = (anchoDelTerreno * largoDelTerreno);

	cantidadCemento = (areaDelTerreno*2);
	cantidadCal = (areaDelTerreno*3);

	mensaje = "Para realizar un contrapiso de "+areaDelTerreno+" metros cuadrados, se necesitan "
	+cantidadCal+" bolsas de cal y "+cantidadCemento+" bolsas de cemento";

	alert(mensaje);

}

*/
//Gonzalo Reynoso