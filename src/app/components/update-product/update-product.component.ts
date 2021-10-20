import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = this.router.snapshot.params['id'];
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
