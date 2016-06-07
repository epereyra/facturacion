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
    $scope.factura = [];

    $scope.agregarProducto = function(nombre) {
      console.log(nombre);
      $scope.productos.push(nombre);
      $scope.nombre = '';
    }

    $scope.agregarItem = function(nombre) {
      $scope.item = {
        id: 0,
        descripcion: nombre,
        cantidad: 0,
        precio: 15
      };

      console.log($scope.item);
      $scope.factura.push($scope.item);
      $scope.item = {};
    }

    $scope.incrementarCantidad = function (id) {
      // encontrar el indice del arreglo factura que corresponde a id
      // actualizar la cantidad del arreglo factura en esa posicion
    };
  });
