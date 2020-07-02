import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h3>Child</h3>' +
    '<br/>Message is: {{message}}' + '<br/>Breed is: {{selectedBreed}}',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() selectedBreed: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
