import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() name = new EventEmitter();

  constructor(private _products: ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit(productForm: NgForm) {
    console.log(productForm.value); 
    this._products.addProduct(productForm.value);
    this.name.emit(productForm.value.name);
    productForm.resetForm();
  }
}
