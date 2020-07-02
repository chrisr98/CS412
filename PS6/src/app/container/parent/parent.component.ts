import { Component, OnInit } from '@angular/core';
import {BREEDS} from '../../Breeds';
import {BREED} from '../../Breed';

@Component({
  selector: 'app-parent',
  template: '<h1>Title: {{title}}</h1>' + '<h3>Container:</h3>' + '<button (click)="chooseIt()">Fetch Message</button>' +
    '<app-child [selectedBreed]="selectedBreed"></app-child>' + '<app-child [message]="message"></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'PS7 App';
  breeds = BREEDS;
  selectedBreed: BREED;
  breedPresent = false;
  messages = ['Hello', 'Morning', 'How are you?'];
  message = '';
  counter = 0;
  selectBreed(breed: BREED) {
    this.selectedBreed = breed;
  }

  chooseIt() {
    this.breedPresent = true;
    this.counter++;
    if (this.counter === 2) {
      this.counter = 0;
    }
    this.message = this.messages[this.counter];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
