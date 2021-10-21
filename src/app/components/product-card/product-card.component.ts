import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  /* "strictPropertyInitialization": false, tsconfig.ts */
  @Input() product: Product;
  @Input() i: number;
  constructor(private _products : ProductsService) { }

  ngOnInit(): void {
  }
  setUrl(name: string): string {
    return '/assets/' + name + '.jpg';
  }
  removeProductComponent(i: number): void {
    this._products.removeProduct(i);
  }

}
