angular.module('listaTelefonica').config( function ( serialGeneratorProvider){

    serialGeneratorProvider.setLength(6);
    
    //console.log(serialGeneratorProvider.getLength());

});
