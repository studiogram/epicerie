import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.scss']
})
export class AnimauxComponent implements OnInit {
  testAnimal: string = 'koala';
  animaux: Animal[] = [
    {name: 'koala', quantity: 40}, 
    {name: 'fourmi', quantity: 100}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
