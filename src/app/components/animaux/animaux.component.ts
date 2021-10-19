import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.scss']
})
export class AnimauxComponent implements OnInit {
  testAnimal: string = 'koala';
  animaux: { name: string; quantity: number; }[] = [
    {name: 'koala', quantity: 40}, 
    {name: 'fourmi', quantity: 100}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
