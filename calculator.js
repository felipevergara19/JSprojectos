
function resultado (resultado){
  document.getElementById('ingreso').value = calcular(resultado|| 0);
}
function calcular(resultado){
  return eval(resultado);
}

function limpiar(){
  document.getElementById('ingreso').value = '';
}

