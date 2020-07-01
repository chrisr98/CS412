import { Component, OnInit } from '@angular/core';
import {BREEDS} from '../Breeds-Mock';
import {BREED} from '../Breeds';

@Component({
  selector: 'app-container',
  template: '<h3>Container:</h3>' + '<button (click)="chooseIt()">Fetch</button>' +
    '<app-child [counter]="counter"></app-child>',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

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
