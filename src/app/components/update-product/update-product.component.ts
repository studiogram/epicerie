import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = this.router.snapshot.params['id'];
  product: Product = this._products.products[this.id];
  constructor(private router: ActivatedRoute, private _products: ProductsService) { }

  ngOnInit(): void {
    console.log(this.router);
  }

}
