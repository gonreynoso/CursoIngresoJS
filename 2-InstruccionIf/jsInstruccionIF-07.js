//Ejercicio de los sabados

function mostrar()

{
	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estadoCivil;


	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil=document.getElementById('estadoCivil').value;

	nombreIngresado=prompt('Ingrese su nombre');

	if(edadIngresada<13) // menor de 13
	{
		mensaje='Feliz dia';
	}
	if(nombreIngresado=='Ricardo')
	{
		mensaje='muy chiquito para ese nombre'
	}
	else //menor de 18
	{
		if(edadIngresada<18)
		{
			mensaje='Usted es adolescente';

			if(edadIngresada==17)
			{
				mensaje = mensaje + ' Ultimo anho';
			}
			if(nombreIngresado=='Violeta')
			{
				mensaje= mensaje + ' como un color';
			}
			if(estadoCivil=='Divorciado')
			{
				mensaje= mensaje + ' toda una vida por delante';
			}
		}
		else //mayor de 18
		{
			mensaje= 'Tenes edad de laburar';
			
			if(edadIngresada==33)
			{
				mensaje= mensaje +' y como Cristo';
			}
			if(estadoCivil=='Soltero')
			{
				mensaje= mensaje + ' a salir';
			}
			if(edadIngresada>60)
			{
				mensaje= mensaje + ' ,a jubilarse';
				if(edadIngresada==88)
				{
					mensaje= mensaje + ' ,lindo numero';
				}
				if(nombreIngresado == 'Alfredo')
				{
					mensaje = ' como el de QUEEN'
				}
			}
			if(estadoCivil=='Casado')
			{
				mensaje='Casada quiere casa';
			}
		}
		
	}
	
	if(edadIngresada % 2 == 0)
	{
		mensaje= mensaje+ ' ,sos par!!!';
	}

	alert(mensaje);
}




























/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje:
 'Es muy pequeño para NO ser soltero.'
 Gonzalo Reynoso
 
 function mostrar()
 {
	let edadIngresada;
	let estadoCivil;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);
	estadoCivil=document.getElementById("estadoCivil").value;
	

		if(edadIngresada<18)
				{
			if(estadoCivil!="Soltero")
					{
				alert("Es muy pequeño para NO ser soltero")
					}
				} 					//if anidado


	
}	//FIN DE LA FUNCIÓN
*/