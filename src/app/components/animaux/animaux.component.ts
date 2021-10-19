import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {
  testAnimal: string = 'koala';
  animaux: Animal[] = this._animaux.animaux;
  
  constructor(private _animaux: AnimauxService) { }

  ngOnInit(): void {
  }

}
