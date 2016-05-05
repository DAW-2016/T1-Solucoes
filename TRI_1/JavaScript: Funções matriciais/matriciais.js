/**
 * Created by lucas on 05/05/16.
 */

print = console.log;

var matriz = function(func,matrix){


    for(var i = 0; i < tamanhoDaMatriz; ++i){
        for(var j = 0; j < tamanhoDaMatriz; ++j){
            matrix[i][j] = func(i,j);
        }
    }

    return matrix;
}

var imprime = function (matrix) {

    var aux = [];
    for(var i = 0; i < tamanhoDaMatriz; ++i){
        for(var j = 0; j < tamanhoDaMatriz; ++j){
            aux[j] = matrix[i][j];
        }
        print(aux);
    }
}


var soma = function (i,j) {
    return i + j;
}

var mult = function (i,j) {
    return i * j;
}

var igual = function (i,j) {
    return i == j ? 1 : 0;
}

var divide = function (i,j) {
    return (i*i)/(j+1);
}

var compara = function (i,j) {
    return i > j ? 1 :(i < j ? 5 : 0);
}

var tamanhoDaMatriz = 4;

var matriz_1 = [[],[],[],[]];

print("--------------------------------------------")
print("m[i,j] = i + j");
print("");
imprime(matriz(soma,matriz_1));
print("--------------------------------------------")
print("m[i,j] = i * j");
print("");
imprime(matriz(mult,matriz_1));
print("--------------------------------------------")
print("m[i,j] = i == j ? 1 : 0");
print("");
imprime(matriz(igual,matriz_1));
print("--------------------------------------------")
print("m[i,j] = i^2/(j+1)");
print("");
imprime(matriz(divide,matriz_1));
print("--------------------------------------------")
print("m[i,j] = i > j ? 1 : (i < j ? 5 : 0)");
print("");
imprime(matriz(compara,matriz_1));
print("--------------------------------------------")
