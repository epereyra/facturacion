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
    $scope.productos = [{
      "_id": "552474d0d9e3d079f78e4ef0",
      "nombre": "Té Dharamsala",
      "categoria": "Bebidas",
      "precio": 18,
      "stock": 39
    }, {
      "_id": "552474d0d9e3d079f78e4ef1",
      "nombre": "Cerveza tibetana Barley",
      "categoria": "Bebidas",
      "precio": 19,
      "stock": 17
    }, {
      "_id": "552474d0d9e3d079f78e4ef2",
      "nombre": "Sirope de regaliz",
      "categoria": "Condimentos",
      "precio": 10,
      "stock": 13
    }, {
      "_id": "552474d0d9e3d079f78e4ef3",
      "nombre": "Especias Cajun del chef Anton",
      "categoria": "Condimentos",
      "precio": 22,
      "stock": 53
    }, {
      "_id": "552474d0d9e3d079f78e4ef4",
      "nombre": "Mezcla Gumbo del chef Anton",
      "categoria": "Condimentos",
      "precio": 21.35,
      "stock": 0
    }, {
      "_id": "552474d0d9e3d079f78e4ef5",
      "nombre": "Mermelada de grosellas de la abuela",
      "categoria": "Condimentos",
      "precio": 25,
      "stock": 120
    }, {
      "_id": "552474d0d9e3d079f78e4ef6",
      "nombre": "Peras secas orgánicas del tío Bob",
      "categoria": "Frutas/Verduras",
      "precio": 30,
      "stock": 15
    }, {
      "_id": "552474d0d9e3d079f78e4ef7",
      "nombre": "Salsa de arándanos Northwoods",
      "categoria": "Condimentos",
      "precio": 40,
      "stock": 6
    }, {
      "_id": "552474d0d9e3d079f78e4ef8",
      "nombre": "Buey Mishi Kobe",
      "categoria": "Carnes",
      "precio": 97,
      "stock": 29
    }, {
      "_id": "552474d0d9e3d079f78e4ef9",
      "nombre": "Pez espada",
      "categoria": "Pescado/Marisco",
      "precio": 31,
      "stock": 31
    }, {
      "_id": "552474d0d9e3d079f78e4efa",
      "nombre": "Queso Cabrales",
      "categoria": "Lácteos",
      "precio": 21,
      "stock": 22
    }, {
      "_id": "552474d0d9e3d079f78e4efb",
      "nombre": "Queso Manchego La Pastora",
      "categoria": "Lácteos",
      "precio": 38,
      "stock": 86
    }, {
      "_id": "552474d0d9e3d079f78e4efc",
      "nombre": "Algas Konbu",
      "categoria": "Pescado/Marisco",
      "precio": 6,
      "stock": 24
    }, {
      "_id": "552474d0d9e3d079f78e4efd",
      "nombre": "Cuajada de judías",
      "categoria": "Frutas/Verduras",
      "precio": 23.25,
      "stock": 35
    }, {
      "_id": "552474d0d9e3d079f78e4efe",
      "nombre": "Salsa de soja baja en sodio",
      "categoria": "Condimentos",
      "precio": 15.5,
      "stock": 39
    }, {
      "_id": "552474d0d9e3d079f78e4eff",
      "nombre": "Postre de merengue Pavlova",
      "categoria": "Repostería",
      "precio": 17.45,
      "stock": 29
    }, {
      "_id": "552474d0d9e3d079f78e4f00",
      "nombre": "Cordero Alice Springs",
      "categoria": "Carnes",
      "precio": 39,
      "stock": 0
    }, {
      "_id": "552474d0d9e3d079f78e4f01",
      "nombre": "Langostinos tigre Carnarvon",
      "categoria": "Pescado/Marisco",
      "precio": 62.5,
      "stock": 42
    }, {
      "_id": "552474d0d9e3d079f78e4f02",
      "nombre": "Pastas de té de chocolate",
      "categoria": "Repostería",
      "precio": 9.2,
      "stock": 25
    }, {
      "_id": "552474d0d9e3d079f78e4f03",
      "nombre": "Mermelada de Sir Rodney's",
      "categoria": "Repostería",
      "precio": 81,
      "stock": 40
    }, {
      "_id": "552474d0d9e3d079f78e4f04",
      "nombre": "Bollos de Sir Rodney's",
      "categoria": "Repostería",
      "precio": 10,
      "stock": 3
    }, {
      "_id": "552474d0d9e3d079f78e4f05",
      "nombre": "Pan de centeno crujiente estilo Gustaf's",
      "categoria": "Granos/Cereales",
      "precio": 21,
      "stock": 104
    }, {
      "_id": "552474d0d9e3d079f78e4f06",
      "nombre": "Pan fino",
      "categoria": "Granos/Cereales",
      "precio": 9,
      "stock": 61
    }, {
      "_id": "552474d0d9e3d079f78e4f07",
      "nombre": "Refresco Guaraná Fantástica",
      "categoria": "Bebidas",
      "precio": 4.5,
      "stock": 20
    }, {
      "_id": "552474d0d9e3d079f78e4f08",
      "nombre": "Crema de chocolate y nueces NuNuCa",
      "categoria": "Repostería",
      "precio": 14,
      "stock": 76
    }, {
      "_id": "552474d0d9e3d079f78e4f09",
      "nombre": "Ositos de goma Gumbär",
      "categoria": "Repostería",
      "precio": 31.23,
      "stock": 15
    }, {
      "_id": "552474d0d9e3d079f78e4f0a",
      "nombre": "Chocolate Schoggi",
      "categoria": "Repostería",
      "precio": 43.9,
      "stock": 49
    }, {
      "_id": "552474d0d9e3d079f78e4f0b",
      "nombre": "Col fermentada Rössle",
      "categoria": "Frutas/Verduras",
      "precio": 45.6,
      "stock": 26
    }, {
      "_id": "552474d0d9e3d079f78e4f0c",
      "nombre": "Salchicha Thüringer",
      "categoria": "Carnes",
      "precio": 123.79,
      "stock": 0
    }, {
      "_id": "552474d0d9e3d079f78e4f0d",
      "nombre": "Arenque blanco del noroeste",
      "categoria": "Pescado/Marisco",
      "precio": 25.89,
      "stock": 10
    }, {
      "_id": "552474d0d9e3d079f78e4f0e",
      "nombre": "Queso gorgonzola Telino",
      "categoria": "Lácteos",
      "precio": 12,
      "stock": 0
    }, {
      "_id": "552474d0d9e3d079f78e4f0f",
      "nombre": "Queso Mascarpone Fabioli",
      "categoria": "Lácteos",
      "precio": 32,
      "stock": 9
    }, {
      "_id": "552474d0d9e3d079f78e4f10",
      "nombre": "Queso de cabra",
      "categoria": "Lácteos",
      "precio": 2,
      "stock": 112
    }, {
      "_id": "552474d0d9e3d079f78e4f11",
      "nombre": "Cerveza Sasquatch",
      "categoria": "Bebidas",
      "precio": 14,
      "stock": 111
    }, {
      "_id": "552474d0d9e3d079f78e4f12",
      "nombre": "Cerveza negra Steeleye",
      "categoria": "Bebidas",
      "precio": 18,
      "stock": 20
    }, {
      "_id": "552474d0d9e3d079f78e4f13",
      "nombre": "Escabeche de arenque",
      "categoria": "Pescado/Marisco",
      "precio": 19,
      "stock": 112
    }, {
      "_id": "552474d0d9e3d079f78e4f14",
      "nombre": "Salmón ahumado Gravad",
      "categoria": "Pescado/Marisco",
      "precio": 26,
      "stock": 11
    }, {
      "_id": "552474d0d9e3d079f78e4f15",
      "nombre": "Vino Côte de Blaye",
      "categoria": "Bebidas",
      "precio": 263,
      "stock": 17
    }, {
      "_id": "552474d0d9e3d079f78e4f16",
      "nombre": "Licor verde Chartreuse",
      "categoria": "Bebidas",
      "precio": 18,
      "stock": 69
    }, {
      "_id": "552474d0d9e3d079f78e4f17",
      "nombre": "Carne de cangrejo de Boston",
      "categoria": "Pescado/Marisco",
      "precio": 18.4,
      "stock": 123
    }, {
      "_id": "552474d0d9e3d079f78e4f18",
      "nombre": "Crema de almejas estilo Nueva Inglaterra",
      "categoria": "Pescado/Marisco",
      "precio": 9.2,
      "stock": 85
    }, {
      "_id": "552474d0d9e3d079f78e4f19",
      "nombre": "Tallarines de Singapur",
      "categoria": "Granos/Cereales",
      "precio": 14,
      "stock": 26
    }, {
      "_id": "552474d0d9e3d079f78e4f1a",
      "nombre": "Café de Malasia",
      "categoria": "Bebidas",
      "precio": 46,
      "stock": 17
    }, {
      "_id": "552474d0d9e3d079f78e4f1b",
      "nombre": "Azúcar negra Malacca",
      "categoria": "Condimentos",
      "precio": 19.45,
      "stock": 27
    }, {
      "_id": "552474d0d9e3d079f78e4f1c",
      "nombre": "Arenque ahumado",
      "categoria": "Pescado/Marisco",
      "precio": 9,
      "stock": 5
    }, {
      "_id": "552474d0d9e3d079f78e4f1d",
      "nombre": "Arenque salado",
      "categoria": "Pescado/Marisco",
      "precio": 12,
      "stock": 95
    }, {
      "_id": "552474d0d9e3d079f78e4f1e",
      "nombre": "Galletas Zaanse",
      "categoria": "Repostería",
      "precio": 9,
      "stock": 36
    }, {
      "_id": "552474d0d9e3d079f78e4f1f",
      "nombre": "Chocolate holandés",
      "categoria": "Repostería",
      "precio": 12,
      "stock": 15
    }, {
      "_id": "552474d0d9e3d079f78e4f20",
      "nombre": "Regaliz",
      "categoria": "Repostería",
      "precio": 20,
      "stock": 10
    }, {
      "_id": "552474d0d9e3d079f78e4f21",
      "nombre": "Chocolate blanco",
      "categoria": "Repostería",
      "precio": 16,
      "stock": 65
    }, {
      "_id": "552474d0d9e3d079f78e4f22",
      "nombre": "Manzanas secas Manjimup",
      "categoria": "Frutas/Verduras",
      "precio": 53,
      "stock": 20
    }, {
      "_id": "552474d0d9e3d079f78e4f23",
      "nombre": "Cereales para Filo",
      "categoria": "Granos/Cereales",
      "precio": 7,
      "stock": 38
    }, {
      "_id": "552474d0d9e3d079f78e4f24",
      "nombre": "Empanada de carne",
      "categoria": "Carnes",
      "precio": 32,
      "stock": 0
    }, {
      "_id": "552474d0d9e3d079f78e4f25",
      "nombre": "Empanada de cerdo",
      "categoria": "Carnes",
      "precio": 7,
      "stock": 21
    }, {
      "_id": "552474d0d9e3d079f78e4f26",
      "nombre": "Paté chino",
      "categoria": "Carnes",
      "precio": 24,
      "stock": 115
    }, {
      "_id": "552474d0d9e3d079f78e4f27",
      "nombre": "Gnocchi de la abuela Alicia",
      "categoria": "Granos/Cereales",
      "precio": 38,
      "stock": 21
    }, {
      "_id": "552474d0d9e3d079f78e4f28",
      "nombre": "Raviolis Angelo",
      "categoria": "Granos/Cereales",
      "precio": 19.5,
      "stock": 36
    }, {
      "_id": "552474d0d9e3d079f78e4f29",
      "nombre": "Caracoles de Borgoña",
      "categoria": "Pescado/Marisco",
      "precio": 13.25,
      "stock": 62
    }, {
      "_id": "552474d0d9e3d079f78e4f2a",
      "nombre": "Raclet de queso Courdavault",
      "categoria": "Lácteos",
      "precio": 55,
      "stock": 79
    }, {
      "_id": "552474d0d9e3d079f78e4f2b",
      "nombre": "Camembert Pierrot",
      "categoria": "Lácteos",
      "precio": 34,
      "stock": 19
    }, {
      "_id": "552474d0d9e3d079f78e4f2c",
      "nombre": "Sirope de arce",
      "categoria": "Condimentos",
      "precio": 28,
      "stock": 113
    }, {
      "_id": "552474d0d9e3d079f78e4f2d",
      "nombre": "Tarta de azúcar",
      "categoria": "Repostería",
      "precio": 49,
      "stock": 17
    }, {
      "_id": "552474d0d9e3d079f78e4f2e",
      "nombre": "Sandwich de vegetales",
      "categoria": "Condimentos",
      "precio": 43,
      "stock": 24
    }, {
      "_id": "552474d0d9e3d079f78e4f2f",
      "nombre": "Bollos de pan de Wimmer",
      "categoria": "Granos/Cereales",
      "precio": 33,
      "stock": 22
    }, {
      "_id": "552474d0d9e3d079f78e4f30",
      "nombre": "Salsa de pimiento picante de Luisiana",
      "categoria": "Condimentos",
      "precio": 21,
      "stock": 76
    }, {
      "_id": "552474d0d9e3d079f78e4f31",
      "nombre": "Especias picantes de Luisiana",
      "categoria": "Condimentos",
      "precio": 17,
      "stock": 4
    }, {
      "_id": "552474d0d9e3d079f78e4f32",
      "nombre": "Cerveza Laughing Lumberjack",
      "categoria": "Bebidas",
      "precio": 14,
      "stock": 52
    }, {
      "_id": "552474d0d9e3d079f78e4f33",
      "nombre": "Barras de pan de Escocia",
      "categoria": "Repostería",
      "precio": 12,
      "stock": 6
    }, {
      "_id": "552474d0d9e3d079f78e4f34",
      "nombre": "Queso Gudbrandsdals",
      "categoria": "Lácteos",
      "precio": 36,
      "stock": 26
    }, {
      "_id": "552474d0d9e3d079f78e4f35",
      "nombre": "Cerveza Outback",
      "categoria": "Bebidas",
      "precio": 15,
      "stock": 15
    }, {
      "_id": "552474d0d9e3d079f78e4f36",
      "nombre": "Crema de queso Fløtemys",
      "categoria": "Lácteos",
      "precio": 21,
      "stock": 26
    }, {
      "_id": "552474d0d9e3d079f78e4f37",
      "nombre": "Queso Mozzarella Giovanni",
      "categoria": "Lácteos",
      "precio": 34,
      "stock": 14
    }, {
      "_id": "552474d0d9e3d079f78e4f38",
      "nombre": "Caviar rojo",
      "categoria": "Pescado/Marisco",
      "precio": 15,
      "stock": 101
    }, {
      "_id": "552474d0d9e3d079f78e4f39",
      "nombre": "Queso de soja Longlife",
      "categoria": "Frutas/Verduras",
      "precio": 10,
      "stock": 4
    }, {
      "_id": "552474d0d9e3d079f78e4f3a",
      "nombre": "Cerveza Klosterbier Rhönbräu",
      "categoria": "Bebidas",
      "precio": 7,
      "stock": 125
    }, {
      "_id": "552474d0d9e3d079f78e4f3b",
      "nombre": "Licor Cloudberry",
      "categoria": "Bebidas",
      "precio": 18,
      "stock": 57
    }, {
      "_id": "552474d0d9e3d079f78e4f3c",
      "nombre": "Salsa verde original Frankfurter",
      "categoria": "Condimentos",
      "precio": 13,
      "stock": 32
    }];

    $scope.items = [];
    $scope.subtotal = 0;
    $scope.impuestos = 0;
    $scope.total = 0;
    $scope.aPagar = 0;

    var id = 0;

    var obtenerId = function () {
      return id++;
    }

    $scope.agregarItem = function (producto) {

      //console.log('producto.id: ', producto._id);
      var position = $scope.productos.findIndex(function (elemento, indice, productos) {
        return elemento._id.localeCompare(producto._id) === 0;
      });

      $scope.productos[position].cantidad = 1;
      $scope.items.push($scope.productos[position]);
      //console.log('Producto agregado: %O', $scope.productos[position]);
      $scope.actualizarTotal();
    }

    $scope.incrementarCantidad = function (id) {
      // encontrar el indice del arreglo factura que corresponde a id
      var position = $scope.items.findIndex(function (elemento, indice, items) {
        return elemento._id === id;
      });
      // actualizar la cantidad del arreglo factura en esa posicion
      $scope.items[position].cantidad++;
      $scope.actualizarTotal();
    };

    $scope.actualizarTotal = function () {
      var total = $scope.items.map(function (item) {
        return (item.precio * item.cantidad);
      }).reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual;
      });

      //console.log('total: ', total);
      $scope.total = total;
    };
  });
