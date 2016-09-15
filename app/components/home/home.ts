module Store.Components {
     import IProduct = Store.Models.IProduct;
     import IProductService = Store.Services.IProductService;

    export class HomeComponent implements ng.IComponentOptions {
        public static ID = "home";
        public bindings: any;
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.bindings = {};
            this.controller = HomeController;
            this.templateUrl = AppConstants.CreateTemplatePath("views/home.html");
        }
    }

    export class HomeController {
        public static ID = "HomeController";
        public static $inject = ['$rootScope', '$location', '$window', '$timeout','ProductService'];
        hideAll: boolean = true;
        title:string;
        products:IProduct[];
        showImage:boolean;
        currentProduct: Object;

        constructor(private $rootScope: ng.IRootScopeService, 
            private $location: ng.ILocationService, 
            private $window: ng.IWindowService, 
            private $timeout: ng.ITimeoutService,
            private ProductService:IProductService) {

        }

        $onInit(): void {
            this.$rootScope['spinner'].on();
            this.title="Lista de productos"; 
            this.showImage=false;
            this.ProductService.getProducts().then(
               res=>{
                   this.products=res.data;
                   this.$rootScope['spinner'].off();
               }
           );
        }
        toggleImage():void{
            this.showImage=!this.showImage;
        }
         getSpinnerStatus = () => {
            return this.$rootScope['spinner'].active;
        }
        
    }

    Store.App.component(HomeComponent.ID, new HomeComponent());
} 