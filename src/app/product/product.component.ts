import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/AppConfig';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productsList: any;

  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe((productsArray) => {
        this.productsList = productsArray.valueOf();
        for (const product of this.productsList)
          console.log(product);
      });
  };
}
