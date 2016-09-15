/// <reference path="../typings/tsd.d.ts" />
var Store;
(function (Store) {
    Store.AppId = "store";
    Store.App = angular.module(Store.AppId, []);
    var appDependencies = ['ngRoute', 'ngResource', 'ngAnimate', 'treasure-overlay-spinner', Store.AppId];
    var app = angular.module("storeApp", appDependencies);
    app.run(run);
    run.$inject = ['$rootScope'];
    function run($rootScope) {
        $rootScope.spinner = {
            active: false,
            on: function () {
                this.active = true;
            },
            off: function () {
                this.active = false;
            }
        };
    }
    app.config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                .when("/home", { template: "<store><home></home></store>" })
                .otherwise('/home');
        }]);
    var AppConstants = (function () {
        function AppConstants() {
        }
        AppConstants.CreateTemplatePath = function (templatepath) {
            return this.APPCONTENTPATH + templatepath;
        };
        AppConstants.CreateWebAppPath = function (controllerpath) {
            return this.WEBAPPPATH + controllerpath;
        };
        AppConstants.APPCONTENTPATH = "/app/";
        AppConstants.WEBAPPPATH = "/restcall";
        return AppConstants;
    }());
    Store.AppConstants = AppConstants;
})(Store || (Store = {}));

//# sourceMappingURL=appComponent.js.map
