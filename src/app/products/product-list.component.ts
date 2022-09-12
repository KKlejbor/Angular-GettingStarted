import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImages: boolean = false;

    private _listFilter: string = "";

    
    public get listFilter() : string {
      return this._listFilter;
    }

    public set listFilter(value : string) {
      this._listFilter = value;
      this.filteredProducts = this.performFilter(value);
    }
    
    filteredProducts: IProduct[] = [];

    products: IProduct[] = [] ;

      constructor(private productService: ProductService){}


      performFilter(filterBy: string): IProduct[]{
        return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()));
      }

      toggleImages(): void{
        this.showImages = !this.showImages;
      }

      ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = [... this.products];
      }

      onRatingClicked(message: string): void{
        this.pageTitle = "Product List: " + message;
      }
}