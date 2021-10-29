Comparando el tablero con una foto de tableros ganadores
 (matrix[0][0] && matrix[0][1] && matrix[0][2])
 (matrix[1][0] && matrix[1][1] && matrix[1][2])
 (matrix[2][0] && matrix[2][1] && matrix[2][2])

 (matrix[0][0] && matrix[1][0] && matrix[2][0])
 (matrix[0][1] && matrix[1][1] && matrix[2][1])
 (matrix[0][2] && matrix[1][2] && matrix[2][2])

 (matrix[0][0] && matrix[1][1] && matrix[2][2])
 (matrix[0][2] && matrix[1][1] && matrix[2][0])


 Comparando las posiciones que se encuentran alrededor de la última ficha
 Input matrix[x][y]

 Then matrix[1][1] ===>
  matrix[0][0]    matrix[0][1]    matrix[0][2]
  matrix[1][0]    matrix[1][2]
  matrix[2][0]    matrix[2][1]    matrix[2][2]

 Combinations ===>    matrix[x--][y--]    matrix[x--][y]    matrix[x--][y++]
 Combinations ===>    matrix[x][y--]    matrix[x][y++]
 Combinations ===>    matrix[x++][y--]    matrix[x++][y]    matrix[x++][y++]

function checkAround(x, y) {
    var bool = false;
    switch(true) {
        case (matrix[x-1][y-1]  &&  (matrix[x-2][y-2]   || matrix[x+1][y+1]))   : !bool; break;
        case (matrix[x+1][y+1]  &&  (matrix[x+2][y+2]   || matrix[x-1][y-1]))   : !bool; break;

        case (matrix[x-1][y+1]  &&  (matrix[x-2][y+2]   || matrix[x+1][y-1]))   : !bool; break;
        case (matrix[x+1][y-1]  &&  (matrix[x+2][y-2]   || matrix[x-1][y+1]))   : !bool; break;

        case (matrix[x-1][y]    &&  (matrix[x-2][y]     || matrix[x+1][y]))     : !bool; break;
        case (matrix[x+1][y]    &&  (matrix[x+2][y]     || matrix[x-1][y]))     : !bool; break;

        case (matrix[x][y+1]    &&  (matrix[x][y+2]     || matrix[x][y-1]))     : !bool; break;
        case (matrix[x][y-1]    &&  (matrix[x][y-2]     || matrix[x][y+1]))     : !bool; break;
    }
    return bool;
}