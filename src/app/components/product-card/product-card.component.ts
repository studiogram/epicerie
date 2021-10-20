import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {name: '', img: '', price: 0, stock: 0 };
  @Input() i: number= 0;
  constructor() { }

  ngOnInit(): void {
  }

}
