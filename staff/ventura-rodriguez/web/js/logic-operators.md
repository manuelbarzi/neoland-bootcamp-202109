Los operadores lógicos son condiciones binarias, admiten como parámetros
valores booleanos y devuelven un valor booleano dependiendo de si se cumple
o no la condición dada.


Operador lógico NOT `!` esepra un parámetro `!bool`, devuelve el valor contrario
a bool.

`!false` devuelve `true`.

`!true` devuelve `false`.


Operador lógico AND `&&` espera 2 parámetros `(bool && bool)`, devuelve `true`
si los 2 parámetros son `true`, en cualquier otro caso será `false`.

`(true && true)` devuelve `true`.

`(!true && true)` devuelve `false`.

`(true && !true)` devuelve `false`.

`(!true && !true)` devuelve `false`.


`(true && false)` devuelve `false`.

`(!true && false)` devuelve `false`.

`(true && !false)` devuelve `true`.

`(!true && !false)` devuelve `false`.


`(false && true)` devuelve `false`.

`(false && !true)` devuelve `false`.

`(!false && true)` devuelve `true`.

`(!false && !true)` devuelve `false`.


`(false && false)` devuelve `false`.

`(false && !false)` devuelve `false`.

`(!false && false)` devuelve `false`.

`(!false && !false)` devuelve `true`.


Operador lógico OR `false` espera 2 parámetros `(bool || bool)`, devuelve `true`
si 1 de los parámetros son `true`, si ambos parámetros son `false` devuelve `false`.

`(true || true)` devuelve `true`.

`(!true || true)` devuelve `true`.

`(true || !true)` devuelve `true`.

`(!true || !true)` devuelve `false`.

`(true || false)` devuelve `true`.

`(!true || false)` devuelve `false`.

`(true || !false)` devuelve `true`.

`(!true || !false)` devuelve `true`.

`(false || true)` devuelve `true`.

`(false || !true)` devuelve `false`.

`(!false || true)` devuelve `true`.

`(!false || !true)` devuelve `true`.

`(false || false)` devuelve `false`.

`(false || !false)` devuelve `true`.

`(!false || false)` devuelve `true`.

`(!false || !false)` devuelve `true`.