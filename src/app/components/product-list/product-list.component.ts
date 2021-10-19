import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {name: 'Cerise', img: '/assets/cerise.jpg', price: 5, stock: 10 },
    {name: 'Citron', img: '/assets/citron.jpg', price: 4, stock: 4 },
    {name: 'Fraise', img: '/assets/fraise.jpg', price: 3, stock: 10 },
    {name: 'Poire', img: '/assets/poire.jpg', price: 2, stock: 4 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
