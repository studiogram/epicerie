import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent implements OnInit {
  @Input() product: Product;
  @Input() id: number;
  @Output() name = new EventEmitter();

  constructor(private _products: ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit(productForm: NgForm) {
    console.log(productForm.value); 
    this.name.emit(productForm.value.name);
    this._products.updateProduct(this.id, productForm.value);
  }
}
