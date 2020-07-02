import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h3>Child</h3>' +
    '<br/>Title is : {{title}}',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() selectedBreed: string;

  constructor() { }

  ngOnInit(): void {
  }

}
