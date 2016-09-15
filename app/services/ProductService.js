var Store;
(function (Store) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($http) {
                this.$http = $http;
            }
            ProductService.prototype.getProducts = function () {
                return this.$http.get('http://localhost:3000/products');
            };
            ProductService.prototype.productGetById = function (id) {
                return this.$http.get('http://localhost:3000/products/' + id);
            };
            ProductService.ID = "ProductService";
            ProductService.$inject = ["$http"];
            return ProductService;
        }());
        Services.ProductService = ProductService;
        Store.App.service(ProductService.ID, ProductService);
    })(Services = Store.Services || (Store.Services = {}));
})(Store || (Store = {}));

//# sourceMappingURL=ProductService.js.map
