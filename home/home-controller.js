angular.module('app').controller('HomeController', HomeController);
HomeController.$inject - ['$location', 'projetoService'];

function HomeController($location, projetoService) {
    vm = this;
    vm.texto = 'Home'
    vm.clientes = ''
    vm.erro = false

    vm.init = function() {
        vm.listarClientes()
    }

    vm.navegar = function(rota, id) {
        $location.path(rota + '/' + id)
    }

    vm.listarClientes = function() {
        projetoService.exec_GET().then(function(resposta) {
            if (resposta) {
                vm.clientes = resposta
            } else {
                vm.erro = true
            }
        })
    }
    vm.excluir = function(id) {
        projetoService.exec_DEL(id).then(function(resposta) {
            if (resposta) {
                // Mensagem de Resposta
            }
        })
    }
    vm.editar = function(id) {
        vm.navegar('Cadastro', id)
    }
}