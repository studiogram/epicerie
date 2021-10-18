import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title: string = "Mon titre";
  quantity: number = 4;
  total: number = 20;
  constructor() {
  }

  ngOnInit(): void {
  }
  getTaxes(): number {
    return this.total * 0.2;
  }

}
