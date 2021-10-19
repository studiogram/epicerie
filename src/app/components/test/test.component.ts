import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  lastUpdate: Date = new Date();
  title: string = "Mon titre";
  quantity: number = 2;
  total: number = 20;
  more: boolean = false;
  clickCount: number = 0; 

  constructor() {
    if(this.quantity > 3 ) this.more = true;
  }

  ngOnInit(): void {
  }
  getTaxes(): number {
    return this.total * 0.2;
  }

  addClick(): void {
    this.clickCount ++;
  }

}
