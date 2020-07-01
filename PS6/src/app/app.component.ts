import { Component } from '@angular/core';
import { BREEDS} from './Breeds-Mock';
import { BREED} from './Breeds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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
}
