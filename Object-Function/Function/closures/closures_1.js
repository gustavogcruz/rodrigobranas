/* Toda função permite a utilização de variáveis que não foram declaradas
 e nem passadas por parâmetro*/

const v1 = 10;
function fn1() {
    function fn2() {
        console.log(v1);
    }
    fn2();
}
fn1();