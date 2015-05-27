(function () {
    "use strict";

    angular
        .module("productManagement") //register with module
        .controller("ProductEditCtrl",
                     ProductEditCtrl);

    function ProductEditCtrl(productResource) {
        var vm = this; //set up model
        vm.product = {};
        vm.message = '';

        productResource.get({ id: 5}, //hard coding 5 or 0 for new object
            function (data) {
                vm.product = data;
                vm.originalProduct = angular.copy(data);
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
                    })
            }
            else {
                vm.product.$save(
                    function(data){
                        vm.originalProduct=angular.copy(data);
                        vm.message = "...Save Copmlete";
                    })
            }
        };

        vm.cancel = function (editForm) { //function called from button on html page -> ng-click="vm.cancel(productForm)"
            editForm.$setPristine();
            vm.product = angular.copy(vm.originalProduct);
            vm.message = "";
        };

    }
}());