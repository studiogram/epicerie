import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
  animaux: Animal[] = [
    {name: 'koala', quantity: 40}, 
    {name: 'fourmi', quantity: 100}
  ];
  constructor() { }
}
