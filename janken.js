function juego(a) {
  const randomNumber = Math.random();
  let numero = 0;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    numero = 1;
    alert("Maquina eligio Piedra");
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    numero = 2;
    alert("Maquina eligio Papel");
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    numero = 3;
    alert("Maquina eligio Tijera");
  };
  if(a == numero){
    alert('Es un empate');
  }else if(a == 1 && numero ==2){
    alert('La maquina gana');
  }else if(a == 1 && numero==3){
    alert('Yo gano');
  }else if(a == 2 && numero == 1){
    alert('Yo gano');
  }else if(a == 2 && numero == 3){
    alert('Maquina gana');
  }else if(a == 3 && numero == 1){
    alert('Maquina gana');
  }else if(a == 3 && numero == 2){
    alert('Yo gano');
  };
};