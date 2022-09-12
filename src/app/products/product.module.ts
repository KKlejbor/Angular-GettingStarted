import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { StarComponent } from "../shared/star.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { ProductListComponent } from "./product-list.component";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: "products", component: ProductListComponent},
            {
                path: "products/:id",
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            }
        ])
    ]
})
export class ProductModule{}