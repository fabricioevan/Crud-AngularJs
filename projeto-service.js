angular.module("app").factory("projetoService", projetoService);
projetoService.$inject = ["$http"]

function projetoService($http) {
    const REST = 'http://localhost:3000/clientes'
    var service = {
        exec_GET: function() {
            return $http.get(REST).then(tratarResposta, tratarErro);
        },
        exec_GET_ID: function(id) {
            return $http.get(REST + '/' + id).then(tratarResposta, tratarErro);
        },
        exec_DEL: function(id) {
            return $http.delete(REST + '/' + id).then(tratarResposta, tratarErro);
        },
        exec_POST: function(cliente) {
            return $http.post(REST, cliente).then(tratarResposta, tratarErro);
        },
        exec_PUT: function(cliente) {
            return $http.put(REST + '/' + cliente.id, cliente).then(tratarResposta, tratarErro);
        }
    }

    function tratarResposta(response) {
        return response.data;
    }

    function tratarErro(error) {
        return error.data;
    }
    return service;
}