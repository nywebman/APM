(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource", //need to pass array, which first param needs to be productResource
                     ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        vm.searchCriteria = "GDN"; //can bind later to text box

        productResource.query({search: vm.searchCriteria},function (data) {
            vm.products = data;
        })
    }
}());