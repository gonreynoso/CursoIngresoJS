function mostrar()
/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

{


let tipoProducto;
let cantidadDeBolsas;
let precioPorBolsa;
let precioTotal;
let respuesta;
let contadorBolsas;
let precioBruto;
let acumuladorPrecioBruto;
let contadorArena;
let contadorCal;
let contadorCemento;


contadorCemento=0;
contadorCal=0;
contadorArena=0;
acumuladorPrecioBruto=0;
contadorBolsas=0;
respuesta= true;

while (respuesta == true)
{
  tipoProducto = prompt ("ingrese un tipo de producto");

  while(tipoProducto!= "arena" && tipoProducto!= "cal" && tipoProducto!= "cemento" )
  {
    tipoProducto = prompt ("Error , Producto invalido");
  }

  cantidadDeBolsas = prompt ("ingrese la cantidad de bolsas");
  cantidadDeBolsas = parseInt(cantidadDeBolsas);

  while(cantidadDeBolsas<0)
  {
  cantidadDeBolsas = prompt ("Error , Ingrese la cantidad de bolsas");
  cantidadDeBolsas = parseInt(cantidadDeBolsas);
  }


  precioPorBolsa = prompt("ingrese la cantidad de bolsas");
  precioPorBolsa = parseInt;

  while(precioPorBolsa<1)
  {
  precioPorBolsa = prompt ("Error , Re-ingrese");
  precioPorBolsa = parseInt(precioPorBolsa);
  }

  precioBruto = cantidadDeBolsas * precioPorBolsa;
  acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;

  switch(tipoProducto)
  {
    case"arena":
      contadorArena = contadorArena + cantidadDeBolsas;
    break;
    case"cal":
      contadorCal = contadorCal + cantidadDeBolsas;
    break;
    case"cemento":
      contadorCemento = contadorCemento + cantidadDeBolsas; 
    break;
  }
  

  respuesta = prompt("¿Desea seguir ingresando productos?, SI O NO")

}

if(contadorArena>contadorCemento && contadorArena>contadorCal)
{
  //arena es el mayor
else
{
  if (contadorCal>contadorCemento) 
  {
    //cal es el mas grande
  }
  else
  {
    contadorCemento
  }
}
}

contadorBolsas =  contadorCemento + contadorArena + contadorCal;






}
