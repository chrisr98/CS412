import { Component, OnInit } from '@angular/core';
import {BREEDS} from '../../Breeds-Mock';
import {BREED} from '../../Breeds';

@Component({
  selector: 'app-parent',
  template: '<h1>Title: {{title}}</h1>' + '<h3>Container:</h3>' + '<button (click)="chooseIt()">Fetch</button>' +
    '<app-child [selectedBreed]="selectedBreed"></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'PS7 App';
  breeds = BREEDS;
  selectedBreed: BREED;
  breedPresent = false;

  selectBreed(breed: BREED) {
    this.selectedBreed = breed;
  }

  chooseIt() {
    this.breedPresent = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
