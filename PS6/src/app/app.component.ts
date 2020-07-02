import { Component } from '@angular/core';
import { BREEDS} from './Breeds';
import { BREED} from './Breed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PS6';
  breeds = BREEDS;
  selectedBreed: BREED;
  breedPresent = false;

  selectBreed(breed: BREED) {
    this.selectedBreed = breed;
  }

  chooseIt() {
    this.breedPresent = true;
  }
}
