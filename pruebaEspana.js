const arreglo = "1";
const arreglo2 = "bbbaab";
const arreglo3 = "aaabaabba";
const arreglo4 = "1aaaababbbbaaaababbaaaaaabbbbb123aabb";
const arreglo5 = "1bb2abaaa";

function arregloRepetidos(string) {
  const letras = /^[a-zA-Z]+$/;
  return CadenaSinRepetidos = string.split('').reduce((totalFinal,cadenaActual,indexCadena,arregloOriginal) => {
    if (letras.test(cadenaActual)) {
      if (arregloOriginal[indexCadena + 1] !== cadenaActual) {
        totalFinal += cadenaActual;
      };
    } return totalFinal;
  }, '');
  
}

console.log(arregloRepetidos(arreglo));
console.log(arregloRepetidos(arreglo2));
console.log(arregloRepetidos(arreglo3));
console.log(arregloRepetidos(arreglo4));
console.log(arregloRepetidos(arreglo5));

