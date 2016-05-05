function soma(a, b){
  return a+b;
}

function produto(a, b){
  return a*b;
}

function igualdade(a, b){
  return a==b?1:0;
}

function alt(a, b){
  return a*a/(b+1);
}

function _150(a, b){
  return a>b?1:(a<b?5:0);
}

function matriz(n, func){

  //Gera a matriz
  for(i=0;i<n;i++)
    for(j=0;j<n;j++)
      matriz[i*n+j]=func(i, j);

  //Imprime a matriz
  for(i=0;i<n;i++){
    out=[];
    for(j=0;j<n;j++)
      out+=matriz[i*n+j] + " ";
    console.log(out);
  }

  //Espaço para organizar melhor
  console.log("");

}

matriz(5, soma);
matriz(5, produto);
matriz(5, igualdade);
matriz(5, alt);
matriz(5, _150);
