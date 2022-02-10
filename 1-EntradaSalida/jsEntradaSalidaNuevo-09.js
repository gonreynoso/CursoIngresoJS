/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

function mostrarAumento()
{

	let sueldo;
	let resultado;
	let sueldoconaumento;
    let mensaje;

    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo= parseInt(sueldo); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school

    sueldoconaumento = sueldo*10/100 + sueldo;

    document.getElementById("txtIdResultado").value = sueldoconaumento;

    mensaje=("El precio con un aumento del 10% es " + sueldoconaumento);

    alert(mensaje);

}


	// Gonzalo Reynoso
    



9 bis
en el ejercicio 9 e/s
lo anterior mas
se debe pedir el % por prompt



function mostrarAumento()
{

	let sueldo;
	let resultado;
	let sueldoConAumento;

    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo= parseInt(sueldo); // parseInt devuelve o transforma la variable en numero o buscarla definición en w3school
	sueldoConAumento = prompt("Coloque aqui su porcentaje");
    sueldoConAumento = sueldo*10/100 + sueldo;
    
	document.getElementById("txtIdResultado").value = sueldoConAumento;

    alert("Un aumento del 10% es " + sueldoConAumento);


//Gonzalo Reynoso


    */