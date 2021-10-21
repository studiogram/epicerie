import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  /* "strictPropertyInitialization": false, tsconfig.ts */
  @Input() product: Product;
  @Input() i: number;
  constructor() { }

  ngOnInit(): void {
  }
  setUrl(name: string): string {
    return '/assets/' + name + '.jpg';
  }

}
