angular.module('listaTelefonica').service("operadorasAPI", function($http, config) { //Construction Function
        this.getOperadoras = function() {
            return $http.get(config.baseUrl + "/operadoras")
        };
});