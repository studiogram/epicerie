import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {name: 'Cerise',price: 5, stock: 10 },
    {name: 'Citron',price: 4, stock: 4 },
    {name: 'Fraise',price: 3, stock: 10 },
    {name: 'Poire', price: 2, stock: 4 },
  ];
  constructor() { }
  addProduct(product: Product): void {
    this.products.push(product);
  }
  updateProduct(i: number, product: Product): void {
    this.products.splice(i, 1, product);
  }
  removeProduct(i: number): void {
    this.products.splice(i, 1);
  }
}
