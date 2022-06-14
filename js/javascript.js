var linhas1, colunas1;
var linhas2, colunas2;
var soma, soma2;

//Criação da Primeira matriz
  alert("será feito uma soma de duas matrizes 3x3!");
  linhas1 = 3
  colunas1 = 3
    
  var matriz = [];

  for(var i = 0; i < linhas1; i++){
      matriz[i] = [];
        for(var j = 0; j < colunas1; j++){
            matriz[i] [j] = ' ';
        }
  }

  for( var l = 0; l < linhas1; l++){
      for( var c = 0; c < colunas1; c++){
          matriz [l] [c] = prompt( "Digite o valor da posição " + (l+1) + " " + (c+1));
      }
  }
alert("a seguir a próxima matriz");
//Criação da Primeira matriz
  linhas2 =  3;
  colunas2 =  3;
    
  var matriz2 = [];

  for(var m = 0; m < linhas2; m++){
      matriz2[m] = [];
        for(var n = 0; n < colunas2; n++){
            matriz2[m] [n] = ' ';
        }
  }

  for(var l2 = 0; l2 < linhas2; l2++){
      for(var c2 = 0; c2 < colunas2; c2++){
          matriz2 [l2] [c2] = prompt( "Digite o valor da posição " + (l2+1) + " " + (c2+1));
      }
  }


//Avaliação das matrizes
    soma = linhas1 + colunas1;
    soma2 = linhas2 + colunas2; 

    if( soma > soma2 || soma < soma2 ){
        document.write("<h2 id=erro>A matriz não pode ser calculada pois as dimenções digitadas não são equivalentes");
    }else{

//Soma de matrizes
  var matrizf = [];

  for(var i = 0; i < matriz.length; i++){
    matrizf[i] = [];
      for(var j = 0; j <matriz2.length [j]; j++){
          matrizf[i] [j] = ' ';
      }
    }

  for(var x = 0; x < matriz.length; x++){
    for(var y = 0; y < matriz2.length ; y++){
       matrizf [x] [y] = parseFloat(matriz [x] [y]) + parseFloat(matriz2[x] [y]);
    }
  }

//Impressão das Matrizes
  
  document.write( "<div class=tabelas>");
  document.write( "<table class=margem border=1>");
  

  for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
       for (x = 0; x < matriz[i].length; x++) {
            linha = linha + "<td>" + matriz[i][x] + "</td>";
        }
    linha=linha+"</tr>"
    document.write(linha);
   }
  
  document.write( "</table>");
  document.write( "<h1 class=operadores> + </h1>");

  document.write( "<table class=margem border=1>");

  for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
       for (x = 0; x < matriz2[i].length; x++) {
            linha = linha + "<td>" + matriz2[i][x] + "</td>";
        }
    linha=linha+"</tr>"
    document.write(linha);
   }
  
  document.write( "</table>");
  document.write( "<h1 class=operadores> = </h1>");

  document.write( "<table class=margem border=1>");

  for (i = 0; i < matrizf.length; i++) {
    var linha = '<tr>';
       for (x = 0; x < matrizf[i].length; x++) {
            linha = linha + "<td>" + matrizf[i][x] + "</td>";
        }
    linha=linha+"</tr>"
    document.write(linha);
   }
  document.write( "</table>");
  document.write( "</div>");
}


