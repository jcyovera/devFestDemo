/// <reference path="../typings/tsd.d.ts" />
 module Store {
    export const AppId = "store";
    export const App: angular.IModule = angular.module(AppId, []);

    let appDependencies = ['ngRoute','ngResource','ngAnimate','treasure-overlay-spinner', AppId];
    let app = angular.module("storeApp", appDependencies);

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

    app.config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/home", { template: "<store><home></home></store>" })
            .otherwise('/home');
    }]);

    export class AppConstants {
        static APPCONTENTPATH: string = "/app/";
        static WEBAPPPATH: string = "/restcall";

        static CreateTemplatePath(templatepath: string): string {
            return this.APPCONTENTPATH + templatepath;
        }

        static CreateWebAppPath(controllerpath: string): string {
            return this.WEBAPPPATH + controllerpath;
        }
    }
}