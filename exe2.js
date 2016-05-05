

function roda(m,func,dim) {
var pontoMatriz;

for (var i = 0; i < dim; i++) {
    for (var j = 0; j < dim; j++) {
        m[i][j] = func(m,i,j);
    }
}


function soma(m,i,j){
    m[i][j] = i + j;
}

function multiplica(m,i,j){
    m[i][j] = i * j;
}

function multiplica(m,i,j){
    m[i][j] = i * j;
}
function iIgualj(m,i,j) {
    m[i][j] = i == j ? 1 : 0;
}

function multiplicaEdivide(m,i,j){
    m[i][j] = i^2/(j+1);
}

function ultimo(m,i,j){
  m[i][j] = i > j ? 1 : (i < j ? 5 : 0);
}



num = [];

var dim = prompt("Digite a dimensão da matriz");

console.log(roda(m,func,dim));
console.log(roda(m,func,dim));
console.log(roda(m,func,dim));
console.log(roda(m,func,dim));
console.log(roda(m,func,dim));
