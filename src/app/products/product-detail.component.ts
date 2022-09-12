import {Component, OnDestroy, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = "Product Detail";
    product: IProduct | undefined;
    subscritpion!: Subscription;
    errorMessage: string ="";
    
    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) {}

    ngOnInit(): void{
        const id = Number(this.route.snapshot.paramMap.get("id"));
        
        this.subscritpion = this.productService.getProducts().subscribe({
            next: products => this.product = products.find((element) => element.productId === id),
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.subscritpion.unsubscribe();
    }

    onBack(): void{
        this.router.navigate(['/products']);
    }
}