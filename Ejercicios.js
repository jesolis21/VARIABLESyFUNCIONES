
console.log("Para calcular el área de un rectángulo multiplicamos el largo por el ancho. \nEscribe el largo y el ancho del rectangulo utilizando la funcion: Area()")
function Area() {
    largo = prompt("Introduce el largo")
    ancho = prompt("Introduce el ancho")
    let arearectangulo = largo * ancho
    return "El area es igual a: " + arearectangulo;
  }

  console.log("\nPara calcular el perimetro de una circunferencia, utiliza la función: perimetroCircunferencia() ")
function perimetroCircunferencia() {
    radio = prompt("Introduce el radio de la circunferenca")
    const pi = 3.1416;
    let perimetro = (2*pi)*radio;
    return perimetro;
  }

  console.log("\nElevar un número al cuadrado es multiplicarlo por sí mismo \nIntroduce el numero utilizando la función: elevaAlCuadrado()")
function elevaAlCuadrado(numero) {
    numero = prompt("Introduce el Numero a elevar al cuadrado:")
    let cuadrado = numero * numero
    return cuadrado;
  }

  console.log("\nPara calcular la conversion de grados celsius a farenheit utiliza la función: conversionFarenheit() ")
  function conversionFarenheit(){
    gradosCelcius = prompt("Introduce los grados Celcius a convertir a Farenheit")
    let conversion = ((gradosCelcius * 1.8 ) + 32)
    return conversion;
  }

 console.log ("\ncalcular el valor del voltaje dadas la resistencia y la corriente utiliza la función: voltaje()")
 function voltaje (){
    resistencia = prompt ("Introduce la resistencia")
    corriente = prompt ("Introduce la corriente")
 let rvoltaje = resistencia * corriente 
 return "El voltaje es igual a " + rvoltaje; 

 }

console.log ("\ncalcular el volumen de una esfera utiliza la funcion: calcularEsfera") 
function calcularEsfera () { 
radio = prompt ("Introduce un valor para el radio")
const pi= 3.1416
volumen = (1.33 * pi )* radio * radio * radio
return "El volumen es igual a " + volumen  
}

