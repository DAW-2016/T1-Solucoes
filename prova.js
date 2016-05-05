const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var M=[];
var h = "#";
var linhas;
var i=0;j=0;

rl.question('Digite a quantidade de linhas',(linhas) => {
  rl.question('Digite a funcao: 1 - i+j\n2- i*j\n3- i== j ? 1 : 0\n4- i^2/(j+1)\n5 - i>j?1:(i<j?5:0)',(opcao) =>{
switch (opcao) {
  case 1:
  for(i=0;i<linhas;i++){
  M[i] = [];
  h="";
   for(j=0;j<=i;j++){
     h = i+j;
     }

   console.log(h);
  }

    break;
  default:

  case 2:
  for(i=0;i<linhas;i++){
  M[i] = [];
  k=""
   for(j=0;j<=i;j++){
      k = i*j;
     }

   console.log(k);
  }
  break;

  case 3:
  for(i=0;i<linhas;i++){
  M[i] = [];
  a=""
   for(j=0;j<=i;j++){
      a= i == j ? 1 : 0;
     }

   console.log(h);
  }
  break;

  case 4:
  for(i=0;i<linhas;i++){
  M[i] = [];
  b="";
   for(j=0;j<=i;j++){
          b=i^2/(j+1);
     }

   console.log(b);
  }
  break;


  case 5:
  for(i=0;i<linhas;i++){
  M[i] = [];
  d="";
   for(j=0;j<=i;j++){
      d = i > j ? 1 : (i < j ? 5 : 0);
     }

   console.log(h);
  }
  break;
}


      rl.close;
}
});
