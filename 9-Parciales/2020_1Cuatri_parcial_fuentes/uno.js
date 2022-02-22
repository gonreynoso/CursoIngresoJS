function mostrar() paulina ramirez
//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
//de cada una debo obtener los siguientes datos:
//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//la Marca y el fabricante.
//Se debe Informar al usuario lo siguiente:
//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//b) Del tipo con mas unidades, el promedio por compra
//c) Cuántas unidades de jabones hay

{
  let barbijo;
  let jabón;
  let alcohol;

  let cantidadDeUnidades;
  let marca;
  let fabricante;
  let masBarato;
  let masUnidades;
  let promedio;
  let tipoDeProducto;
  let contador;
  let precio;
  let banderaPrimerAlcohol;

  contador = 0;
  

  while(contador<5)
  {
    tipoDeProducto=prompt("Ingrese el producto");
    while(tipoDeProducto=="barbijo" || tipoDeProducto=="jabón" || tipoDeProducto=="alcohol")
    {
      cantidadDeUnidades= prompt("Error, reingrese el tipo de producto");

    }
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    while(precio<100 || precio>300);
    {
        precio = prompt("Error, Ingrese reingrese entre $100 y $300");
    }

    cantidadDeUnidades = prompt("Ingrese cantidad de unidades");
    cantidadDeUnidades = parseInt(cantidadDeUnidades);
    while(cantidadDeUnidades <0 || cantidadDeUnidades >1000);
    {
        cantidadDeUnidades  = prompt("Error, Ingrese reingrese entre $100 y $300");
    }
    fabricante = prompt("Ingrese fabricante");
    marca = prompt("Ingrese marca");

    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

    if(tipoDeProducto=="alcohol")
    {
      if (banderaPrimerAlcohol=="no paso")
      {
        banderaPrimerAlcohol= "ya paso";
        precioAlcoholMasBarato=precio;
        fabricanteAlcoholMasBarato= fabricante;
        cantidadDeAlcoholMasBarato= cantidadDeUnidades;     
      }
      else
      {
        if(precio<precioAlcoholMasBarato)
        {
          precioAlcoholMasBarato=precio;
          fabricanteAlcoholMasBarato= fabricante;
          cantidadDeAlcoholMasBarato= cantidadDeUnidades;    
        }
      }
    }
    //b) Del tipo con mas unidades, el promedio por compra

    switch (tipoDeProducto)
    {
      case "barbijo":
        contadorDeBarbijos=contadorDeBarbijos+1;
        acumuladorDeBarbijos=acumuladorDeBarbijos+cantidadDeUnidades;
        break;
      case "alcohol":
        contadorDeAlcohol=contadorDeAlcohol+1;
        acumuladorDeAlcohol=acumuladorDeAlcohol+cantidadDeUnidades;
            if (banderaPrimerAlcohol=="no paso")
            {
              banderaPrimerAlcohol= "ya paso";
              precioAlcoholMasBarato=precio;
              fabricanteAlcoholMasBarato= fabricante;
              cantidadDeAlcoholMasBarato= cantidadDeUnidades;     
            }
            else
            {
              if(precio<precioAlcoholMasBarato)
              {
                precioAlcoholMasBarato=precio;
                fabricanteAlcoholMasBarato= fabricante;
                cantidadDeAlcoholMasBarato= cantidadDeUnidades;    
              }
            }
      break;
      case "jabon":
        contadorDeJabon=contadorDeJabon+1;
        acumuladorDeJabon=acumuladorDeJaboncontadorDeJabon+cantidadDeUnidades;
      break;
    }
  }

    //b) Del tipo con mas unidades, el promedio por compra
  if(acumuladorDeJabon>acumuladorDeAlcohol && acumuladorDeJabon> acumuladorDeBarbijos)
  {
    //El que mas tiene es el jabon.
    promedioDelMasVendido=acumuladorDeJabon/contadorDeJabon;
  }
  else
  {
    if(acumuladorDeAlcohol>acumuladorDeBarbijos)
    {
      // Es el alcohol.
      promedioDelMasVendido=acumuladorDeAlcohol/contadorDeAlcohol;
    }
    else
    {
      //Son los barbijos.
      promedioDelMasVendido=acumuladorDeBarbijos/contadorDeBarbijos;
    }

  }
  //c) Cuántas unidades de jabones hay
  


  document.write("El tipo de producto es" + "(<dbr)");
  document.write("La cantidad es" + "(<dbr)");


  

}

