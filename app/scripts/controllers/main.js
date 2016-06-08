'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.nombre = '';
    $scope.productos = [];
    $scope.items = [];

    var id = 0;

    var obtenerId = function() {
      return id++;
    }

    $scope.agregarProducto = function(nombre) {
      console.log(nombre);
      let producto = {
        id: obtenerId(),
        nombre: nombre,
        precio: Math.round(Math.random() * (30 - 5) + 5),
        categoria: '',
        stock: 0
      };
      $scope.productos.push(producto);
      $scope.nombre = '';
    }

    $scope.agregarItem = function(producto) {

      //console.log('agregarItem %O', producto);
      var position = $scope.productos.findIndex(function(elemento, indice, productos) {
        return elemento.id === producto.id;
      });


      $scope.productos[position].cantidad = 1;
      $scope.items.push($scope.productos[position]);
      console.log('Producto agregado: %O',$scope.productos[position]);
    }

    $scope.incrementarCantidad = function (id) {
      console.log(id);
      // encontrar el indice del arreglo factura que corresponde a id
      var position = $scope.items.findIndex(function(elemento, indice, items) {
        return elemento.id === id;
      });
      // actualizar la cantidad del arreglo factura en esa posicion
      $scope.items[position].cantidad++;
    };
  });
