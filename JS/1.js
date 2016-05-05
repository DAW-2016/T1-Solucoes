function matrix(i,j,style){
  var m  = [];

  for (var a=0;a<i;a++){
    var temp = [];
    for (var b=0;b<i;b++)
      temp[b] = style(a,b);
    m[a]= temp;
    console.log(temp);
  }
  return m;
}

function sum(a,b){
    return a+b;
}
function mult(a,b){
  return a*b;
}

function isequal(a,b){
  return  a==b?1:0;
}
function bigjoa(a,b){
  return  (a*a)/(b+1);
}
function joa(a,b){
  return  a > b ? 1 : (a<b? 5 : 0);
}

var c = 5;
var d = 5;

console.log("SOMA");
matrix(c,d,sum);
console.log("MULTIPLICAÇÃO");
matrix(c,d,mult);
console.log("É IGUAL?");
matrix(c,d,isequal);
console.log("FUNÇÃO BIG JOA");
matrix(c,d,bigjoa);
console.log("FUNÇÃO JOA");
matrix(c,d,joa);
