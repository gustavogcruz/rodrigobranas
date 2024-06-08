angular.module('listaTelefonica', [])
    .controller('listaTelefonicaCtrl', function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) {
        //console.log(serialGenerator.generate());
        $scope.app = "Lista Telefonica";
        $scope.contatos = [];
        $scope.operadoras = [];

        var carregarContatos = function () {

            contatosAPI.getContatos()
                .success(function (data, status) {
                    $scope.contatos = data;
                }).error(function (data, status) {
                    $scope.error = "Não foi possível carregar os dados!";// + data;
                })
        }

        var carregarOperadoras = function () {
            operadorasAPI.getOperadoras()
                .success(function (data, status) {
                    $scope.operadoras = data;
                });
        }

        $scope.adicionaContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();
            contatosAPI.saveContato(contato).success(function (data) {
                delete $scope.contato; //exclui o objeto
                $scope.contatoForm.$setPristine();
                // $scope.contatos.push(data); 
                //$scope.contatos.push(angular.copy(contatos)); // copia o objeto
                carregarContatos();
            });
        };

        $scope.removerContato = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) return contato;
            });
        };

        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;
            })
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
        }

        carregarContatos();
        carregarOperadoras();
    });