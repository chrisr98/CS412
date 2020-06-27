import { Component } from '@angular/core';
import { BREEDS} from './Breeds-Mock';
import { BREED} from './Breeds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS412 Breed Names';
  breeds = BREEDS;
  selectedBreed: BREED;

  selectBreed(breed: BREED) {
    this.selectedBreed = breed;
  }
}
