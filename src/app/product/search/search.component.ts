import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchQuery: string;
  allProds: any = [];

  constructor(private router: Router, private productService: ProductService) { this.searchQuery = ''; }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchProduct() {

    this.productService.getAllProducts().subscribe((prod) => {
      this.allProds = prod.valueOf();
      for (const prod of this.allProds) {
        console.log(prod.productName.toLowerCase());
        if (prod.productName.toLowerCase().search(this.searchQuery.toLowerCase()) >= 0) {
          this.productService.getProductById(prod.id)
            .subscribe(resp => {
              this.router.navigate(['/product-details', prod.id]);
            });
        }
      }
    });
  }
}
