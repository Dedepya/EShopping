import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  pId: number;
  product: any;
  allProds: any = [];

  constructor(private productService: ProductService,private cartService: CartService, private route: ActivatedRoute) {
    this.pId = 0;
    this.product = {}
  }

  ngOnInit() {
    this.product = {}

    this.route.params.subscribe(params => {
      this.pId = params['id'];
      this.productService.getProductById(this.pId)
        .subscribe(prod => this.product = prod.valueOf());
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
