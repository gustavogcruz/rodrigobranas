/* o resultado é baseado na base 2 - operações bit a bit são feitas em 32 bits

| - OR  - compara bit a bit
& - AND
 ^ - XOR
 ~ - NOT
 << - Deslocamento de bits esquerda - multiplica por 2
 >> - Deslocamento de bits direita - divide por 2
 >>> - Deslocamento de bits esquerda mudando o sinal

*/

4 | 3; // resultado - 0b111 (7)
3 & 1; // resultado - 0b1 (1)
5 ^ 2; // resultado - 0b111 (7)
~2; // resultado - (-3)
4 << 2; // resultado - 0b10000 (16)
128 >> 1; // resultado - 0b1000000 (64)
-2 >>> 1; // resultado - 0b01111111111111111111111111111111 (2147483647)
