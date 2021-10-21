import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  nameProduct: string;
  constructor() { }

  ngOnInit(): void {
  }
  onName(name: string) {
    this.nameProduct = name;
  }
}
