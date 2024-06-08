/* apesar de ser estático, o scope chain faz referência para objetos que estão na memória e podem
ser compatilhados por mais de uma função*/

// const obj1 = {};
//  for (var v1 = 0; v1 < 3; v1++) {
//      obj1[v1] = function() {
//          console.log(v1);
//      }
//  }
//  obj1[0]();
//  obj1[1]();
//  obj1[2]();

 //console.log(obj1);


//  const obj1 = {};
//  for (var v1 = 0; v1 < 3; v1++) {
//      obj1[v1] = (function(v2) {
//         return function() {
//             console.log(v2);
//         };
//      })(v1);
//  }
//  obj1[0]();
//  obj1[1]();
//  obj1[2]();


 const obj1 = {};
 for (var v1 = 0; v1 < 3; v1++) {
     obj1[v1] = (function() {
        console.log(this.v2);
     }).bind({v2: v1});
 }
 obj1[0]();
 obj1[1]();
 obj1[2]();