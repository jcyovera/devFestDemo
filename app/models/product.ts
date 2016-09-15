module Store.Models {
    export interface IProduct{
        id:number;
        productName:string;
        productCode:string;
        releaseDate:Date;
        price:number;
        description:string;
        imageUrl:string;
    }
}