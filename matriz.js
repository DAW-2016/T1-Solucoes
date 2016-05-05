function matrizOperation() {

  this.soma = function (matrix) {
    var linhas = matrix.length;
    var colunas = matrix[0].length
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            matrix[i][j] = i + j;
        }
    }
    return matrix;
  };

  this.mult = function (matrix) {
    var linhas = matrix.length;
    var colunas = matrix[0].length;
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            matrix[i][j] = i * j;
        }
    }
    return matrix;
  };

  this.equals = function (matrix) {
    var linhas = matrix.length;
    var colunas = matrix[0].length;
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            matrix[i][j] = i == j ? 1 : 0;
        }
    }
    return matrix;
  };

  this.div = function (matrix) {
    var linhas = matrix.length;
    var colunas = matrix[0].length;
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            matrix[i][j] = i^2/(j+1);
        }
    }
    return matrix;
  };

  this.compare = function (matrix) {
    var linhas = matrix.length;
    var colunas = matrix[0].length;
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            matrix[i][j] = i > j ? 1 : (i < j ? 5 : 0);
        }
    }
    return matrix;
  };

  this.print = function (matrix) {
    var print = console.log;;
    for(var i = 0; i < linhas; i++){
        for(var j = 0; j < colunas; j++){
            print(matrix[i][j]);
        }
    }
  }
}
var print = console.log;
var vetor = [[1,2],[3,4],[5,6]];
var op = new matrizOperation();
// printar o vetor só funciona no NodeJS, browser não
print(op.soma(vetor));
print(op.mult(vetor));
print(op.div(vetor));
print(op.equals(vetor));
print(op.compare(vetor));
