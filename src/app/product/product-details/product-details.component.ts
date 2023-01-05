import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  pid: number;
  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.pid = 0;
    this.product = {}
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pid = params['id'];
      this.productService.getProductById(this.pid)
        .subscribe(prod => this.product = prod.valueOf());
    });
  }
}
