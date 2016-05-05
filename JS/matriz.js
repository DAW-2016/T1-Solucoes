var criamatriz = function(crit) {

  var matriz = [];

  for (var i = 0; i < 5; i++) {
    matriz[i] = [];
    for (var i2 = 0; i2 < 5; i2++) {
      matriz[i][i2] = crit(i, i2);
    }
  }

  console.log(matriz);

}


var soma = function(a, b){
  return a+b;
}

var mult = function(a, b){
  return a*b;
}

var igual = function(a, b){
  return a == b ? 1 : 0;
}

var elevadivide = function(a, b){
  return (a*a)/(b+1);
}

var ultimocriterio = function(a, b){
  return a > b ? 1 : (i< j ? 5 : 0);
}
