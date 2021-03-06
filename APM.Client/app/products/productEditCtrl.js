﻿(function () {
    "use strict";

    angular
        .module("productManagement") 
        .controller("ProductEditCtrl",
                     ProductEditCtrl);

    function ProductEditCtrl(productResource) {
        var vm = this; //set up model
        vm.product = {};
        vm.message = '';

        productResource.get({ id: 5}, 
            function (data) {
                vm.product = data;
                vm.originalProduct = angular.copy(data);
            },
            function (response) {
                vm.message = response.statusText + "\r\n";
                if (response.data.exceptionMessage)
                    vm.message += response.data.exceptionMessage;
            });

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }

        vm.submit = function () {
            vm.message = '';
            if (vm.product.productId) {
                vm.product.$update({ id: vm.product.productId },
                    function (data) {
                        vm.message = "...Save Copmlete";
                    },
                    function (response) {
                        vm.message = response.statusText + "\r\n";
                        if (response.data.modelSate) {
                            for (var key in response.data.modelSate) {
                                vm.message += response.data.modelSate[key] + "\r\n";
                            }
                        }
                    });
            }
            else {
                vm.product.$save(
                    function (data) {
                        vm.originalProduct = angular.copy(data);
                        vm.message = "...Save Copmlete";
                    },
                    function (response) {
                        vm.message = response.statusText + "\r\n";
                        if (response.data.modelSate) {
                            for (var key in response.data.modelSate) {
                                vm.message += response.data.modelSate[key] + "\r\n";
                            }
                        }
                    });
            }
        };

        vm.cancel = function (editForm) { //function called from button on html page -> ng-click="vm.cancel(productForm)"
            editForm.$setPristine();
            vm.product = angular.copy(vm.originalProduct);
            vm.message = "";
        };

    }
}());