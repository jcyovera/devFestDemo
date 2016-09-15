module Store.Services {

    export interface IProductService {
        getProducts(): ng.IHttpPromise<Store.Models.IProduct[]>;
        productGetById(id:number): ng.IHttpPromise<Store.Models.IProduct>
    }

    export class ProductService implements IProductService {
        public static ID = "ProductService";
        public static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) { }

        getProducts(): ng.IHttpPromise<Store.Models.IProduct[]> {
            return this.$http.get('http://localhost:3000/products');
        }
        productGetById(id:number): ng.IHttpPromise<Store.Models.IProduct> {
            return this.$http.get('http://localhost:3000/products/'+id);
        }
    }
    Store.App.service(ProductService.ID, ProductService);
}
