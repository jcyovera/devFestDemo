var Store;
(function (Store) {
    var Components;
    (function (Components) {
        var HomeComponent = (function () {
            function HomeComponent() {
                this.bindings = {};
                this.controller = HomeController;
                this.templateUrl = Store.AppConstants.CreateTemplatePath("views/home.html");
            }
            HomeComponent.ID = "home";
            return HomeComponent;
        }());
        Components.HomeComponent = HomeComponent;
        var HomeController = (function () {
            function HomeController($rootScope, $location, $window, $timeout, ProductService) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$location = $location;
                this.$window = $window;
                this.$timeout = $timeout;
                this.ProductService = ProductService;
                this.hideAll = true;
                this.getSpinnerStatus = function () {
                    return _this.$rootScope['spinner'].active;
                };
            }
            HomeController.prototype.$onInit = function () {
                var _this = this;
                this.$rootScope['spinner'].on();
                this.title = "Lista de productos";
                this.showImage = false;
                this.ProductService.getProducts().then(function (res) {
                    _this.products = res.data;
                    _this.$rootScope['spinner'].off();
                });
            };
            HomeController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            HomeController.ID = "HomeController";
            HomeController.$inject = ['$rootScope', '$location', '$window', '$timeout', 'ProductService'];
            return HomeController;
        }());
        Components.HomeController = HomeController;
        Store.App.component(HomeComponent.ID, new HomeComponent());
    })(Components = Store.Components || (Store.Components = {}));
})(Store || (Store = {}));

//# sourceMappingURL=home.js.map
