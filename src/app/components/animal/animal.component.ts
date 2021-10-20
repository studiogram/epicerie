import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  id: number = this.router.snapshot.params['id'];
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
