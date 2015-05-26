(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource", //need to pass array, which first param needs to be productResource
                     ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        vm.searchCriteria = "GDN"; 

        //productResource.query({$skip:1, $top:3},function (data) {
        //productResource.query({$filter:"contains(ProductCode,'GDN')"},function (data) {

        productResource.query({$filter:"contains(ProductCode,'GDN') and Price ge 5 and Price le 20",
            $orderby: "Price desc"},function (data) {
            vm.products = data;
        })
    }
}());