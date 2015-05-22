(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource", //need to pass array, which first param needs to be productResource
                     ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        productResource.query(function (data) {
            vm.products = data;
        })
    }
}());